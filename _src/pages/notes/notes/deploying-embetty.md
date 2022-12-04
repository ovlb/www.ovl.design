---
title: 'Deploying Embetty to Production'
date: '2022-12-02'
determination: high
state: evolving
tags:
  - 'cat:web-development'
  - 'cat:privacy'
  - 'cat:social-media'
---

Embetty is a proxy developed by Heise, which allows you to tunnel requests to YouTube or Twitter. The proxy removes their traffic code, allowing you to embed content without

Because the official docs are crap, here’s the steps I took to deploy the Docker image to DigitalOcean. Though it should work on any host that can install Docker.

Tech used:

- DigitalOcean Droplets
- Docker
- Let’s Encrypt (Certbot)
- Nginx as a reverse proxy

## Setting up

[Create a new Droplet](https://cloud.digitialocean.com/droplets/new) in your DigitalOcean admin. I’ve chosen the 2nd smallest, as I don't expect too much traffic on the instance. Your mileage may vary, but you can also upgrade at any time.

[Add a domain to your droplet](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/). We’ll need this to set up Let’s Encrypt later.

After setup, you should be able to SSH on the virtual machine.

## Running Docker

In its simplest form we might just run the Docker container as explained in the docs.

```bash
$ docker run \
  -p 8080:8080 \
  --name embetty \
  --rm \
  -e VALID_ORIGINS=https://example.com \
  -e TWITTER_ACCESS_TOKEN_KEY=... \
  -e TWITTER_ACCESS_TOKEN_SECRET=... \
  -e TWITTER_CONSUMER_KEY=... \
  -e TWITTER_CONSUMER_SECRET=... \
  heiseonline/embetty-server:latest
```

Two problems:

- We can’t use HTTPS this way
- We don’t really want to expose Node directly to the Interwebs
- The command isn’t starting Docker in daemon mode, so it will shut down as soon as you exit
- It maps Docker’s `8080` port to port `8080` of the host

But you can still do this, to test that everything is working. It it is, you can `curl` the domain you added:

```bash
$ curl -i http://embetty.test.com:8080/video/youtube/m6UOo2YGbIE-poster-image

HTTP/1.1 200 OK
X-DNS-Prefetch-Control: off
X-Download-Options: noopen
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Vary: Origin
Content-Type: image/jpeg
Content-Length: 43859
ETag: W/"ab53-wBTzbWdJdkfYVw9QKEz7oNzJdjA"
Date: Fri, 02 Dec 2022 14:32:27 GMT
Connection: keep-alive
```

Okay, great. Actually, no. Let’s fix the issues from above.


```bash
$ docker run \
  -it \
  - d \
  -p 80:8080 \
  --name embetty \
  --rm \
  -e VALID_ORIGINS=https://example.com \
  -e TWITTER_ACCESS_TOKEN_KEY=... \
  -e TWITTER_ACCESS_TOKEN_SECRET=... \
  -e TWITTER_CONSUMER_KEY=... \
  -e TWITTER_CONSUMER_SECRET=... \
  heiseonline/embetty-server:latest
```

With the added `-it` and `-d` flags we add a shell to container (you never know) and start it in daemon/background mode. Great.

We’ve further updated the port mappings to `80:8080`. Port 80 is the standard port for HTTP connections.

## Adding Let’s Encrypt

Last thing: Encrypting the whole thing because `http://` is very old-school (not the good part).

We’ll have to jump through some hoops here. So bear with me.

The following section is based on this guide on [how to run an nginx reverse proxy](https://cloud.google.com/community/tutorials/nginx-reverse-proxy-docker).

We’ll add two other Docker images. One for running the actual nginx, and the other one which houses Let’s Encrypt.

Bur first, create a directory for the TLS certificates:

```bash
cd ~
mkdir certs
```

Afterwards, start the nginx proxy:

```bash
docker run -d -p 80:80 -p 443:443 \
    --name nginx-proxy \
    -v $HOME/certs:/etc/nginx/certs:ro \
    -v /etc/nginx/vhost.d \
    -v /usr/share/nginx/html \
    -v /var/run/docker.sock:/tmp/docker.sock:ro \
    --label com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy=true \
    jwilder/nginx-proxy
```

Note that we are passing `-p` two times. The proxy now listens to the ports for encrypted and unencrypted traffic.

Next, Let’s Encrypt:

```bash
docker run -d \
    --name nginx-letsencrypt \
    --volumes-from nginx-proxy \
    -v $HOME/certs:/etc/nginx/certs:rw \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    jrcs/letsencrypt-nginx-proxy-companion
```

This commands is mapping the previously created cert directory to the common location.

The last step left is to start the embetty container again:

```bash
docker run \
  -it \
  -d \
  --name embetty \
  --rm \
  -e VALID_ORIGINS=https://test.com/ \
  -e 'LETSENCRYPT_EMAIL=admin@test.com
  -e 'LETSENCRYPT_HOST=embetty.test.com' \
  -e VIRTUAL_HOST=embetty.test.com \
  heiseonline/embetty-server:latest
```

Things to note: This command uses no `-p` flag anymore. As the proxy listens on the ports `VIRTUAL_HOST` lets the nginx proxy know which domain it should map to this container. With this setup you could use more Docker containers on the same host and let nginx figure out where what should lead.

Additionally we pass two variables for the Let’s Encrypt config.

And that’s it. The Embetty server is now secured and behind a proxy.

```bash
$ curl -i https://embetty.test.com/video/youtube/m6UOo2YGbIE-poster-image

HTTP/1.1 200 OK
X-DNS-Prefetch-Control: off
X-Download-Options: noopen
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Vary: Origin
Content-Type: image/jpeg
Content-Length: 43859
ETag: W/"ab53-wBTzbWdJdkfYVw9QKEz7oNzJdjA"
Date: Fri, 02 Dec 2022 14:32:27 GMT
Connection: keep-alive
```

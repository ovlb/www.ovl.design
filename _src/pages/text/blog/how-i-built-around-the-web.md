---
title: How I built Around the Web
subtitle: Collecting links & distributing posts
intro: How I added a new format to my website, automated publication to a newsletter, and added categories.
date: '2022-03-25'
image:
  og: 'ovl-og-image-batw.jpg'
  title: 'ovl-title-image-batw.jpg'
  alt: 'View of a construction site. There are steel beams visible, just the raw sceleton, against a slightly clouded but otherwise empty sky.'
series:
  name: 'Worry Stone Diaries'
  issue: 3
tags:
  - isFeatured
  - cat:web-development
  - cat:eleventy
---

I had a problem. I read many articles, I save most of the interesting ones in my Pocket account. And that was it. This list is great, if I’m researching a talk, for example. But the list is also very private. And as I save so much, I never really aggregated anything, so I forget a lot. And I’m seldom logged into Twitter on my computer, so I don’t share too much. Which is a shame, as the things I read are interesting (I guess).

I once built a page, where I posted links. But the page had no RSS, no anything. It wasn’t really useful for anyone. I’m honest enough to myself to know that no-one will visit a random website of mine just because there might be something on there.

The page is now retired, but I’ve something better. I call it [Around the Web](/around-the-web/). Around the Web is a weekly – i hope – collection of all the things I read. [It has an RSS feed](/around-the-web/feed.xml), and I syndicate the posts to Buttondown. [You can subscribe to the newsletter](https://buttondown.email/around-the-web) and get the newest issues right into your inbox.

I like this outcome better. Here’s how I built it.

## The Infrastructure

As the rest of this website, the underlying structure is built with Eleventy. I’ve used the chance to migrate my website to use the [No. 11 starter kit](https://github.com/inframanufaktur/no-11), which I maintain. So having the same baseline for my website makes sense. There are lot of interesting things happening in it, but that’s for another blog post.

All [the posts are Markdown files](https://github.com/ovlb/www.ovl.design/tree/main/_src/pages/around-the-web/posts) in my repo. They have quite dull names, starting at `001`, potentially going up to `999`. This gives me around 18 years worth of issues, if I publish every week. I think that’s enough.

I add all those files to a [collection](https://11ty.dev/docs/collections/) named `aroundTheWeb` [based on this tag](https://github.com/ovlb/www.ovl.design/blob/main/_src/pages/around-the-web/posts/posts.11tydata.js#L3). And use this collection to render the [index page](https://github.com/ovlb/www.ovl.design/blob/main/_src/pages/around-the-web/index.njk) as well as [the feed](https://github.com/ovlb/www.ovl.design/blob/main/_src/pages/around-the-web/feed.njk). The feed uses the useful helpers the [official RSS plugin](https://11ty.dev/docs/plugins/rss/) provides.

Once I had those parts in place, I attempted to figure out how to publish these posts beyond my website. I love RSS, but it’s also a niche technology. But e-mail? Everybody uses e-mail. And as everybody and their tea pot got a newsletter today, I felt inspired. Yet how do you do this?

There’s this approach to syndicating content called <abbr>COPE</abbr> ([Create Once, Publish Everywhere](https://www.smashingmagazine.com/2019/10/create-once-publish-everywhere-wordpress/)). And as I’m terribly lazy, automating this from my feed seemed the way to go. My first impulse was to write some script that hooks into the Eleventy build and creates a new newsletter based on some Voodoo. I had quickly decided to use [Buttondown](https://buttondown.email/) as my newsletter provider, and they offer an API for doing such things.

While the idea is still great, I saw it taking up so much of my time, that I decided to walk the easier walk. I scaled back my ambitions and opened up a Zapier account. For now, they do the work of diffing my RSS feed for new entries, getting the content, and posting it to Buttondown.

## The single posts

My aforementioned decision to name all posts by an increasing integer opened up the possibility to automate some things. The permalink, for example:

```js
permalink: function (data) {
  return `/around-the-web/${data.page.fileSlug}/`
},
```

I know, lazy. Me being lazy is the theme of all this (although my laziness caused a lot of work).

I don't really like the numbers as the page titles, though. They feel boring. All posts have another point of data I could use, however. As it’s a collection of articles collected in a certain timeframe, I save this.

```yaml
dates:
  publish: '2022-03-04'
  start: '2022-02-22'
```

I [manipulate the publishing date before using it ](https://github.com/ovlb/www.ovl.design/blob/main/_filters/set-publish-date.js) so that it is not midnight, but during the day.

I decided to use these as my [page title](https://github.com/ovlb/www.ovl.design/blob/main/_src/pages/around-the-web/posts/posts.11tydata.js#L23), as they offer helpful context:

```js
title: function (data) {
  const { start, publish } = data.parsedDates

  if (start && publish) {
    return `Around the Web (${this.displayDate(
      start,
      'short',
    )}–${this.displayDate(publish, 'short')})`
  }
},
```

The great thing here is that I can use registered filters in my Eleventy computed functions. [`displayDate` is a small little helper](https://github.com/ovlb/www.ovl.design/blob/main/_filters/display-date.js) I was using in my templates anyway. I didn’t need to rewrite it, or require it, or add this logic to the template. Which I like. Every piece of data I can process before rendering is a good piece of data.

This title is great, except for the archive pages. Reading «Around the Web» too often adds nothing. [I don’t use this there](https://github.com/ovlb/www.ovl.design/blob/main/_src/pages/around-the-web/index.njk#L29), and have already violated my advice that every piece of data I can process before rendering is a good piece of data. Thanks, me!

```html
<h2 class="article-card__headline">
	{{ post.data.parsedDates.start | displayDate("short") }}–{{ post.data.parsedDates.publish | displayDate("short") }}
</h2>
```

But in this case, style is substance, so I’ll go ahead and forgive myself.

Having the posts heavily evolve around the issue number, frees up automating capabilities up everywhere. My Open Graph Images? Easy.

```js
`${data.site.baseURL}/img/around-the-web/${data.page.fileSlug}-og.jpg`
```

I guess all of this is kinda familiar, if you’ve seen an Eleventy site before.

## Automating the newsletter

As mentioned above, I did not build something custom for now, as my main goal was to get the posts out, not lose myself in infrastructure.

Maybe that’s the biggest learning here: Manage the time you have, and focus on the most important parts first.

But let’s take a look at the XML structure of the RSS feed entries, and how it can be leveraged to power a newsletter. Here’s the latest post as of now:

```xml
<entry>
  <title>Around the Web (12.3.2022–19.3.2022)</title>
  <link href="www.ovl.design/around-the-web/003/"/>
  <published>2022-03-19T13:12:00Z</published>
  <id>https://www.ovl.design/around-the-web/003/</id>
  <summary type="html">
    Predictive policing without oversight, the wall in which Deep Learning crashed, cryptocurrencies in wartime, and billionaires won’t save us.
  </summary>
  <content type="html">
    <!-- omitted for brevity, but it’s the HTML content of my posts -->
  </content>
</entry>
```

Most of the things in here are probably no surprise. Title, link … This `<id>` is a bit special. It’s the part of the feed that helps feed readers know which posts it has to show as unread.

The structured nature of XML is not only great for feed readers, but also for newsletters. In Buttondown a newsletter effectively consists of two parts: The title and the content.

In Zapier’s UI I can choose from the parts of my parsed XML to construct the newsletter. I decided on the title to be the subject message of my newsletter, for obvious reasons.

The newsletter body is a combination of the summary and the content. This way I mirror the design of my post detail pages, having a brief introduction, before diving into the actual content.

It’s simple, yet gets the job done.

## The category system

Probably the most fun of this whole journey was figuring out how to handle categories. I started without any, but even after three issues saw a problem. How will I find stuff?

Yes, it’s mostly in my bookmarks, but occasionally I also draw conclusions, analyse a situation, and in the future might add other media such as images or tweets. The Around the Web issues become more than mere data, they are thoughts. And as good thoughts evolve, it will be helpful to see what I thought, as an example, about police surveillance and its use of facial recognition in March 2022 to build upon that.

Taxonomies in Eleventy sometimes feel like an unsolved problem. It has the concept of tags, which are used to split your content into [collections](https://www.11ty.dev/docs/collections/). In fact, that’s their sole, official purpose:

> Take care to note that `tags` have a singular purpose in Eleventy: to construct collections of content. Some blogging platforms use Tags to refer to a hierarchy of labels for the content (e.g. a tag cloud).

Others have tried to [build more complex taxonomies](https://boehs.org/node/11ty%20taxonomies). In the example of Evan Boes, they build a multi level, nested system, which is great and gives a lot of flexibility. Jérôme Coupé wrote [a post for a more basic approach](https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/), which is closely to what I did in the end.

Jérôme uses a custom data entry, `categories`. In the end I decided to stick with `tags`, at least for my categories, even though I create a custom collection using `addCollection()`.

Why? Mainly because I plan to use these category tags in other places in the future. I might add something more aligned to the classical concept of tags. So small collections of items, not tied around a broad topic, but tailored to smaller sub-topics. Say, I have the category [Artificial (Un)intelligence](/around-the-web/collections/ai/), sub topics maybe Bias, Deep Learning, GPT-3, and so forth. But building useful taxonomies is hard, and something I’m not an expert in. So for now, let’s stick to the surface. I’ll come back to a more complex setup when need be.

### Setting up category collections

So, how do I _actually_ use tags? Here are the tags of my first post:

```yaml
tags:
  - 'cat:nft'
  - 'cat:cryptocurrency'
  - 'cat:surveillance-state'
  - 'cat:ai'
  - 'cat:war'
  - 'cat:racism'
  - 'cat:gig-economy'
  - 'cat:ransomware'
  - 'cat:metaverse'
  - 'cat:design'
```

All things I want to parse into own collection pages are prefixed with `cat:`. This prefix enables me to quickly weed out the non-category tags.

The next step is that I get all of these tags, to build my collection:

```js
  eleventyConfig.addCollection('atwCategories', function (collectionAPI) {
    /** @type Array */
    const posts = collectionAPI.getFilteredByGlob(
      '_src/pages/around-the-web/posts/*.md',
    )

    const categories = new Set()

    for (const post of posts) {
      const { tags } = post.data

      tags
        .filter((tag) => tag.startsWith('cat:'))
        .forEach((tag) => categories.add(tag))
    }

    return [...categories]
  })
```

In the first step, I use `getFilteredByGlob` to get an array of all my posts.

Following, I create a new [Set](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). A Set is handy here because it stores _unique_ values. I want to avoid having the same category existing multiple times.

The next step is to loop over all `posts`. I get the tags out of the post data, filter to only use the ones starting with `cat:`, and finally adding them to my `categories` Set.

When returning, I convert the Set back to an Array using the [spread syntax](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

As you might have noticed I don’t do anything more, like adding titles or whatever. That’s intentional. I want those category collections to be as simple as possible. For now, I feel that having only the raw collections names and enhancing them later, gives me more flexibility.

With that being said, other approaches are possible here. You might add additional data, even the posts. The flexibility of Eleventy is its biggest strength, and collections can be complex data structures.

### The collection archive

Now that I have the collection readily available, and updating with every build where I add a new collection, let’s take care of the archive next ([full source code on GitHub](https://github.com/ovlb/www.ovl.design/blob/main/_src/pages/around-the-web/AtwCategory.vue)).

At first, let’s create the singles pages using the pagination feature:

```js
  data() {
    return {
      pagination: {
        data: 'collections.atwCategories',
        size: 1,
        alias: 'category',
      },
    }
  },
```

(If this looks like Vue, it’s because it is, actually, Vue. [I’m using `eleventy-plugin-vue`](https://github.com/11ty/eleventy-plugin-vue/), to get the good parts of Vue into 11ty.)

```js
  data() {
    return {
      pagination: {
        data: 'collections.atwCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          this.categoryPermalink(data.category, data.categoryBase),
      },
    }
  },
```

One important thing to note here is `addAllPagesToCollections: true`. Without this, only the first page will show up in other collections (namely `collections.all`, which is used to create my Sitemap).

Next, I added the permalink. I’m using Eleventy computed here, as this gives me access to page data, as well as the filter I’ve defined.

`categoryPermalink` is a simple function, which combines the name of the category, stripping out its prefix, and a base:

```js
module.exports = function (category, base) {
  return `${base}/${category.replace('cat:', '')}/`
}
```

As I’ll add the categories to my blog next, I made it flexible from the beginning.

The last part needed, besides the content, is the title of the page.

### Parsing titles

Let’s remember the list of categories from above.

```yaml
tags:
  - 'cat:nft'
  - 'cat:cryptocurrency'
  - 'cat:surveillance-state'
  - 'cat:ai'
  - 'cat:war'
  - 'cat:racism'
  - 'cat:gig-economy'
  - 'cat:ransomware'
  - 'cat:metaverse'
  - 'cat:design'
```

They are not nice to look at. Kinda mechanic. How do I make this nicer? My first impulse was to create a manual one-to-one mapping of all names. I throw `cat:surveillance-state` into a filter, and get _Surveillance State_ out. Nice!

But, this quickly became tedious. Even with only ten or so categories. Plus, I’d need to maintain the list. Oof. Remember me being lazy? I am also pretty good at forgetting things.

And most of my mapping were basically a slug-like string to a title cased string. In other words: A boring, routine task. This is the thing computers excel at. (Sorry, computer.)

In the end, I decided to create a `capitaliser` filter, which does this.

```js
const { startCase, camelCase } = require('lodash')

module.exports = function (rawName) {
  return startCase(camelCase(rawName.replace('cat:', '').replace('-', ' ')))
}

```

But. There are some categories where auto-parsing does not work (`cat:nft`) , or I want to have something with a bit more flair (`cat:ai`).

I ended up with automation with a manual override:

```js
const { startCase, camelCase } = require('lodash')

module.exports = function (rawName) {
  const displayNames = new Map([
    ['cat:ai', 'Artificial (Un)intelligence'],
    ['cat:nft', 'NFT'],
    ['cat:climate', 'Climate Crisis'],
    ['cat:web', 'World Wide Web'],
  ])

  return (
    displayNames.get(rawName) ||
    startCase(camelCase(rawName.replace('cat:', '').replace('-', ' ')))
  )
}

```

The Map allows me to have some customisation, but when an item is not present in the map, it will fall back to the machine version. I can now also change the displayed appearance, without having to adapt my permalinks (remember, [cool URIs don’t change](https://www.w3.org/Provider/Style/URI.html)).

In the end, the whole system is automation-friendly, but has a surface that makes it nice to look at for humans. And – again, sorry computer – I undertook this endeavour for humans in the first place.

### Displaying categories

There’s only one piece missing. Making the categories accessible to my readers. What good is an archive when users can’t find it? Right.

Here, the pieces I added earlier fell into place easily:

```html
<ul class="inline-list" role="list">
  {% for category in tags | getCategories | aToZ %}
  <li>
    <a href="{{ category | categoryPermalink(categoryBase) }}"
      >{{ category | capitaliser }}</a
    >
  </li>
  {% endfor %}
</ul>

```

I get my categories, sort them from A to Z, and link to them. That was easy (after some days of work).

With the categories done, I came a long way to long-term discoverability, and avoiding too much chaos down the road. Which leaves only one question.

## What next?

I still like the idea to create the newsletter when building the site and cutting out Zapier. It’s a great service, but reducing dependencies feels right. And as I dipped around Eleventy’s source code and its ecosystem quite a lot recently, I feel more confident to actually build this than I did some weeks back.

With posting, I’m kind of where I started. I’m bad at writing as I read. Writing posts takes up a longish block of time each week. I enjoy doing this, but the longer it takes, the higher the likelihood I’ll skip this. I might attempt to build a system where I can share sort snippets for single links and combine them at the end of a week. Maybe. Having the editorial freedom to combine links and connect them is a feature, mind. Possibly I need to get better at writing the posts throughout the week and only add finishing touches on the weekend.

## It’s a wrap (for now)

What a funny ride. Out of the idea to quickly down my weekly reads became a newsletter, a category system, and this post. I’ve learnt a lot about Eleventy’s inner workings throughout this, about automation, and about Atom feeds.

Did you know, that Atom feeds have a draft system of sorts? If you set your `published` date to a date in the future, it’ll only show up to your subscribers after this date has passed.

Now I just need to keep up my publishing rhythm, and decide what to build next. Throughout time I built the larger parts of this system, I have been sick with Covid-19. I’m recovering rapidly. [In the past](/text/worry-stone-diaries-no-1/), I’ve already mentioned how much Ethan’s post [Let a website be a worry stone](https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/) resonated with me. Building this feature gave me a much-needed place of focus and enjoyment over the last week.

P.S. You can [read all issues of Around the Web on its archive](/around-the-web/). If you like what you read, [there’s the RSS feed](https://www.ovl.design/around-the-web/feed.xml), and of course, [the newsletter which you can subscribe too](https://buttondown.email/around-the-web).

Thanks for reading. Stay healthy, and let a website be a worry stone.

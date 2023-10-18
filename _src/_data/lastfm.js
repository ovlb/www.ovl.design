const EleventyFetch = require('@11ty/eleventy-fetch')
const Image = require('@11ty/eleventy-img')

const BASE_URL = `http://ws.audioscrobbler.com/2.0/`
let SPOTIFY_TOKEN

async function getSpotifyToken() {
  const { SPOTIFY_CLIENT, SPOTIFY_SECRET } = process.env

  const b64 = Buffer.from(
    `${SPOTIFY_CLIENT}:${SPOTIFY_SECRET}`,
    'binary',
  ).toString('base64')

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'post',
      headers: {
        Authorization: `Basic ${b64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })

    const data = await response.json()

    return data.access_token
  } catch (e) {
    console.error(e)

    throw e
  }
}

const defaultArguments = new Map([
  ['format', 'json'],
  ['api_key', process.env.LASTFM_KEY],
  ['limit', '10'],
  ['user', process.env.LASTFM_USER],
  ['period', '1month'],
])
const methodMap = new Map([
  ['artists', 'user.gettopartists'],
  ['albums', 'user.gettopalbums'],
])

function getApiPath(method) {
  const base = new URL(BASE_URL)

  base.searchParams.set('method', methodMap.get(method))

  for (const [key, val] of defaultArguments) {
    base.searchParams.set(key, val)
  }

  return base.toString()
}

async function getMedia(url, folder = 'media') {
  return Image(url, {
    cacheOptions: {
      duration: '*',
      directory: `.lastfm/${folder}`,
    },
    widths: [180, 240, 480],
    formats: ['avif', 'webp', 'jpg'],
    outputDir: './dist/img/',
  })
}

async function makeRequest(method) {
  return EleventyFetch(getApiPath(method), {
    cacheDuration: '1d',
    directory: '.lastfm',
    type: 'json',
  })
}

async function searchSpotifyForArtist(name) {
  const { artists } = await EleventyFetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      `artist:${name}`,
    )}&type=artist&limit=10&market=DE`,
    {
      cacheDuration: '1w',
      directory: '.lastfm',
      type: 'json',
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${SPOTIFY_TOKEN}`,
        },
      },
    },
  )

  if (!artists.items.length) {
    return null
  }

  const bestMatch = artists.items[0]

  return bestMatch
}

async function getSpotifyImage(artistData) {
  const { images } = artistData

  const largest = [...images.sort((a, b) => b.width - a.width)].shift()

  const stats = await getMedia(largest.url, 'artists')

  return stats
}

async function processArtists(artists) {
  return Promise.all(
    artists.map(async (artist) => {
      const { name } = artist
      const spotifyData = await searchSpotifyForArtist(name)

      return {
        ...artist,
        image: spotifyData ? await getSpotifyImage(spotifyData) : null,
      }
    }),
  )
}

async function processAlbums(albums) {
  const processed = await Promise.all(
    albums.map(async (album) => {
      const { image } = album
      const highestLastFMResolution = [...image].pop()['#text']

      return {
        ...album,
        image: highestLastFMResolution
          ? await getMedia(
              highestLastFMResolution.replace('300x300', '600x600'),
              'albums',
            )
          : null,
      }
    }),
  )

  return processed
}

module.exports = async function () {
  SPOTIFY_TOKEN = await getSpotifyToken()

  const {
    topartists: { artist },
  } = await makeRequest('artists')
  const {
    topalbums: { album },
  } = await makeRequest('albums')

  return {
    artist: await processArtists(artist),
    album: await processAlbums(album),
  }
}

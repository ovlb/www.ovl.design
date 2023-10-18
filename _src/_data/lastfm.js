const EleventyFetch = require('@11ty/eleventy-fetch')

const BASE_URL = `http://ws.audioscrobbler.com/2.0/`

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

async function makeRequest(method) {
  return EleventyFetch(getApiPath(method), {
    cacheDuration: '1d',
    directory: '.lastfm',
    type: 'json',
  })
}

module.exports = async function () {
  const {
    topartists: { artist },
  } = await makeRequest('artists')
  const {
    topalbums: { album },
  } = await makeRequest('albums')

  return {
    artist,
    album,
  }
}

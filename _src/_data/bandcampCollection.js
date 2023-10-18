const { parseHTML } = require('linkedom')
const EleventyFetch = require('@11ty/eleventy-fetch')

async function fetchCollection(username) {
  return EleventyFetch(`https://bandcamp.com/${username}`, {
    cacheDuration: '1d',
    directory: '.bandcamp',
    type: 'text',
  })
}

/**
 *
 *
 * @param {HTMLLIElement} htmlData
 */
function parseItem(htmlData) {
  return {
    img: htmlData.querySelector('.collection-item-art').getAttribute('src'),
    title: htmlData
      .querySelector('.collection-item-title')
      .innerText.split('\n')[0],
    artist: htmlData
      .querySelector('.collection-item-artist')
      .innerText.replace('by ', ''),
    url: htmlData.querySelector('.item-link').getAttribute('href'),
  }
}

/**
 * Turn data into strings
 *
 * @param {String} raw
 *
 * @return {object}
 */
function parseCollectionToHTML(raw) {
  const { document } = parseHTML(raw)
  const items = document.querySelectorAll('.collection-grid > li')

  return [...items].map((item) => parseItem(item))
}

module.exports = async function () {
  const username = process.env.BANDCAMP_USERNAME

  const rawCollectionData = await fetchCollection(username)

  return parseCollectionToHTML(rawCollectionData)
}

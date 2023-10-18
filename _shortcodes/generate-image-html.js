const Image = require('@11ty/eleventy-img')

module.exports = function (metadata, alt = '', sizes = '5rem') {
  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  }

  return Image.generateHTML(metadata, imageAttributes)
}

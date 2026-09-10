import Image from '@11ty/eleventy-img'

export default function (metadata, alt = '', sizes = '5rem') {
  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  }

  return Image.generateHTML(metadata, imageAttributes)
}

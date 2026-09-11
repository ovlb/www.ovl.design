import Image from '@11ty/eleventy-img'
import getFullSource from '../_helper/get-full-source.ts'

const defaultOptions = {
  widths: [140, 320, null],
  sizes: '25%',
  formats: ['avif', 'webp', 'jpeg'],
  urlPath: '/img/',
  outputDir: './dist/img/',
}

export default async function (
  src: any,
  alt: any,
  sizes: any,
  imgAttrs = {},
  options = {},
) {
  const fullSrc = getFullSource(src)

  let metadata = await Image(fullSrc, {
    ...defaultOptions,
    ...options,
  })

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
    ...imgAttrs,
  }

  return Image.generateHTML(metadata, imageAttributes)
}

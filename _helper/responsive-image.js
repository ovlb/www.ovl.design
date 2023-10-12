const Image = require('@11ty/eleventy-img')

const getFullSource = require('../_helper/get-full-source')

const IS_PROD = process.env.ELEVENTY_ENV === 'production'

const defaultOptions = {
  widths: [140, 320, 680, 790, 1024, null],
  sizes: process.env.CONTENT_IMAGE_SIZES || '100%',
  formats: ['avif', 'webp', 'jpeg'],
  urlPath: '/img/',
  outputDir: './dist/img/',
}

function renderPictureHTML($el, meta, options) {
  return `<picture>
    ${options.formats
      .map((format) => {
        return `<source type="image/${format}" sizes="${
          options.sizes
        }" srcset="${meta[format].map((p) => p.srcset).join(', ')}">`
      })
      .join('\n')}
    ${$el.outerHTML}
  </picture>`
}

function setImgAttributes(img, meta, options) {
  let origType = options.formats.includes('png') ? 'png' : 'jpeg'

  if (img.getAttribute('src').endsWith('.gif')) {
    origType = 'gif'
  }

  const last = meta[origType][meta[origType].length - 1]

  img.setAttribute('width', last.width)
  if (origType !== 'gif') {
    img.setAttribute('height', last.height)
  }
  img.setAttribute(
    'src',
    meta[origType][Math.floor(meta[origType].length / 2)].url,
  )
  img.setAttribute('decoding', 'async')
  img.setAttribute('loading', 'lazy')

  if (IS_PROD) {
    // they have done their job, we let them rest
    img.removeAttribute('data-image-widths')
    img.removeAttribute('data-image-sizes')
    img.removeAttribute('data-image-formats')
    img.removeAttribute('data-process-image')
  }
}

// Basic implementation is based on this Gist: https://gist.github.com/Alexs7zzh/d92ae991ad05ed585d072074ea527b5c
async function parseImages(container) {
  // data attr for opt in images
  // and everything inside a markdown block
  const images = [
    ...container.querySelectorAll('[data-process-image]'),
    ...container.querySelectorAll(
      '.md-content img:not(:is(picture img, .tweet-card img))',
    ),
  ]

  const staticImages = images.filter(
    (img) => !img.getAttribute('src').endsWith('.gif'),
  )

  const gifs = images.filter((img) => img.getAttribute('src').endsWith('.gif'))

  for (const gif of gifs) {
    const src = gif.getAttribute('src')

    const options = {
      ...defaultOptions,
      formats: ['webp', 'gif'],
      sharpOptions: {
        animated: true,
      },
    }

    const meta = await Image(getFullSource(src), options)

    setImgAttributes(gif, meta, options)

    gif.outerHTML = renderPictureHTML(gif, meta, options)
  }

  for (const img of staticImages) {
    const src = img.getAttribute('src')

    if (!src) {
      continue
    }

    const { imageSizes: sizes, imageWidths, imageFormats } = img.dataset

    // data-image-widths should be something along the lines of `data-image-widths="[300, 600, 900]"`
    const widths = imageWidths && JSON.parse(imageWidths)
    // `data-image-formats` should be specified in the same format
    // e.g. `data-image-formats="[avif, webp, png]"`
    const formats = imageFormats && JSON.parse(imageFormats)

    const options = {
      ...defaultOptions,
      ...(sizes && { sizes }),
      ...(widths && { widths }),
      ...(formats && { formats }),
    }

    const meta = await Image(getFullSource(src), options)

    setImgAttributes(img, meta, options)

    img.outerHTML = renderPictureHTML(img, meta, options)
  }

  return container.documentElement.outerHTML
}

module.exports = { parseImages }

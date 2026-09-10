import { parseHTML } from 'linkedom'

/**
 * Check if the image starts with the remote upload path and set MEDIA_HOST if it does
 *
 * @param {String} orig
 * @returns
 */
const getFullSource = (orig) => {
  return orig.startsWith(process.env.MEDIA_ROOT_FOLDER)
    ? `${process.env.MEDIA_HOST}${orig}`
    : orig
}

export function transform(content) {
  if (this.outputPath && this.outputPath.endsWith('.html')) {
    let { document } = parseHTML(content)

    const images = document.querySelectorAll('img[src]')

    for (const img of images) {
      img.src = getFullSource(img.src)
    }

    return `<!DOCTYPE html>${document.documentElement.outerHTML}`
  }
  return content
}

export default { transform }

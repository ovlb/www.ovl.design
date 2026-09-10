import { parseHTML } from 'linkedom'
import { parseImages } from '../_helper/responsive-image.js'

export default async function (content) {
  const { document } = parseHTML(
    `<div class="md-content h-entry text__body">${content}</div>`,
  )

  const formatted = await parseImages(document)

  return formatted
}

import { parseHTML } from 'linkedom'
import { parseImages } from '../_helper/responsive-image.ts'

export default async function (content: any) {
  const { document } = parseHTML(
    `<div class="md-content h-entry text__body">${content}</div>`,
  )

  const formatted = await parseImages(document)

  return formatted
}

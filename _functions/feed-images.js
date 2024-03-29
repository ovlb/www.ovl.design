const { parseHTML } = require('linkedom')
const { parseImages } = require('../_helper/responsive-image')

module.exports = async function (content) {
  const { document } = parseHTML(
    `<div class="md-content h-entry text__body">${content}</div>`,
  )

  const formatted = await parseImages(document)

  return formatted
}

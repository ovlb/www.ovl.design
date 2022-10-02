const { parseHTML } = require('linkedom')
const { parseImages } = require('../_helper/responsive-image')

module.exports = {
  // async transforms work, even though the docs don’t tell you about it.
  transform: async function (content) {
    const { outputPath } = this

    if (outputPath && outputPath.endsWith('.html')) {
      let { document } = parseHTML(content)

      const formatted = await parseImages(document)

      return `<!DOCTYPE html>${formatted}`
    }

    return content
  },
}

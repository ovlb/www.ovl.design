const { parseHTML } = require('linkedom')

module.exports = {
  transform: function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      const { document } = parseHTML(content)

      document.body.innerHTML = document.body.innerHTML
        .replaceAll('&lt;cite&gt;', '<cite>')
        .replaceAll('&lt;/cite&gt;', '</cite>')

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }

    return content
  },
}

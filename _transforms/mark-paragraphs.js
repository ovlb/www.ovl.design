const { parseHTML } = require('linkedom')

module.exports = {
  when: 'prod',
  transform: function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      let numberP = 0

      const { document } = parseHTML(content)

      const paragraphs = document.querySelectorAll('.e-content p')

      paragraphs.forEach((p) => {
        numberP++

        p.setAttribute('id', `p-${numberP}`)
      })

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }

    return content
  },
}

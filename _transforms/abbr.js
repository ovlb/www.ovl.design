const { parseHTML } = require('linkedom')

const commonAbbreviations = [
  { text: 'ARIA', title: 'Accessible Rich Internet Applications' },
  { text: 'HTML', title: 'Hypertext Markup Language' },
  { text: 'AI', title: 'Artificial Intelligence' },
  { text: 'AGI', title: 'Artificial General Intelligence' },
]

module.exports = {
  transform: function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      const { document } = parseHTML(content)

      const textContent = document.querySelector('[data-text-body]')

      if (!textContent) return content

      let { innerHTML } = textContent

      for (const { text, title } of commonAbbreviations) {
        innerHTML = innerHTML.replace(
          ` ${text} `,
          ` <abbr title="${title}">${text}</abbr> `,
        )
      }

      textContent.innerHTML = innerHTML

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }

    return content
  },
}

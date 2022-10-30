const { parseHTML } = require('linkedom')

const commonAbbreviations = [
  { text: 'ARIA', title: 'Accessible Rich Internet Applications' },
  { text: 'HTML', title: 'Hypertext Markup Language' },
  { text: 'AI', title: 'Artificial Intelligence' },
  { text: 'AGI', title: 'Artificial General Intelligence' },
  { text: 'ML', title: 'Machine Learning' },
  { text: 'SPD', title: 'Sozialdemokratische Partei Deutschlands' },
  { text: 'GBP', title: 'Great Britisch Pound' },
  { text: 'EUR', title: 'Euro' },
  { text: 'NSU', title: 'Nationalsozialistischer Untergrund' },
  {
    text: 'LAION-5B',
    title: 'Large-scale Artificial Intelligence Open Network 5 Billion',
  },
]

const stylistic = ['DALL-E']

module.exports = {
  transform: function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      const { document } = parseHTML(content)

      const textContent = document.querySelector('[data-text-body]')

      if (!textContent) return content

      let { innerHTML } = textContent

      const getMatcher = (text) => {
        const punctuation = '[ .,:;?’]'

        return new RegExp(`(${punctuation})${text}(${punctuation})`, 'gm')
      }

      for (const { text, title } of commonAbbreviations) {
        innerHTML = innerHTML.replace(
          getMatcher(text),
          `$1<abbr title="${title}">${text}</abbr>$2`,
        )
      }

      for (const style of stylistic) {
        innerHTML = innerHTML.replaceAll(
          getMatcher(style),
          `$1<span class="type-small-caps">${style}</span>$2`,
        )
      }

      textContent.innerHTML = innerHTML

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }

    return content
  },
}

const { parseHTML } = require('linkedom')

const commonAbbreviations = [
  { text: 'AGI', title: 'Artificial General Intelligence' },
  { text: 'AI', title: 'Artificial Intelligence' },
  { text: 'AIDS', title: 'Acquired Immune Deficiency Syndrome' },
  { text: 'API', title: 'Application Programming Interface' },
  { text: 'ARIA', title: 'Accessible Rich Internet Applications' },
  { text: 'EUR', title: 'Euro' },
  { text: 'FIFA', title: 'Fédération Internationale de Football Association' },
  { text: 'GBP', title: 'Great Britisch Pound' },
  { text: 'HTML', title: 'Hypertext Markup Language' },
  { text: 'LAION', title: 'Large-scale Artificial Intelligence Open Network' },
  {
    text: 'LAION-5B',
    title: 'Large-scale Artificial Intelligence Open Network 5 Billion',
  },
  { text: 'LGBTQ', title: 'Lesbian Gay Bi Trans Queer' },
  { text: 'LLM', title: 'Large Language Model' },
  { text: 'ML', title: 'Machine Learning' },
  { text: 'NSU', title: 'Nationalsozialistischer Untergrund' },
  { text: 'TERF', title: 'Trans Exclusionary Radical Feminist' },
]

const stylistic = ['DALL-E', 'BLOOM']

module.exports = {
  transform: function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      const { document } = parseHTML(content)

      const textContent = document.querySelector('[data-text-body]')

      if (!textContent) return content

      let { innerHTML } = textContent

      const getMatcher = (text) => {
        const punctuation = '[ .,:;?’#+«»”“\\-—<>]'

        return new RegExp(`(${punctuation})${text}(s?)(${punctuation})`, 'gm')
      }

      for (const { text, title } of commonAbbreviations) {
        innerHTML = innerHTML.replace(
          getMatcher(text),
          `$1<abbr title="${title}">${text}</abbr>$2$3`,
        )
      }

      for (const style of stylistic) {
        innerHTML = innerHTML.replaceAll(
          getMatcher(style),
          `$1<span class="type-all-small-caps">${style}</span>$2$3`,
        )
      }

      textContent.innerHTML = innerHTML

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }

    return content
  },
}

const git = require('simple-git')()

async function getChanges(pageData) {
  const options = {
    file: pageData.inputPath,
  }

  try {
    const history = await git.log(options)

    return history.all
  } catch (e) {
    console.log(e)
    return null
  }
}

module.exports = {
  tags: ['notes'],
  layout: 'note',
  pageCSS: 'note',

  eleventyComputed: {
    permalink: function ({ title }) {
      return `/notes/${this.slugify(title)}/`
    },
    changes: async ({ page }) => await getChanges(page),
  },
}

const htmlmin = require('html-minifier')

module.exports = {
  when: 'always',
  disabled: true,
  transform: function (content) {
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })

      return minified
    }

    return content
  },
}

const getFolderExports = require('../_helper/get-folder-exports')

module.exports = function (eleventyConfig) {
  const shortcodes = getFolderExports(__dirname)

  shortcodes.forEach(({ name, func }) => {
    if (func.constructor.name === 'AsyncFunction') {
      eleventyConfig.addAsyncShortcode(name, func)
    } else {
      eleventyConfig.addShortcode(name, func)
    }
  })
}

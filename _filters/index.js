const getFolderExports = require('../_helper/get-folder-exports')

module.exports = function (eleventyConfig) {
  const filters = getFolderExports(__dirname)

  filters.forEach(({ name, func }) => {
    eleventyConfig.addFilter(name, func)
  })
}

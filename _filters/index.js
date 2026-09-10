import getFolderExports from '../_helper/get-folder-exports.js'

export default function (eleventyConfig) {
  const filters = getFolderExports(import.meta.dirname)

  filters.forEach(({ name, func }) => {
    eleventyConfig.addFilter(name, func)
  })
}

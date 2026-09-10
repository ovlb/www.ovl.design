import getFolderExports from '../_helper/get-folder-exports.js'

export default function (eleventyConfig) {
  const libraries = getFolderExports(import.meta.dirname)

  libraries.forEach(({ name, func }) => {
    eleventyConfig.setLibrary(name, func)
  })
}

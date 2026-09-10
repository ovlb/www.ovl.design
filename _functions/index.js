import getFolderExports from '../_helper/get-folder-exports.js'

export default function (eleventyConfig) {
  const functions = getFolderExports(import.meta.dirname)

  functions.forEach(({ name, func }) => {
    eleventyConfig.addJavaScriptFunction(name, func)
  })
}

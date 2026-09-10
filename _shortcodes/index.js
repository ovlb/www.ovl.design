import getFolderExports from '../_helper/get-folder-exports.js'

export default function (eleventyConfig) {
  const shortcodes = getFolderExports(import.meta.dirname)

  shortcodes.forEach(({ name, func }) => {
    if (func.constructor.name === 'AsyncFunction') {
      eleventyConfig.addAsyncShortcode(name, func)
    } else {
      eleventyConfig.addShortcode(name, func)
    }
  })
}

import type UserConfig from '@11ty/eleventy/UserConfig'
import getFolderExports from '../_helper/get-folder-exports.ts'

export default function (eleventyConfig: UserConfig) {
  const shortcodes = getFolderExports(import.meta.dirname)

  shortcodes.forEach(({ name, func }: { name: string; func: any }) => {
    if (func.constructor.name === 'AsyncFunction') {
      eleventyConfig.addAsyncShortcode(name, func)
    } else {
      eleventyConfig.addShortcode(name, func)
    }
  })
}

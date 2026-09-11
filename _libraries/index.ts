import type UserConfig from '@11ty/eleventy/UserConfig'
import getFolderExports from '../_helper/get-folder-exports.ts'

export default function (eleventyConfig: UserConfig) {
  const libraries = getFolderExports(import.meta.dirname)

  libraries.forEach(({ name, func }: { name: string; func: any }) => {
    eleventyConfig.setLibrary(name, func)
  })
}

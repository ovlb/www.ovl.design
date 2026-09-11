import type UserConfig from '@11ty/eleventy/UserConfig'
import getFolderExports from '../_helper/get-folder-exports.ts'

export default function (eleventyConfig: UserConfig) {
  const filters = getFolderExports(import.meta.dirname)

  filters.forEach(({ name, func }: { name: string; func: any }) => {
    eleventyConfig.addFilter(name, func)
  })
}

import type UserConfig from '@11ty/eleventy/UserConfig'
import getFolderExports from '../_helper/get-folder-exports.ts'

export default function (eleventyConfig: UserConfig) {
  const functions = getFolderExports(import.meta.dirname)

  functions.forEach(({ name, func }: { name: string; func: any }) => {
    eleventyConfig.addJavaScriptFunction(name, func)
  })
}

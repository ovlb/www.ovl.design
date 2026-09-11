import { createRequire } from 'node:module'
import path from 'path'
import type UserConfig from '@11ty/eleventy/UserConfig'
import getFilesOfType from '../_helper/get-files.ts'

const require = createRequire(import.meta.url)

export default function (eleventyConfig: UserConfig) {
  const plugins = getFilesOfType(import.meta.dirname)
    .filter((file) => file !== 'index.js' && file !== 'index.ts')
    .map((file) => {
      const required = require(path.join(import.meta.dirname, file))

      return required.default ?? required
    })

  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin.plugin, plugin.pluginOptions || {})
  })
}

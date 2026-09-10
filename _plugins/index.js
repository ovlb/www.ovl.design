import { createRequire } from 'node:module'
import path from 'path'
import getFilesOfType from '../_helper/get-files.js'

const require = createRequire(import.meta.url)

export default function (eleventyConfig) {
  const plugins = getFilesOfType(import.meta.dirname)
    .filter((file) => file !== 'index.js')
    .map((file) => {
      const required = require(path.join(import.meta.dirname, file))

      return required.default ?? required
    })

  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin.plugin, plugin.pluginOptions || {})
  })
}

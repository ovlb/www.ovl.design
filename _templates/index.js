import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

import getFiles from '../_helper/get-files.js'

export default function (eleventyConfig) {
  getFiles(import.meta.dirname)
    .filter((fileName) => fileName !== 'index.js')
    .forEach((templateFile) => {
      const required = require(`./${templateFile}`)

      eleventyConfig.addPlugin(required.default ?? required)
    })
}

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

import type UserConfig from '@11ty/eleventy/UserConfig'
import getFiles from '../_helper/get-files.ts'

export default function (eleventyConfig: UserConfig) {
  getFiles(import.meta.dirname)
    .filter((fileName) => fileName !== 'index.js' && fileName !== 'index.ts')
    .forEach((templateFile) => {
      const required = require(`./${templateFile}`)

      eleventyConfig.addPlugin(required.default ?? required)
    })
}

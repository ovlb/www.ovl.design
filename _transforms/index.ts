import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

import path from 'path'
import pkg from 'lodash'

const { camelCase } = pkg
import type UserConfig from '@11ty/eleventy/UserConfig'
import getFiles from '../_helper/get-files.ts'

const { ELEVENTY_ENV } = process.env
const IS_PROD = ELEVENTY_ENV === 'production'

export default function (eleventyConfig: UserConfig) {
  getFiles(import.meta.dirname)
    .filter((fileName) => fileName !== 'index.js' && fileName !== 'index.ts')
    .forEach((fileName) => {
      const required = require(path.join(import.meta.dirname, fileName))

      const { when, transform } = required.default ?? required
      const name = camelCase(fileName.replace('.js', '').replace('.ts', ''))

      if (when === 'prod' && IS_PROD) {
        eleventyConfig.addTransform(name, transform)

        return
      }

      eleventyConfig.addTransform(name, transform)
    })
}

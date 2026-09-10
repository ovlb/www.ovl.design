import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

import path from 'path'
import pkg from 'lodash'

const { camelCase } = pkg
import getFilesOfType from './get-files.js'

export default function getFolderExports(folder) {
  const functions = []
  const files = getFilesOfType(folder)

  files.forEach(function (fileName) {
    if (fileName !== 'index.js') {
      const name = camelCase(fileName.replace('.js', ''))

      const required = require(path.join(folder, fileName))

      const func = required.default ?? required

      functions.push({ name, func })
    }
  })

  return functions
}

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

import path from 'path'
import pkg from 'lodash'

const { camelCase } = pkg
import getFilesOfType from './get-files.ts'

export default function getFolderExports(folder: string) {
  const functions: { name: string; func: any }[] = []
  const files = getFilesOfType(folder)

  files.forEach(function (fileName: string) {
    if (fileName !== 'index.js' && fileName !== 'index.ts') {
      const name = camelCase(fileName.replace('.js', '').replace('.ts', ''))

      const required = require(path.join(folder, fileName))

      const func = required.default ?? required

      functions.push({ name, func })
    }
  })

  return functions
}

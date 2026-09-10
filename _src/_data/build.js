import path from 'path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const { version } = require(path.join(process.cwd(), 'package.json'))

export default {
  isPreview: process.env.PAGE_STATE !== 'production',
  buildTime: new Date(),
  version,
}

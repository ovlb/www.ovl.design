import fs from 'fs'
import path from 'path'

import paths from '../_helper/paths.js'

export default function (clsName) {
  const logo = fs.readFileSync(
    path.resolve(process.cwd(), paths.img, 'logo', 'ovl-logo-bridge-main.svg'),
    { encoding: 'utf-8' },
  )

  return `<div class="${clsName}">${logo.toString()}</div>`
}

import fs from 'fs'
import path from 'path'

import paths from '../_helper/paths.ts'

export default function (clsName: any) {
  const logo = fs.readFileSync(
    path.resolve(process.cwd(), paths.img, 'logo', 'ovl-logo-bridge-main.svg'),
    { encoding: 'utf-8' },
  )

  return `<div class="${clsName}">${logo.toString()}</div>`
}

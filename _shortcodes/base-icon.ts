import fs from 'fs'
import path from 'path'

import paths from '../_helper/paths.ts'

export default function (name: any, { size = 24 }: any = {}) {
  const iconContent = fs.readFileSync(
    path.resolve(process.cwd(), paths.img, 'icons/', `${name}.svg`),
  )

  return `<svg xmlns="http://www.w3.org/2000/svg" class="base-icon" width="${size}" height="${size}" viewBox="0 0 24 24">${iconContent}</svg>`
}

import fs from 'fs'
import path from 'path'

export default function (name) {
  const content = fs.readFileSync(
    path.resolve(import.meta.dirname, '_helper', `${name}.js`),
  )

  return `<script>${content.toString()}</script>`
}

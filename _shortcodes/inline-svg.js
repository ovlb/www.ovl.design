import fs from 'fs'
import path from 'path'

export default function (filePath) {
  const file = fs.readFileSync(path.resolve(process.cwd(), '_src', filePath), {
    encoding: 'utf-8',
  })

  return file.toString()
}

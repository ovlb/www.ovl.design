import fs from 'fs'

export default function getFilesOfType(dir, fileType = '.js') {
  const files = fs.readdirSync(dir)

  return files.filter((fileName) => fileName.endsWith(fileType))
}

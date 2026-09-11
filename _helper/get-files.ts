import fs from 'fs'

export default function getFilesOfType(
  dir: string,
  fileTypes: string | string[] = ['.js', '.ts'],
): string[] {
  const files: string[] = fs.readdirSync(dir)
  const exts = Array.isArray(fileTypes) ? fileTypes : [fileTypes]

  return files.filter((fileName: string) =>
    exts.some((ext: string) => fileName.endsWith(ext)),
  )
}

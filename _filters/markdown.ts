import markdown from '../_libraries/md.ts'

export default function (raw: any) {
  return markdown.render(raw)
}

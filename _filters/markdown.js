import markdown from '../_libraries/md.js'

export default function (raw) {
  return markdown.render(raw)
}

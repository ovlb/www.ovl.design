export default function (tags: any) {
  return tags.filter((tag: any) => tag.startsWith('cat:'))
}

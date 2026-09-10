export default function (category, base) {
  return `${base}/${category.replace('cat:', '')}/`
}

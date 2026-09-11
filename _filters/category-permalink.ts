export default function (category: any, base: any) {
  return `${base}/${category.replace('cat:', '')}/`
}

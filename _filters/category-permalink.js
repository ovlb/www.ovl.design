module.exports = function (category, base) {
  return `${base}/${category.replace('cat:', '')}/`
}

module.exports = function (tags) {
  return tags.filter((tag) => tag.startsWith('cat:'))
}

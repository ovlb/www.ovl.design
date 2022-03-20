module.exports = function (str) {
  if (str.endsWith('.')) return str

  return `${str}<span class="sr-only">.</span>`
}

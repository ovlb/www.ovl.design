module.exports = function (date) {
  return new Date(date).toLocaleDateString('en-UK', {
    month: 'long',
    year: 'numeric',
  })
}

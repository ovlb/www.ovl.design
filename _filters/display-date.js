module.exports = function (date, format = 'long') {
  if (!date) return ''

  date = typeof date === 'string' ? new Date(date) : date

  if (format === 'long') {
    return date.toLocaleDateString('en-UK', {
      month: 'long',
      year: 'numeric',
    })
  }

  return date.toLocaleDateString('de')
}

module.exports = function (rawDate) {
  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }
  const timeOptions = {
    hour12: false,
  }

  const date = rawDate.toLocaleDateString('en-UK', dateOptions)
  const time = rawDate.toLocaleTimeString('en-UK', timeOptions)

  return `Last login: ${date} ${time} on ovl.design`
}

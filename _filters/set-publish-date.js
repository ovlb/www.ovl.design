/**
 * Set date to an arbitrary time around noon
 *
 * @param {Date} date
 */
module.exports = function (date) {
  date.setHours(14)
  date.setMinutes(12)
  date.setSeconds(0)

  return date
}

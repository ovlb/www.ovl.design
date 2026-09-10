/**
 * Set date to an arbitrary time around noon
 *
 * @param {Date} date
 */
export default function (date) {
  date.setHours(14)
  date.setMinutes(12)
  date.setSeconds(0)

  return date
}

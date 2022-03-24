/**
 * Sort an array alphabetically.
 * If it is an array of objects, you can use `sortKey` to specify which key in the objects should be compared
 *
 * @param {Array} arr
 * @param {string} [sortKey=null]
 * @returns
 */
module.exports = function (arr, sortKey = null) {
  return arr.sort((a, b) => {
    /** @type string */
    const nameA = sortKey ? a[sortKey] : a
    /** @type string */
    const nameB = sortKey ? a[sortKey] : b

    return nameA.toLowerCase().localeCompare(nameB.toLowerCase())
  })
}

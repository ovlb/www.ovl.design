const { img } = require('./paths')

/**
 * Check if the image starts with the remote upload path and set MEDIA_HOST if it does
 *
 * @param {String} orig
 * @returns
 */
module.exports = (orig) => {
  if (orig.startsWith('http')) {
    return orig
  }

  return `${img}${orig.replace('^/', '')}`
}

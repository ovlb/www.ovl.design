import paths from './paths.ts'

const { img } = paths

/**
 * Check if the image starts with the remote upload path and set MEDIA_HOST if it does
 *
 * @param {String} orig
 * @returns
 */
export default (orig: any) => {
  if (orig.startsWith('http')) {
    return orig
  }

  return `${img}${orig.replace('^/', '')}`
}

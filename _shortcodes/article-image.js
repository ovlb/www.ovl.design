/**
 *
 *
 * @param {String} url
 * @param {Number} { width, height }
 * @returns
 */
function makeImageString(url, { width, height }, options) {
  const defaults = new Map([
    ['fm', 'jpg'],
    ['q', 65],
    ['w', width],
    ['h', height],
    ['fit', 'fill'],
    ['f', 'center'],
  ])

  const merged = new Map([...defaults, ...options])

  const u = new URL(`https://${url}`)

  for (const [key, value] of merged) {
    u.searchParams.append(key, value)
  }

  return `${u.toString()} ${merged.get('w')}w`
}

module.exports = function (img) {
  if (!img) return '<div class="text__hero-image"></div>'

  const { url } = img.fields.file
  const sizes = [
    { width: 205, height: 720 },
    { width: 260, height: 820 },
    { width: 310, height: 520 },
    { width: 360, height: 920 },
    { width: 410, height: 1020 },
    { width: 510, height: 1220 },
    { width: 610, height: 1420 },
    { width: 710, height: 1620 },
    { width: 910, height: 1820 },
    { width: 1110, height: 2020 },
  ]

  const webpOptions = new Map([
    ['fm', 'webp'],
    ['q', 80],
  ])
  const jpgOptions = new Map([
    ['fl', 'progressive'],
    ['q', 50],
  ])

  const webP = sizes
    .map((size) => makeImageString(url, size, webpOptions))
    .join(', ')
  const jpg = sizes
    .map((size) => makeImageString(url, size, jpgOptions))
    .join(', ')
  const imgSizes = '(min-width: 1500px) 33vw, 25vw'

  return `
      <figure class="text__hero-image"><picture class="">
        <source srcset="${webP}" sizes="${imgSizes}" />
        <source srcset="${jpg}" sizes="${imgSizes}" />
        <img src="${makeImageString(
          url,
          { width: 420, height: 1024 },
          jpgOptions,
        )}" alt="${img.fields.description}" />
      </picture></figure>
    `
}

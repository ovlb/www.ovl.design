module.exports = function (img) {
  if (!img) return '<div class="text__hero-image"></div>'

  const widths = [320, 510, 710, 1110]

  const imgSizes = '(min-width: 700px) 25vmin, 25vw'

  return `
      <figure class="text__hero-image">
        <img
          src="blog/${img.title}"
          alt="${img.alt}"
          data-process-image
          data-image-widths=${JSON.stringify(widths)}
          data-image-sizes=${imgSizes}
        />
      </figure>
    `
}

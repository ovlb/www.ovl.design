module.exports = function (meta = {}, post) {
  this.tags = [
    { attrName: 'name', attrValue: 'description', key: 'description' },
    { attrName: 'name', attrValue: 'twitter:description', key: 'description' },
    { attrName: 'property', attrValue: 'og:description', key: 'description' },
    {
      attrName: 'property',
      attrValue: 'og:url',
      value: `${this.ctx.site.baseURL}${this.page.url}`,
    },
    {
      attrName: 'name',
      attrValue: 'twitter:card',
      value: 'summary_large_image',
    },
    { attrName: 'name', attrValue: 'twitter:site', value: '@_ovlb' },
    { attrName: 'name', attrValue: 'twitter:creator', value: '@_ovlb' },
    { attrName: 'property', attrValue: 'og:type', key: 'ogType' },
    { attrName: 'property', attrValue: 'og:image:type', key: 'ogImageType' },
    { attrName: 'property', attrValue: 'og:image:width', value: '1478' },
    { attrName: 'property', attrValue: 'og:image:height', value: '831' },
    { attrName: 'property', attrValue: 'og:site_name', key: 'site_name' },
  ]

  if (post) {
    if (post.openGraphImage) {
      meta.image = {
        src: `https:${post.openGraphImage?.fields.file.url}`,
        alt: post.image?.fields.description,
      }
    }

    meta.description = post.intro
    meta.ogType = 'article'
  }

  // const values = { ...SITE_DEFAULTS, ...meta }

  const img = `
    <meta property="og:image" content="${meta.image.src}?w=1478&h=831">
    <meta name="twitter:image" content="${meta.image.src}?w=1478&h=831&fm=jpg&q=100">
    <meta name="twitter:image:alt" content="${meta.image.alt}">
  `

  const rendered = this.tags
    .map(({ attrName, attrValue, key, value }) => {
      return `<meta ${attrName}="${attrValue}" content="${value ?? meta[key]}">`
    })
    .join('')

  return `
    ${rendered}
    ${img}
  `
}

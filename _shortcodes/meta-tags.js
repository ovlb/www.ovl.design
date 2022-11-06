module.exports = function (meta = {}) {
  this.tags = [
    { attrName: 'name', attrValue: 'description', key: 'description' },
    {
      attrName: 'property',
      attrValue: 'twitter:description',
      key: 'description',
    },
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
    {
      attrName: 'property',
      attrValue: 'og:site_name',
      value: this.ctx.site.baseURL.replace(/^https?:\/\//, ''),
    },
  ]

  const img = `
    <meta property="og:image" content="${meta.image.src}?w=1478&h=831&fm=jpg&q=100">
    <meta property="twitter:image" content="${meta.image.src}?w=1478&h=831&fm=jpg&q=100">
    <meta property="twitter:image:alt" content="${meta.image.alt}">
    <meta property="og:image:alt" content="${meta.image.alt}">
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

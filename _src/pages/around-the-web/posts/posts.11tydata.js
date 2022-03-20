module.exports = {
  layout: 'digest',
  tags: ['aroundTheWeb'],
  pageCSS: 'aroundTheWeb',
  eleventyComputed: {
    meta: function (data) {
      return {
        description: data.intro,
        image: {
          src: `${data.site.baseURL}/img/around-the-web/${data.page.fileSlug}-og.jpg`,
          alt: 'A library in Prague. The ceiling is decorated with magnificent frescoes. The shelfes are old, you can smell the history contained in these books, it oozes from the picture. Written on top are the words «Around the web».',
        },
        ogType: 'article',
        ogImageType: 'image/jpg',
      }
    },
    dateRange: function (data) {
      const parsedStart = new Date(data.dates.start)
      const parsedPublish = new Date(data.dates.publish)

      return {
        start: parsedStart.toLocaleDateString('de'),
        end: parsedPublish.toLocaleDateString('de'),
      }
    },
    title: function (data) {
      const { start, end } = data.dateRange

      return `Around the Web (${start}–${end})`
    },
    permalink: function (data) {
      return `/around-the-web/${data.page.fileSlug}/`
    },
  },
}

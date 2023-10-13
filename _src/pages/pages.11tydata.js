module.exports = {
  eleventyComputed: {
    /**
     * Splits current permalink and generates permalink data
     *
     * @param {Object} data
     * @param {string} data.permalink
     * @param {string} data.title
     * @param {boolean | undefined} data.hideBreadcrumb
     *
     * @returns any[]
     */
    breadcrumb: function ({ permalink, title = '', hideBreadcrumb }) {
      if (!permalink || hideBreadcrumb) {
        return
      }

      const segments = permalink.replace(/^\/|\/$/g, '').split('/')
      const breadcrumb = [{ url: '/', name: '🏡' }]

      let index = 1
      let accumulatedPath = ''

      for (const segment of segments) {
        accumulatedPath += '/' + segment

        breadcrumb.push({
          url: `${accumulatedPath}/`,
          name:
            index === segments.length && title
              ? title
              : this.capitaliser(segment),
        })

        index++
      }

      return breadcrumb
    },
  },
}

import Image from '@11ty/eleventy-img'

import { getChanges } from '../../../../_helper/git-history.ts'

export default {
  tags: ['blog'],
  layout: 'post',
  ['override:pageCSS']: ['text-detail', 'text-page'],
  templateClass: 'tmpl-single-post',

  eleventyComputed: {
    permalink: function (this: any, { title, external, permalink }: any) {
      if (external) {
        return false
      }

      if (permalink) {
        return permalink
      }

      return `/text/${this.slugify(title.trim())}/`
    },

    meta: async function (
      this: any,
      { site, meta, displayIntro: description, image }: any,
    ) {
      const metaData = { ...meta, ogType: 'article' }

      if (image) {
        let stats = await Image(`_src/assets/img/blog/open-graph/${image.og}`, {
          widths: [1478],
          formats: ['jpg'],
          sharpJpegOptions: {
            quality: 100,
          },
          urlPath: '/img/',
          outputDir: './dist/img/',
          filenameFormat: function (
            id: any,
            src: any,
            number: any,
            format: any,
          ) {
            const originalName = image.og.split('.')[0]

            return `${originalName}.${format}`
          },
        })

        metaData.image = {
          src: `${site.baseURL}${stats.jpeg[0].url}`,
          alt: image.alt,
        }
      }

      if (description) {
        metaData.description = description
      }

      return metaData
    },

    displayIntro: ({ intro, subtitle }: any) => intro || subtitle || false,

    categoriesString: function (this: any, { tags }: any) {
      const categories =
        tags && tags.filter((tag: any) => tag.startsWith('cat:'))

      if (!categories || !categories.length) {
        return ''
      }

      return `${this.capitaliser(categories[0])} — `
    },

    changes: async ({ page }: any) => await getChanges(page),
  },
}

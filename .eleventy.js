const { PAGE_STATE } = process.env

const STATIC_FOLDERS = require('./_helper/paths')

const IS_LIVE = PAGE_STATE === 'live'

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('./_libraries'))

  eleventyConfig.addPlugin(require('./_templates'))

  eleventyConfig.addPlugin(require('./_filters'))
  eleventyConfig.addPlugin(require('./_functions'))
  eleventyConfig.addPlugin(require('./_shortcodes'))

  eleventyConfig.addPlugin(require('./_plugins'))

  eleventyConfig.addPlugin(require('./_transforms'))

  eleventyConfig.addCollection('publishedPosts', function (collectionAPI) {
    /** @type Array */
    const posts = collectionAPI.getFilteredByGlob(
      '_src/pages/text/blog/**/*.md',
    )

    const published = posts.filter((post) => {
      const isFuture = post.date && new Date(post.date) > Date.now()

      return IS_LIVE ? !post.tags.includes('state:draft') || !isFuture : true
    })

    return published
  })

  eleventyConfig.addCollection('internalPosts', function (collectionAPI) {
    /** @type Array */
    const posts = collectionAPI.getFilteredByGlob(
      '_src/pages/text/blog/**/*.md',
    )

    const published = posts.filter((post) => {
      const isFuture = post.date && new Date(post.data.date) > Date.now()

      return IS_LIVE
        ? !post.data.tags.includes('state:draft') && !isFuture
        : true
    })

    return published.filter(function (post) {
      if (post.data.external) {
        return false
      }

      return true
    })
  })

  const allCategories = new Set()
  const categories = [
    { name: 'noteCategories', glob: '_src/pages/notes/notes/*.md' },
    { name: 'atwCategories', glob: '_src/pages/around-the-web/posts/*.md' },
    { name: 'blogCategories', glob: '_src/pages/text/blog/**/*.md' },
  ]

  categories.forEach(function ({ name, glob }) {
    eleventyConfig.addCollection(name, function (collectionAPI) {
      /** @type Array */
      const posts = collectionAPI.getFilteredByGlob(glob)

      const categories = new Set()

      for (const post of posts) {
        const { tags } = post.data

        if (!tags) {
          continue
        }

        tags
          .filter((tag) => tag.startsWith('cat:'))
          .forEach((tag) => categories.add(tag) && allCategories.add(tag))
      }

      return [...categories]
    })
  })

  eleventyConfig.addCollection('categories', function (collectionAPI) {
    return [...allCategories]
  })

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('digest', 'layouts/digest.njk')
  eleventyConfig.addLayoutAlias('feed', 'layouts/feed.njk')
  eleventyConfig.addLayoutAlias('note', 'layouts/note.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.js}**/*`)
  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.img}**/*`)
  eleventyConfig.addWatchTarget('./_helper/**/*')

  // copy static assets to dist folder
  eleventyConfig.addPassthroughCopy({ [`./${STATIC_FOLDERS.img}`]: '/img/' })
  eleventyConfig.addPassthroughCopy({ [`./${STATIC_FOLDERS.js}`]: '/js/' })
  eleventyConfig.addPassthroughCopy({
    [`./${STATIC_FOLDERS.files}`]: '/files/',
  })

  return {
    templateFormats: ['md', '11ty.js', 'njk'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
    },
  }
}

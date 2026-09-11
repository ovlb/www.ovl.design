import 'dotenv/config'

import { migrateMastodonCache } from './_helper/migrate-mastodon-cache.ts'

// restore cache entries written by older eleventy-fetch versions so
// deleted Mastodon posts stay available (see _helper/migrate-mastodon-cache)
migrateMastodonCache()

const { PAGE_STATE } = process.env

import type UserConfig from '@11ty/eleventy/UserConfig'
import STATIC_FOLDERS from './_helper/paths.ts'
import libraries from './_libraries/index.ts'
import templates from './_templates/index.ts'
import filters from './_filters/index.ts'
import functions from './_functions/index.ts'
import shortcodes from './_shortcodes/index.ts'
import plugins from './_plugins/index.ts'
import transforms from './_transforms/index.ts'

const IS_LIVE = PAGE_STATE === 'production'

type CollectionItem = {
  date?: string | Date
  data: {
    tags?: string[]
    date?: string | Date
    external?: boolean
    [key: string]: unknown
  }
}

type CollectionAPI = {
  getFilteredByGlob: (glob: string) => CollectionItem[]
}

export default function (eleventyConfig: UserConfig) {
  // The custom `ts` template extension (esbuild bundler for frontend JS)
  // matches every `.ts` file under the input dir. Directory data files
  // (`*.11tydata.ts`) must stay data-only, not become templates.
  eleventyConfig.ignores.add('**/*.11tydata.ts')

  eleventyConfig.addPlugin(libraries)

  eleventyConfig.addPlugin(templates)

  eleventyConfig.addPlugin(filters)
  eleventyConfig.addPlugin(functions)
  eleventyConfig.addPlugin(shortcodes)

  eleventyConfig.addPlugin(plugins)

  eleventyConfig.addPlugin(transforms)

  eleventyConfig.addCollection(
    'publishedPosts',
    function (collectionAPI: CollectionAPI) {
      /** @type Array */
      const posts = collectionAPI.getFilteredByGlob(
        '_src/pages/text/blog/**/*.md',
      )

      const published = posts.filter((post) => {
        if (!IS_LIVE) {
          return true
        }

        const hasPastPublishDate =
          post.date && new Date(post.date).getTime() <= Date.now()
        const isPublished =
          hasPastPublishDate && !post.data.tags!.includes('state:draft')

        return isPublished
      })

      return published
    },
  )

  eleventyConfig.addCollection(
    'internalPosts',
    function (collectionAPI: CollectionAPI) {
      /** @type Array */
      const posts = collectionAPI.getFilteredByGlob(
        '_src/pages/text/blog/**/*.md',
      )

      const published = posts.filter((post) => {
        const isFuture =
          post.date && new Date(post.data.date!).getTime() > Date.now()

        return IS_LIVE
          ? !post.data.tags!.includes('state:draft') && !isFuture
          : true
      })

      return published.filter(function (post) {
        if (post.data.external) {
          return false
        }

        return true
      })
    },
  )

  const allCategories = new Set()
  const categories = [
    { name: 'noteCategories', glob: '_src/pages/notes/notes/*.md' },
    { name: 'atwCategories', glob: '_src/pages/around-the-web/posts/*.md' },
    { name: 'blogCategories', glob: '_src/pages/text/blog/**/*.md' },
  ]

  categories.forEach(function ({ name, glob }: { name: string; glob: string }) {
    eleventyConfig.addCollection(name, function (collectionAPI: CollectionAPI) {
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

  eleventyConfig.addCollection(
    'categories',
    function (collectionAPI: CollectionAPI) {
      const categories = new Set()
      const posts = collectionAPI.getFilteredByGlob('_src/pages/**/*.md')

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
    },
  )

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('digest', 'layouts/digest.njk')
  eleventyConfig.addLayoutAlias('feed', 'layouts/feed.njk')
  eleventyConfig.addLayoutAlias('note', 'layouts/note.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.js}**/*`)
  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.img}**/*`)
  eleventyConfig.addWatchTarget('./_helper/**/*')
  // .pcss partials aren’t template extensions, so chokidar ignores them by
  // default. Without this, edits to CSS dependencies never trigger a rebuild
  // (the `addDependencies` graph in _templates/css.js only maps changes it sees).
  eleventyConfig.addWatchTarget('./_src/assets/css/**/*.pcss')

  // copy static assets to dist folder
  eleventyConfig.addPassthroughCopy({ [`./${STATIC_FOLDERS.img}`]: '/img/' })
  eleventyConfig.addPassthroughCopy({ [`./${STATIC_FOLDERS.js}`]: '/js/' })
  eleventyConfig.addPassthroughCopy({
    [`./${STATIC_FOLDERS.files}`]: '/files/',
  })

  return {
    templateFormats: ['md', '11ty.js', '11ty.ts', 'njk'],
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

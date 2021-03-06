const path = require('path')
const fs = require('fs')
const { minify } = require('csso')

const { compiler } = require('./postcss')

const STATIC_FOLDERS = require('./paths')

const IS_PROD = process.env.ELEVENTY_ENV === 'production'

const compile = async function (cssFileName) {
  try {
    const cssPath = path.join(process.cwd(), STATIC_FOLDERS.css, cssFileName)
    const cssContent = fs.readFileSync(cssPath, { encoding: 'utf-8' })

    const { css } = await compiler.process(cssContent, {
      from: cssPath,
      to: path.join(__dirname, 'dist/css', cssFileName),
    })

    if (IS_PROD) {
      const cssoResult = minify(css)

      if (cssoResult.errors) {
        throw new Error(cssoResult.errors.join(', '))
      }

      return cssoResult.css
    }

    return css
  } catch (e) {
    console.error(e)

    throw new Error(e.message)
  }
}

module.exports = {
  compileCss: async (sources) => {
    const results = {}

    await Promise.all(
      Object.keys(sources).map(async (source) => {
        const parsed = await compile(sources[source])

        results[source] = {
          permalink: `/css/${sources[source]}`,
          parsed,
        }
      }),
    )

    return results
  },
}

import path from 'path'
import fs from 'fs'
import { minify } from 'csso'

import postcssConfig from './postcss/index.ts'

const { compiler } = postcssConfig

import STATIC_FOLDERS from './paths.ts'

const IS_PROD = process.env.ELEVENTY_ENV === 'production'

const compile = async function (cssFileName: any) {
  try {
    const cssPath = path.join(process.cwd(), STATIC_FOLDERS.css, cssFileName)
    const cssContent = fs.readFileSync(cssPath, { encoding: 'utf-8' })

    const { css } = await compiler.process(cssContent, {
      from: cssPath,
      to: path.join(import.meta.dirname, 'dist/css', cssFileName),
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

    throw new Error((e as any).message, { cause: e })
  }
}

async function compileCss(sources: any) {
  const results: any = {}

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
}

export { compileCss }
export default {
  compileCss,
}

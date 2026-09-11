import { minify } from 'csso'

import postcssConfig from '../_helper/postcss/index.ts'

const { compiler } = postcssConfig

const IS_PROD = process.env.ELEVENTY_ENV === 'production'

export default function (eleventyConfig: any) {
  eleventyConfig.addTemplateFormats('css')
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compileOptions: {
      permalink: function (contents: any, inputPath: any) {
        const fileName = inputPath.split('/').pop()

        return () => {
          return `/css/${fileName}`
        }
      },
    },
    compile: async function (inputContent: any, inputPath: any) {
      const { css, messages } = await compiler.process(inputContent, {
        from: inputPath,
      })

      const dependencies = messages
        .filter((message) => message.type === 'dependency')
        .map((message) => message.file)

      if (dependencies.length) {
        this.addDependencies(inputPath, dependencies)
      }

      return () => {
        if (IS_PROD) {
          const cssoResult = minify(css)

          if (cssoResult.errors) {
            throw new Error(cssoResult.errors.join(', '))
          }

          return cssoResult.css
        }

        return css
      }
    },
  })
}

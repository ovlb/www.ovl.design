import { build } from 'esbuild'

const IS_PROD = process.env.ELEVENTY_ENV === 'production'

export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('ts')
  eleventyConfig.addExtension('ts', {
    outputFileExtension: 'js',
    compileOptions: {
      permalink: function (contents, inputPath) {
        const fileName = inputPath.split('/').pop().replace('.ts', '.js')

        return () => {
          return `/js/${fileName}`
        }
      },
    },
    compile: async function (inputContent, inputPath) {
      const result = await build({
        entryPoints: [inputPath],
        bundle: true,
        format: 'esm',
        target: 'esnext',
        minify: IS_PROD,
        write: false,
      })

      const output = result.outputFiles[0].text

      return () => {
        return output
      }
    },
  })
}

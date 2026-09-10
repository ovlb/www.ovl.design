import htmlmin from 'html-minifier'

export const when = 'always'
export const disabled = true
export function transform(content) {
  if (this.outputPath && this.outputPath.endsWith('.html')) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    })

    return minified
  }

  return content
}

export default { when, disabled, transform }

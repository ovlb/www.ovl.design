// Minimal ambient declarations for dependencies without bundled types.
// Refine with real signatures when those call sites get typed (post-M2).

declare module '@11ty/eleventy' {
  export const EleventyRenderPlugin: any
}

declare module '@11ty/eleventy-fetch' {
  const EleventyFetch: any
  export default EleventyFetch
}

declare module '@11ty/eleventy-img' {
  const Image: any
  export default Image
}

declare module '@11ty/eleventy-plugin-rss' {
  const plugin: any
  export default plugin
}

declare module '@11ty/eleventy-plugin-syntaxhighlight' {
  const plugin: any
  export default plugin
}

declare module '@inframanufaktur/eleventy-plugin-clean-urls' {
  const plugin: any
  export default plugin
}

declare module '@inframanufaktur/eleventy-plugin-embed-mastodon' {
  const plugin: any
  export default plugin
}

declare module '@quasibit/eleventy-plugin-sitemap' {
  const plugin: any
  export default plugin
}

declare module 'eleventy-plugin-embed-tweet' {
  const plugin: any
  export default plugin
}

declare module 'eleventy-plugin-webmentions' {
  const plugin: any
  export default plugin
}

declare module 'html-minifier' {
  export const minify: any
}

declare module 'lodash' {
  const lodash: any
  export default lodash
}

declare module 'csso' {
  export const minify: any
}

declare module 'markdown-it-abbr' {
  const plugin: any
  export default plugin
}

declare module 'markdown-it-attribution' {
  const plugin: any
  export default plugin
}

declare module 'markdown-it-container' {
  const plugin: any
  export default plugin
}

declare module 'markdown-it-footnote' {
  const plugin: any
  export default plugin
}

declare module 'markdown-it-image-figures' {
  const plugin: any
  export default plugin
}

declare module 'postcss-import' {
  const plugin: any
  export default plugin
}

declare module 'textics' {
  const textics: any
  export default textics
}

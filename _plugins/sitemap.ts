import 'dotenv/config'

import sitemap from '@quasibit/eleventy-plugin-sitemap'

export default {
  plugin: sitemap,
  pluginOptions: {
    sitemap: {
      hostname: process.env.BASE_URL,
    },
  },
}

const getPosts = require('../../_helper/getPosts')
const markdown = require('../../_libraries/markdown')

const localPosts = [
  {
    title: 'Computer says no',
    isInternal: true,
    noRender: true,
    date: '2021-12-26',
    slug: 'computer-says-no',
    locale: 'de',
    intro:
      'Überlegungen zum Zusammenhang von Künstlicher Intelligenz und staatlicher und ökonomischer Herrschaft.',
  },
]

module.exports = async function () {
  const all = await getPosts({ type: 'article', order: '-fields.date' })

  const posts = [...localPosts, ...all]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((article) => {
      const isInternal = article.isInternal || !article.externalPost

      article.permalink = isInternal
        ? `/text/${article.slug}/`
        : article.externalPost.fields.link

      article.date = new Date(article.date)

      if (article.content) {
        article.templateContent = markdown.render(article.content)
      }

      article.locale = article.locale || 'en'

      return article
    })

  const ownPosts = posts.filter((post) => post.isInternal)
  const toRender = ownPosts.filter((post) => !post.noRender)

  const lastUpdated = ownPosts[0].date

  return {
    posts,
    ownPosts,
    toRender,
    lastUpdated,
  }
}

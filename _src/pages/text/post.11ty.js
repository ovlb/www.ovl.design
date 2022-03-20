class Post {
  data() {
    return {
      pagination: {
        data: 'articles.toRender',
        size: 1,
        alias: 'post',
      },
      layout: 'layouts/post.njk',
      permalink: (data) => data.post.permalink,
      pageCSS: 'textDetail',
      templateClass: 'tmpl-single-post',
      templateEngineOverride: '11ty.js,md',
    }
  }

  render(data) {
    return data.post.content
  }
}

module.exports = Post

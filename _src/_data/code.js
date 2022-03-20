const getPosts = require('../../_helper/getPosts')

module.exports = async function () {
  return {
    projects: await getPosts({ type: 'code', order: '-fields.publishingDate' }),
  }
}

import getPosts from '../../_helper/getPosts.js'

export default async function () {
  return {
    projects: await getPosts({ type: 'code', order: '-fields.publishingDate' }),
  }
}

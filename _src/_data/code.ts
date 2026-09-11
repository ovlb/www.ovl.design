import getPosts from '../../_helper/getPosts.ts'

export default async function () {
  return {
    projects: await getPosts({ type: 'code', order: '-fields.publishingDate' }),
  }
}

require('dotenv').config()

const contentful = require('contentful')
const host =
  process.env.CF_STAGE === 'preview'
    ? 'preview.contentful.com'
    : 'https://cdn.contentful.com'

const clt = contentful.createClient({
  space: process.env.CF_SPACE,
  accessToken: process.env.CF_TOKEN,
  host,
})

module.exports = async function ({ type, order = '-sys.createdAt' }) {
  try {
    const { items } = await clt.getEntries({
      content_type: type,
      order,
      include: 4,
    })

    return items.map((item) => {
      return { id: item.sys.id, ...item.fields }
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

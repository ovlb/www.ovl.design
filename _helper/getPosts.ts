import dotenv from 'dotenv'

dotenv.config()

import { createClient } from 'contentful'
const host =
  process.env.CF_STAGE === 'preview'
    ? 'preview.contentful.com'
    : 'https://cdn.contentful.com'

const clt = createClient({
  space: process.env.CF_SPACE as string,
  accessToken: process.env.CF_TOKEN as string,
  host,
})

export default async function ({ type, order = '-sys.createdAt' }: any) {
  try {
    const { items } = await clt.getEntries({
      content_type: type,
      order,
      include: 4,
    } as any)

    return items.map((item) => {
      return { id: item.sys.id, ...item.fields }
    })
  } catch (e) {
    throw new Error((e as any).message, { cause: e })
  }
}

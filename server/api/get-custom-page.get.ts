import { Page } from '~/server/models/Page.model'

export default defineEventHandler(async event => {
  const { uid } = getQuery(event)
  const page = await Page.findOne({ where: { uid } })
  return { page }
})

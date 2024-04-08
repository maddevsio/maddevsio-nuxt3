import { Page } from '~/server/models/Page.model'

export default defineEventHandler(async event => {
  const { type } = getQuery(event)
  return await Page.findOne({ where: { documentType: type } })
})

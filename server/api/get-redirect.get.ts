import axios from 'axios'
import { MAD_MARKETING_BACKEND_API } from '~/server/config/envs'
import { authConfig } from '~/server/config'

export default defineEventHandler(async event => {
  try {
    const { pagePath } = getQuery(event)
    const url = pagePath as string
    const { data } = await axios.get(`${ MAD_MARKETING_BACKEND_API }redirect?from_url=${ url.slice(0, -1) }`, authConfig)
    return data
  } catch (e) {
    return false
  }
})

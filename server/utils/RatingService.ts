import axios from 'axios'
import {
  MAD_MARKETING_BACKEND_API,
} from '~/server/config/envs'
import { authConfig } from '~/server/config'

export class RatingService {
  async createRating(payload: any) {
    try {
      const { data } = await axios.post(`${ MAD_MARKETING_BACKEND_API }ratings`, payload, authConfig)
      return data
    } catch (error: any) {
      return error.message
    }
  }

  async getRating(pageId: string) {
    try {
      const { data } = await axios.get(`${ MAD_MARKETING_BACKEND_API }ratings?pageId=${ pageId }`, authConfig)
      return data
    } catch (error: any) {
      return error.message
    }
  }
}

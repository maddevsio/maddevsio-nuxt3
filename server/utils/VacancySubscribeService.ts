import axios from 'axios'
import { MAD_MARKETING_BACKEND_API } from '~/server/config/envs'
import { authConfig } from '~/server/config'

export interface Subscriber {
  name: string
  email: string
  vacancy_category: string
}

export interface CareersSubscribePayload {
  token: string
  email: {
    templateId: number
    variables: {
      type: string
      fullName: string
      email: string
      vacancy_category: string
      modalTitle: string
      subject: string
      emailTo: string
      formLocation: string
      userBrowser: string
      userOS: string
      userPlatform: string
    },
  },
}

export class VacancySubscribeService {
  async addSubscriber (payload: Subscriber) {
    try {
      const { data } = await axios.post(`${ MAD_MARKETING_BACKEND_API }vacancy-subscriber/add`, payload, authConfig)
      return data
    } catch (error: any) {
      return error.message
    }
  }
}

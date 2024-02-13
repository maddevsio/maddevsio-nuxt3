import axios from 'axios'
import { ATLASSIAN_API_URL, ATLASSIAN_AUTH_TOKEN } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'
import { JiraServiceEbooks } from '~/server/utils/Jira/JiraServiceEbooks'
import { JiraServiceSubscribers } from '~/server/utils/Jira/JiraServiceSubscribers'
import { JiraServiceCareers } from '~/server/utils/Jira/JiraServiceCareers'
import { JiraServiceLeads } from '~/server/utils/Jira/JiraServiceLeads'

export class JiraService {
  private readonly authToken = ATLASSIAN_AUTH_TOKEN

  private readonly apiUrl = ATLASSIAN_API_URL

  type = ''

  constructor(type: string) {
    this.type = type
  }

  generateToken() {
    return Buffer.from(this.authToken).toString('base64')
  }

  async createJiraIssue(body: JiraVariables) {
    try {
      let payload

      switch (this.type) {
      case 'ebook-form':
        payload = new JiraServiceEbooks(body).buildEbookPayload()
        break
      case 'subscribe-form':
        payload = new JiraServiceSubscribers(body).buildSubscribersPayload()
        break
      case 'careers-form':
        payload = new JiraServiceCareers(body).buildPayloadCareers()
        break
      default:
        payload = new JiraServiceLeads(body).buildPayloadLeads()
      }

      const { data } = await axios.post(this.apiUrl!, JSON.stringify(payload), {
        headers: {
          ...this.getTokenHeaderRequest(),
          'Content-Type': 'application/json',
        },
      })

      return data
    } catch (error: any) {
      /* eslint-disable */
      if (error?.response?.data) {
        console.error(error?.response?.data)
      } else {
        console.error(error)
      }
      /* eslint-enable */
      return error
    }
  }

  async attachFileToIssue(issueKey: string, formData: any) {
    if (!issueKey) { return '' }
    const { data } = await axios.post(`${ this.apiUrl }/${ issueKey }/attachments`, formData, {
      headers: {
        ...this.getTokenHeaderRequest(),
        'X-Atlassian-Token': 'no-check',
        Accept: 'application/json',
        ...formData.getHeaders(),
      },
    })

    return data
  }

  getTokenHeaderRequest() {
    const token = this.generateToken()

    return {
      Authorization: `Basic ${ token }`,
    }
  }
}

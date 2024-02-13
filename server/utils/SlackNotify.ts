import axios from 'axios'
import { MAD_RADIATOR_SLACK_CHANNEL_ID, MAD_RADIATOR_SLACK_WEBHOOK_URL } from '~/server/config/envs'

interface Message {
  type: string
  text?: {
    type: string
    text: string | undefined
  }
}

export class SlackNotify {
  private slackChannel = MAD_RADIATOR_SLACK_CHANNEL_ID!

  private slackWebhook = MAD_RADIATOR_SLACK_WEBHOOK_URL!

  private messages: Message[] = []

  createMessage = ({
    type,
    text,
  }: { type: string, text?: string | undefined }) => {
    if (type === 'header') {
      this.messages.push({
        type,
        text: {
          type: 'plain_text',
          text,
        },
      })
    }

    if (type === 'divider' && !text) {
      this.messages.push({ type })
    }

    if (type === 'section') {
      this.messages.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text,
        },
      })
    }

    return this
  }

  async sendNotify() {
    try {
      const payload = {
        title: 'WARNING!:',
        blocks: this.messages,
        icon_emoji: ':warning:',
        channel: this.slackChannel,
      }
      return await axios.post(this.slackWebhook, payload)
    } catch (e: any) {
      console.error(e.response.data) // eslint-disable-line
      return e
    }
  }
}

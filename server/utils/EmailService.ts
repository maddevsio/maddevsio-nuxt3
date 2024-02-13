import sendpulse from 'sendpulse-api'
import axios from 'axios'
import {
  EMAIL_NODE_EMAIL_MARKETING,
  MOOSEND_API_KEY,
  MOOSEND_HOST_NAME,
  MOOSEND_MAILING_LIST_ID, SENDPULSE_API_KEY,
  SENDPULSE_API_USER_ID, SENDPULSE_TOKEN_STORAGE,
} from '~/server/config/envs'

export class EmailService {
  private readonly DEFAULT_FROM_EMAIL = 'marketing@maddevs.io'
  private readonly DEFAULT_TO_NAME = 'Mad Devs Team'
  private initSendpulse(userId: string, apiKey: string, tokenStorage: string) {
    return new Promise<void>(resolve => {
      sendpulse.init(userId, apiKey, tokenStorage, () => resolve())
    })
  }

  private sendpulseSMTPRequest(email: string) {
    return new Promise(resolve => {
      sendpulse.smtpSendMail((data: string) => {
        resolve(data)
      }, email)
    })
  }

  public async addToAddressBookEmail({ variables }: any) {
    const body = {
      Name: variables?.fullName || '',
      Email: variables?.email || '',
      Mobile: variables?.phoneNumber || '',
      Tags: [
        variables?.type && `${ variables.type === 'ebook-form' ? 'Ebook' : variables.type }`,
      ].filter(Boolean),
    }

    await axios.post(
      `${ MOOSEND_HOST_NAME }v3/subscribers/${ MOOSEND_MAILING_LIST_ID }/subscribe.json?apikey=${ MOOSEND_API_KEY }`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
  }

  private async send(email: string) {
    await this.initSendpulse(
      SENDPULSE_API_USER_ID!,
      SENDPULSE_API_KEY!,
      SENDPULSE_TOKEN_STORAGE,
    )

    return this.sendpulseSMTPRequest(email)
  }

  private buildEmail({
    subject, templateId, variables, fromName, fromEmail, toName, toEmail, attachment,
  }: any) {
    const email: any = {
      subject,
      template: {
        id: templateId, // required
        variables,
      },
      from: {
        name: fromName,
        email: fromEmail,
      },
      to: [
        {
          name: toName,
          email: toEmail,
        },
      ],
    }

    if (attachment && attachment.base64) { email.attachments_binary = { [attachment.name]: attachment.base64 } }
    return email
  }

  public async sendMailFromVariables({ variables, templateId, attachment }: any) {
    const emailParams = {
      templateId,
      variables,
      attachment,
      subject: variables.subject,
      fromName: variables.modalTitle,
      fromEmail: this.DEFAULT_FROM_EMAIL,
      toName: this.DEFAULT_TO_NAME,
      toEmail: variables.type === 'ebook-form'
        ? EMAIL_NODE_EMAIL_MARKETING
        : variables.emailTo,
    }

    const email = this.buildEmail(emailParams)

    if (variables.consent_to_mailing === 'Yes' || variables.newsLetter === 'Yes') {
      await this.addToAddressBookEmail({ variables })
    }
    return await this.send(email)
  }

  public async sendCVResponseMail({ variables }: any) {
    const emailParams = {
      templateId: 638666,
      variables,
      subject: variables.subject,
      fromName: 'Mad Devs HR department',
      fromEmail: this.DEFAULT_FROM_EMAIL,
      toName: variables.fullName,
      toEmail: variables.email,
    }

    const email = this.buildEmail(emailParams)
    return await this.send(email)
  }
}

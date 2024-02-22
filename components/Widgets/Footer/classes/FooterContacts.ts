import type { IFooterContacts } from '~/components/Widgets/Footer/interfaces/IFooterContacts'
import { emailClickEvent } from '~/analytics/events'

export class FooterContacts implements IFooterContacts {
  emailTitle: string
  email: string

  constructor(title: string, email: string) {
    this.emailTitle = title
    this.email = email

    this.sendEmailEvent = this.sendEmailEvent.bind(this)
  }

  sendEmailEvent(type: string, emailEnv: string) {
    if (type === 'email') {
      if (this.email !== emailEnv) { return }
      emailClickEvent.send('Footer')
    }
  }
}

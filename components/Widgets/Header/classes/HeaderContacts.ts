import type { IHeaderContacts } from '~/components/Widgets/Header/interfaces/IHeaderContacts'
import { emailClickEvent } from '~/analytics/events'

export class HeaderContacts implements IHeaderContacts {
  constructor() {
    this.sendEmailEvent = this.sendEmailEvent.bind(this)
  }

  sendEmailEvent = (email: string) => {
    if (email !== 'team@maddevs.io') { return }
    emailClickEvent.send('Header')
  }
}

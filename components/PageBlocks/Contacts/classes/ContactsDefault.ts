import type {
  ContactsProps,
  IContactField,
  IContactsDefault, SendEventArgs,
} from '~/components/PageBlocks/Contacts/interfaces/IContacts'
import { emailClickEvent } from '~/analytics/events'
import { ContactField } from '~/components/PageBlocks/Contacts/classes/ContactField'

export class ContactsDefault implements IContactsDefault {
  contacts: IContactField[]
  contactsClassFor3Items: string

  constructor(props: ContactsProps) {
    this.contacts = props.items.map(item => new ContactField(item))
    this.contactsClassFor3Items = this.contacts.length === 3 ? 'contacts-slice__fields--3-items' : ''

    this.sendEvent = this.sendEvent.bind(this)
  }

  sendEvent = (payload: SendEventArgs) => {
    if (payload.type !== 'email') { return }
    emailClickEvent.send(`Contact Us: ${ payload.mailAddress }`)
  }
}

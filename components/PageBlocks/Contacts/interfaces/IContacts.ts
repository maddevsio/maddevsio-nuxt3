import type { ImageField, SelectField } from '@prismicio/types'
import type { ComputedRef } from 'vue'

export interface IContact {
  icon: ImageField
  label: string
  content: string
  type: SelectField
}

export interface IContactField extends IContact {
  href: ComputedRef<string>
}

export interface ContactsProps {
  items: IContact[]
}

export interface SendEventArgs {
  type: SelectField
  mailAddress: string
}
export interface IContactsDefault {
  contacts: IContactField[]
  contactsClassFor3Items: string
  sendEvent(payload: SendEventArgs):void
}

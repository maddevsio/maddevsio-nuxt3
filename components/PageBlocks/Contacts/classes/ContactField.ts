import type { ImageField, SelectField } from '@prismicio/types'
import type { ComputedRef } from 'vue'
import type { IContact, IContactField } from '~/components/PageBlocks/Contacts/interfaces/IContacts'

export class ContactField implements IContactField {
  icon: ImageField
  label: string
  content: string
  type: SelectField
  href: ComputedRef<string>

  constructor(
    {
      icon,
      label,
      content,
      type,
    }: IContact) {
    this.icon = icon
    this.label = label
    this.content = content
    this.type = type
    this.href = computed(() => {
      if (this.type === 'phone') { return `tel:${ this.content }` }
      if (this.type === 'email') { return `mailto:${ this.content }` }
      return ''
    })
  }
}

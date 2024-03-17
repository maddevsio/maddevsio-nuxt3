import type { KeyTextField } from '@prismicio/client'
import type { RichTextField } from '@prismicio/types'
import type { IGlossaryPostHead } from '~/components/Glossary/Post/interfaces/IGlossaryPostHead'

export class GlossaryPostHead implements IGlossaryPostHead {
  title: KeyTextField
  description: RichTextField
  constructor(title: KeyTextField, description: RichTextField) {
    this.title = title
    this.description = description
  }
}

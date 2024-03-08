import type { BooleanField, RichTextField } from '@prismicio/client'

export interface WriteupTextDefaultProps {
  primary: {
    content: RichTextField
    showBorderBottom: BooleanField
  }
}

export interface IWriteupTextDefault {
  content: RichTextField
  showBorderBottom: BooleanField
  copyTextFromPreCode(text: string): void
  copyCodeToClipboard(event: Event): void
  addEventListeners(): void
  removeEventListeners(): void
}

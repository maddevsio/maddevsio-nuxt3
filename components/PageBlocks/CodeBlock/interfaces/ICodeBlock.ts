import type { RichTextField } from '@prismicio/client'
import type { Ref } from 'vue'

export interface CodeBlockProps {
  primary: {
    code: RichTextField
    language: string
  }
}

export interface ICodeBlock {
  code: Ref<string>
  language: string
  highlighter(code: string, Prism: any): any
}

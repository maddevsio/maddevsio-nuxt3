import type { Ref } from 'vue'
import type { CodeBlockProps, ICodeBlock } from '~/components/PageBlocks/CodeBlock/interfaces/ICodeBlock'

export class CodeBlock implements ICodeBlock {
  code: Ref<string>
  language: string

  constructor(props: CodeBlockProps) {
    // @ts-ignore
    this.code = ref(props.primary?.code?.reduce((prev, element) => prev + element.text, ''))
    this.language = props.primary.language

    this.highlighter = this.highlighter.bind(this)
  }

  highlighter(code: string, Prism: any) {
    if (Prism) { return Prism.highlight(code, Prism.languages[this.language], this.language) }
    return ''
  }
}

import type { BooleanField, RichTextField } from '@prismicio/client'
import type {
  IWriteupTextDefault,
  WriteupTextDefaultProps,
} from '~/components/PageBlocks/WriteupText/interfaces/IWriteupTextDefault'

export class WriteupTextDefault implements IWriteupTextDefault {
  content: RichTextField
  showBorderBottom: BooleanField

  constructor(props: WriteupTextDefaultProps) {
    this.content = props.primary?.content || ''
    this.showBorderBottom = props.primary?.showBorderBottom

    this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this)
    this.copyTextFromPreCode = this.copyTextFromPreCode.bind(this)
    this.addEventListeners = this.addEventListeners.bind(this)
    this.removeEventListeners = this.removeEventListeners.bind(this)
  }

  copyTextFromPreCode(text: string) {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.value = text
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextArea)
  }

  copyCodeToClipboard(event: Event) {
    // @ts-ignore
    if (event.currentTarget?.parentNode?.children.length && event.currentTarget?.parentNode?.children[0]?.innerText) {
      // @ts-ignore
      const parent = event.currentTarget.parentNode
      this.copyTextFromPreCode(parent.children[0].textContent)
      const copiedText = document.createElement('span')
      copiedText.classList.add('copied-text')
      copiedText.innerText = 'Copied!'
      parent.append(copiedText)
      const timerId = setTimeout(() => {
        parent.removeChild(copiedText)
        clearTimeout(timerId)
      }, 2000)
    }
  }

  addEventListeners() {
    document.querySelectorAll('.copy-link')
      .forEach(link => {
        // @ts-ignore
        link.addEventListener('click', useCopyAnchorLink)
      })

    document.querySelectorAll('.copy-code').forEach(button => {
      // @ts-ignore
      button.addEventListener('click', this.copyCodeToClipboard)
    })
  }

  removeEventListeners() {
    document.querySelectorAll('.copy-link')
      .forEach(link => {
        // @ts-ignore
        link.removeEventListener('click', useCopyAnchorLink)
      })

    document.querySelectorAll('.copy-code').forEach(button => {
      // @ts-ignore
      button.removeEventListener('click', this.copyCodeToClipboard)
    })
  }
}

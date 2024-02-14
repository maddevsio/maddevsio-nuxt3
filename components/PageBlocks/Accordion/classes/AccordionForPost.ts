import type { RichTextField } from '@prismicio/types'
import type { IAccordionForPost, AccordionForPostProps, IQuestion } from '~/components/PageBlocks/Accordion/interfaces/IAccordion'

export class AccordionForPost implements IAccordionForPost {
  mainTitle: RichTextField
  questions: IQuestion[]

  constructor(props: AccordionForPostProps) {
    this.mainTitle = props.primary.mainTitle
    this.questions = this.transformationQuestions(props.items)
  }

  getTag(tag: string) {
    switch (tag) {
    case 'heading2': return 'h2'
    case 'heading3': return 'h3'
    case 'heading4': return 'h4'
    case 'heading5': return 'h5'
    case 'heading6': return 'h6'
    case 'paragraph': return 'p'
    default: return 'h2'
    }
  }

  transformationQuestions(items) {
    return items.map(item => ({
      ...item,
      questionTag: this.getTag(item.question[0].type),
      answerTag: this.getTag(item.answer[0].type),
    }))
  }
}

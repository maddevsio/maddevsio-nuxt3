import type { RichTextField } from '@prismicio/types'
import type {
  AccordionCustomPageProps,
  IAccordion,
} from '~/components/Accordion/interfaces/IAccordion'

export class AccordionCustomPage implements IAccordion {
  questions: {
    question: string
    answer: RichTextField
  }[]

  mainTitle: RichTextField
  containerSize: string

  constructor(props: AccordionCustomPageProps) {
    this.questions = props.items
    this.mainTitle = props.primary.mainTitle
    this.containerSize = `${ props.primary.containerSize }px` || '1026px'
  }
}

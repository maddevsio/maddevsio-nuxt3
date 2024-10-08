import type { RichTextField, SelectField } from '@prismicio/client'
import type {
  AccordionCustomPageProps,
  IAccordion,
} from '~/components/PageBlocks/Accordion/interfaces/IAccordion'

export class AccordionCustomPage implements IAccordion {
  questions: {
    question: string
    questionTag: SelectField
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

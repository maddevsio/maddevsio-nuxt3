import type { RichTextField, SelectField } from '@prismicio/client'

export interface AccordionCustomPageProps {
  items: {
    question: string
    questionTag: SelectField
    answer: RichTextField
  }[]
  primary: {
    mainTitle: RichTextField
    containerSize: string
  }
}

export interface IQuestion {
  question: RichTextField | string
  answer: RichTextField
}

export interface ITransformedQuestion extends IQuestion {
  questionTag: string
  answerTag: string
}

export interface IAccordion {
  questions: IQuestion[]
  mainTitle: RichTextField
  containerSize: string
}

export interface AccordionForPostProps {
  items: IQuestion[]
  primary: {
    mainTitle: RichTextField
  }
}

export interface IAccordionForPost {
  mainTitle: RichTextField
  questions: IQuestion[]
  getTag(tag: string): string
  transformationQuestions(questions: IQuestion[]): ITransformedQuestion
}

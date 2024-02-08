import type { ITextItem } from '~/components/TextList/interfaces/ITextListDefault'

export interface TextListTwoColumnsProps {
  primary: {
    title: string
  }
  items: ITextItem[]
}

export interface ITextListTwoColumns {
  title: string
  items: ITextItem[]
}

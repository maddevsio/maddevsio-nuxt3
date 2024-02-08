export interface ITextItem {
  listText: string
}

export interface TextListDefaultProps {
  primary: {
    title: string
    containerSize: string
  }
  items: ITextItem[]
}

export interface ITextListDefault {
  title: string
  containerSize: string
  items: ITextItem[]
}

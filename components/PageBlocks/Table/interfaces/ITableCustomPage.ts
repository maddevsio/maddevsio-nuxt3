import type { RichTextField } from '@prismicio/types'

export interface TableCustomPageProps {
  primary: {
    tableRich: RichTextField
    containerSize: string
    background: string
  }
}

export interface ITableCustomPage {
  tableRich: RichTextField
  containerSize: string
  sliceBackground: string | null
  tableColor: string
}

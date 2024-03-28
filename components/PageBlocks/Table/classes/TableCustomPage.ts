import type { RichTextField } from '@prismicio/types'
import type { ITableCustomPage, TableCustomPageProps } from '~/components/PageBlocks/Table/interfaces/ITableCustomPage'

export class TableCustomPage implements ITableCustomPage {
  tableRich: RichTextField
  containerSize: string
  sliceBackground: string | null
  tableColor: string

  constructor(props: TableCustomPageProps) {
    this.tableRich = props.primary.tableRich
    this.containerSize = props.primary.containerSize || '1026'
    this.sliceBackground = setSliceBackground(props.primary.background || 'white')
    this.tableColor = colorConverterToClass('slice-bg', props.primary.background || 'white')
  }
}

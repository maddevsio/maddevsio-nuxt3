import type { RichTextField } from '@prismicio/types'
import type { ITableBlog, TableBlogProps } from '~/components/PageBlocks/Table/interfaces/ITableBlog'

export class TableBlog implements ITableBlog {
  tableRich: RichTextField

  constructor(props: TableBlogProps) {
    this.tableRich = props.primary.tableRich
  }
}

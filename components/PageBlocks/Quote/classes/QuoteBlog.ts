import type { ImageField, RichTextField } from '@prismicio/client'
import type { IQuoteBlog, QuoteBlogProps } from '~/components/PageBlocks/Quote/interfaces/IQuoteBlog'

export class QuoteBlog implements IQuoteBlog {
  quotationDesign: string
  quote: RichTextField
  portraitAuthor: ImageField
  email: string
  linkedinLink: string
  nameOfTheAuthor: RichTextField

  constructor(props: QuoteBlogProps) {
    this.quotationDesign = props.primary?.quotation_design
    this.quote = props.primary?.quote
    this.portraitAuthor = {
      ...props.primary?.portrait_author,
      url: props.primary?.portrait_author?.url?.replace('compress,', ''),
    } as ImageField
    this.email = props.primary?.email
    this.linkedinLink = props.primary?.linkedin_link_to_profile
    this.nameOfTheAuthor = props.primary.name_of_the_author
  }
}

import type { ImageField, RichTextField } from '@prismicio/client'

export interface QuoteBlogProps {
  primary: {
    quotation_design: string
    quote: RichTextField
    portrait_author: ImageField
    email: string
    linkedin_link_to_profile: string
    name_of_the_author: RichTextField
  }
}

export interface IQuoteBlog {
  quotationDesign: string
  quote: RichTextField
  portraitAuthor: ImageField
  email: string
  linkedinLink: string
  nameOfTheAuthor: RichTextField
}

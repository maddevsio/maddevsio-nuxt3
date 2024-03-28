import type { RichTextField } from '@prismicio/client'
import type { IPostsSectionDefault } from '~/components/PageBlocks/PostsSection/interfaces/IPostsSectionDefault'

export interface PostsSectionWithoutAuthorProps {
  primary: {
    title: RichTextField
    containerSize: string
  }
  items: []
}

export interface IPostsSectionWithoutAuthor extends IPostsSectionDefault {
  title: RichTextField
  containerSize: string
}

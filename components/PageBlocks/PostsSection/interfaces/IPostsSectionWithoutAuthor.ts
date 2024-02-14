import type { IPostsSectionDefault } from '~/components/PageBlocks/PostsSection/interfaces/IPostsSectionDefault'

export interface PostsSectionWithoutAuthorProps {
  primary: {
    title: string
    containerSize: string
  }
  items: []
}

export interface IPostsSectionWithoutAuthor extends IPostsSectionDefault {
  title: string
  containerSize: string
}

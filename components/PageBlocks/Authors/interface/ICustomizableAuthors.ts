import type { BooleanField } from '@prismicio/client'
import type { ImageField, SelectField } from '@prismicio/types'
import type { AuthorSocialNetwork, SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'

export interface CustomizableAuthor {
    uid: string
    firstName: string
    lastName: string
    phoneNumber: string
    company: string
    email: string
    location: string
    name: string
    position: string
    thumbnail_image: ImageField
    image: ImageField & {
      header: ImageField
      thumbnail: ImageField
    }
    meta_title: string
    meta_description: string
    noindex: boolean
    schema_org_snippets: SchemaOrgSnippet[]
    social_networks: AuthorSocialNetwork[]
    header_plate_text: string
    header_plate_button_text: string
    header_plate_link: {
      url: string
    }
    header_plate_background_color: string
}

export interface CustomizableAuthorsProps {
  primary: {
    colorTheme: SelectField
    showTopDivider: BooleanField
    author: {
      data: CustomizableAuthor
    }
    coAuthor: {
      data: CustomizableAuthor
    }
  }
}
export interface ICustomizableAuthors {
  colorTheme: SelectField
  showTopDivider: BooleanField
  author: CustomizableAuthor | null
  coAuthor: CustomizableAuthor | null
}

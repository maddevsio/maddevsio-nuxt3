import type { ImageField, KeyTextField } from '@prismicio/client'
import type { ComputedRef } from 'vue'
import type {
  GlossaryPageStartScreenProps,
  IGlossaryPageStartScreen,
} from '~/components/Glossary/interfaces/IGlossaryPageStartScreen'
export class GlossaryPageStartScreen implements IGlossaryPageStartScreen {
  uid: string
  title: KeyTextField
  subtitle: KeyTextField
  description: KeyTextField
  wordTitle: KeyTextField
  tagForSubtitle: string
  image: ImageField
  titleText: ComputedRef<string>
  subtitleText: ComputedRef<string>
  titleTag: ComputedRef<string>
  backgroundImage: ComputedRef<object>

  constructor({
    uid,
    title,
    subtitle,
    description,
    wordTitle,
    tagForSubtitle,
    image,
  }: GlossaryPageStartScreenProps, getMediaFromS3: Function) {
    this.uid = uid
    this.title = title
    this.subtitle = subtitle
    this.description = description
    this.wordTitle = wordTitle
    this.tagForSubtitle = tagForSubtitle
    this.image = image

    this.titleText = computed(() => {
      if (this.title && this.title.length) { return this.title }
      return `Definition of ${ this.wordTitle }`
    })

    this.subtitleText = computed(() => {
      if (this.subtitle && this.subtitle.length) { return this.subtitle }
      return `No Bad Questions About ${ this.tagForSubtitle }`
    })

    this.titleTag = computed(() => (this.uid === 'glossary' ? 'h1' : 'p'))

    this.backgroundImage = computed(() => {
      if (this.image && Object.keys(this.image).length) {
        return this.image
      }

      return {
        url: getMediaFromS3('images/glossary/webp/glossary-start-screen-image.webp'),
        dimensions: {
          width: 1920,
          height: 666,
        },
        alt: 'Glossary Background Image',
      }
    })
  }
}

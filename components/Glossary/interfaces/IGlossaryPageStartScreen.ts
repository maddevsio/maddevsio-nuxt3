import type { KeyTextField, ImageField } from '@prismicio/client'
import type { ComputedRef } from 'vue'

export interface GlossaryPageStartScreenProps {
  uid: string
  title: KeyTextField
  subtitle: KeyTextField
  description: KeyTextField
  wordTitle: KeyTextField
  tagForSubtitle: string
  image: ImageField
}

export interface IGlossaryPageStartScreen extends GlossaryPageStartScreenProps {
  titleText: ComputedRef<string>
  subtitleText: ComputedRef<string>
  titleTag: ComputedRef<string>
  backgroundImage: ComputedRef<object>
}

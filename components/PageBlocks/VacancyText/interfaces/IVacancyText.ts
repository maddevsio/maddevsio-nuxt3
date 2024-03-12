import type { KeyTextField, RichTextField } from '@prismicio/client'

export interface VacancyItem {
  text_title: string
  text_icon: KeyTextField
  text_content: RichTextField
}

export interface TransformedVacancyItem {
  textTitle: string
  textIcon: KeyTextField
  textContent: RichTextField
}

export interface VacancyTextProps {
  items: VacancyItem[]
}

export interface IVacancyText {
  blocks: TransformedVacancyItem[]
  transformVacancyContent(blocks: VacancyItem[]): TransformedVacancyItem[]
}

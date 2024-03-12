import type {
  IVacancyText,
  TransformedVacancyItem, VacancyItem,
  VacancyTextProps,
} from '~/components/PageBlocks/VacancyText/interfaces/IVacancyText'

export class VacancyText implements IVacancyText {
  blocks: TransformedVacancyItem[]

  constructor(props: VacancyTextProps) {
    this.blocks = this.transformVacancyContent(props.items)
  }

  transformVacancyContent(blocks: VacancyItem[]): TransformedVacancyItem[] {
    return blocks.map(block => ({
      textTitle: block.text_title,
      textContent: block.text_content,
      textIcon: block.text_icon,
    }))
  }
}

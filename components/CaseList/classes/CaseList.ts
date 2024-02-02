import type {
  CaseListProps,
  ICaseList,
  ICaseListItem,
} from '~/components/CaseList/interfaces/iCaseList'

export class CaseList implements ICaseList {
  background: string | null
  repeatable: ICaseListItem[]

  constructor(props: CaseListProps) {
    this.background = setSliceBackground(props.primary.background || 'white')
    this.repeatable = this.transformToObjectLogoData(props.items)
  }

  transformToObjectLogoData = (caseItems: ICaseListItem[]) => caseItems.map(caseItem => {
    caseItem.logo = {
      width: caseItem.logoWidth,
      height: caseItem.logoHeight,
      folder: caseItem.folder,
      file: caseItem.file,
      alt: caseItem.alt,
    }
    caseItem.id = caseItem.title.toLowerCase().split(' ').join('-')
    return caseItem
  })
}

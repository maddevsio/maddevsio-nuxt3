export interface ICaseListItem {
  id: string
  title: string
  subtitle: string
  description: string
  width: string
  video: string
  poster: string
  link: string
  logoFolder: string
  logoFile: string
  logoWidth: string
  logoHeight: string
  logoAlt: string
  folder: string
  file: string
  alt: string
  logo: {
    width: string
    height: string
    folder: string
    file: string
    alt: string
  }
}

export interface CaseListProps {
  primary: {
    background: string
  }
  items: ICaseListItem[]
}

export interface ICaseList {
  background: string | null
  repeatable: ICaseListItem[]
  transformToObjectLogoData(caseItems: ICaseListItem[]): ICaseListItem[]
}

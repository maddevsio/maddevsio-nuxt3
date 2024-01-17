export interface ICustomerCardItem {
  caseLogo: {
    url: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
  authorPhoto: {
    url: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
  authorName: string
  authorCompany: string
  linkToCaseStudy: string
  description: string
}

export interface CustomersCardProps {
  primary: {
    backgroundColor: string | null
  }
  items: ICustomerCardItem[]
}

export interface ICustomersCard {
  backgroundColor: string
  cards: ICustomerCardItem[]
  replacePhotoUrl: (photoUrl: string) => string
}

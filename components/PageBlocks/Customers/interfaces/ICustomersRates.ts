export interface ICustomersRatesItem {
  title: string
  subtitle: string
  numberColor: string
  descriptionColor: string
}

export interface CustomersRatesProps {
  items: ICustomersRatesItem[]
  primary: {
    background: string
  }
}

export interface ICustomersRates {
  cards: ICustomersRatesItem[]
  backgroundColor: string | null
  backgroundInText: string | null
}

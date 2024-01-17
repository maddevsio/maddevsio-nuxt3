export interface IKeyMetricsItem {
  title: string
  subtitle: string
  numberColor: string
  descriptionColor: string
}

export interface IKeyMetricsProps {
  items: IKeyMetricsItem[]
  primary: {
    background: string
    bigCardTitle: string
    lottieFileName: string
  }
}

export interface IKeyMetricsCard {
  cards: IKeyMetricsItem[]
  backgroundInText: string | null
  backgroundColor: string | null
  bigCardTitle: string
  lottieFileName: string
}

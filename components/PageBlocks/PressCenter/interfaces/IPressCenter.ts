import type { ComputedRef } from 'vue'
import type { ImageField } from '@prismicio/types'
import type { ISwiperOptions } from '~/interfaces/common/commonInterfaces'

export interface PressCenterCard {
  link: {
    url: string
  }
  image: ImageField
  linkedCompanyLogo: ImageField
  date: string
  title: string
  description: string
  linkLabel: string
  external: boolean
  target: string
}

export interface PressCenterProps {
  primary: {
    colorTheme: string
  },
  items: PressCenterCard[]
}

export interface IPressCenter {
  swiperOptions: ISwiperOptions
  triggerBreakpoint: number
  colorTheme: string
  cards: ComputedRef<PressCenterCard[]>
}

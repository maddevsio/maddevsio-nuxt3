import type { Router } from 'vue-router'
import type { Ref } from 'vue'

export interface HeaderPlateContent {
  uid: string
  text: string
  buttonText: string
  buttonLink: string
  backgroundColor: string
}

export interface HeaderPlateData {
  uid: string
  text: string
  button_text: string
  button_link: string
  background_color: string
}

export interface IHeaderPlate {
  route: any
  router: Router
  cookie: Ref<string | null | undefined>
  headerPlateContent: Ref<HeaderPlateContent | null | undefined>
  isSeen: Ref<string | null | undefined>
  headerPlateData: HeaderPlateData[]
  closePlate(): void
  filterHeaderPlateData (path: string): void
  clickPlate (path: string): void
  transformHeaderPlateData (data: HeaderPlateData): HeaderPlateContent | undefined
}

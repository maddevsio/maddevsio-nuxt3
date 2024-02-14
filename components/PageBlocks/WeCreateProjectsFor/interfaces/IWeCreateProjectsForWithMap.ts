import type { Ref } from 'vue'

export interface Industry {
  iconID: string
  text: string
}

export interface WeCreateProjectsForWithMapProps {
  primary: {
    background: string
  }
}

export interface IWeCreateProjectsForWithMap {
  screenBreakpoints: {
    tabletMax: number
    mobileMax: number
  }
  industries: Industry[]
  s3MapRoute: string
  s3IconsRoute: string
  currentScreenType: string
  industriesList: Ref<Industry[][]>
  background: string | null
  svgIconsSprite: Ref<string>
  getSVGSprite(): Promise<void>
  getScreenType(): void
  prepareList(): void
  spliceIndustryList(array: Industry[], chunkSize: number): Industry[][]
}

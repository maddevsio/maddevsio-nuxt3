import type {
  ClutchReviewsWithSliderProps,
  IClutchReviewsWithSlider,
} from '~/components/PageBlocks/Customers/interfaces/IClutchReviewsWithSlider'

export class ClutchReviewsWithSlider implements IClutchReviewsWithSlider {
  colorTheme: string
  title: string

  constructor(props: ClutchReviewsWithSliderProps) {
    this.colorTheme = props.primary.colorTheme || 'black'
    this.title = props.primary.title || 'Mad Devs\' Reviews on Clutch'
  }
}

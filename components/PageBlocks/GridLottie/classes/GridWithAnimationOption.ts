import type {
  GridWithAnimationOptionCard, GridWithAnimationOptionProps,
  IGridWithAnimationOption,
} from '~/components/PageBlocks/GridLottie/interfaces/IGridWithAnimationOption'

export class GridWithAnimationOption implements IGridWithAnimationOption {
  cards: GridWithAnimationOptionCard[]

  constructor(props: GridWithAnimationOptionProps) {
    this.cards = this.checkAvailableData(props.items)
  }

  checkAvailableData(gridData: GridWithAnimationOptionCard[]) {
    return gridData.map(gridDataItem => {
      gridDataItem.background = gridDataItem.background || '#1d1d1f'
      gridDataItem.fullWidth = gridDataItem.fullWidth ? 'card-item--full-width' : ''
      gridDataItem.alignText = gridDataItem.alignText || 'left'
      gridDataItem.lottiePosition = gridDataItem.lottiePosition || 'top'
      gridDataItem.lottieAnimation = gridDataItem.lottieAnimation || ''
      gridDataItem.classNameWithoutLottie = !gridDataItem.lottieAnimation ? 'card-item--without-lottie' : ''
      gridDataItem.width = gridDataItem.width ? `${ gridDataItem.width }` : null
      gridDataItem.height = gridDataItem.height ? `${ gridDataItem.height }` : null
      gridDataItem.lottieHeight = gridDataItem.lottieHeight || '395px'

      return gridDataItem
    })
  }
}

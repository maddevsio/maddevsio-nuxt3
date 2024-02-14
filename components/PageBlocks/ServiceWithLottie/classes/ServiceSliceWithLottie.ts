import type {
  CollectedSliceData,
  IServiceButton,
  IServiceSliceWithLottie, ServiceSliceWithLottieProps,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceSliceWithLottie'
import type {
  IServiceWithLottieDesktop,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceWithLottieDesktop'
import type {
  IServiceWithLottieMobile,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceWithLottieMobile'
import { ServiceWithLottieDesktop } from '~/components/PageBlocks/ServiceWithLottie/classes/ServiceWithLottieDesktop'
import { ServiceWithLottieMobile } from '~/components/PageBlocks/ServiceWithLottie/classes/ServiceWithLottieMobile'

export class ServiceSliceWithLottie implements IServiceSliceWithLottie {
  triggerBreakpoint = 875
  icons = [
    'first-group-service-slice-icon.svg',
    'second-group-service-slice-icon.svg',
    'third-group-service-slice-icon.svg',
  ]

  buttons: IServiceButton[]
  collectedSliceData: CollectedSliceData

  desktopInstance: IServiceWithLottieDesktop
  mobileInstance: IServiceWithLottieMobile

  constructor(props: ServiceSliceWithLottieProps) {
    this.buttons = [
      {
        label: props.primary.firstGroupButtonText || 'Tech and Development',
        lottieFrame: 200,
      },
      {
        label: props.primary.secondGroupButtonText || 'Management and Consulting',
        lottieFrame: 250,
      },
      {
        label: props.primary.thirdGroupButtonText || 'HR and Marketing',
        lottieFrame: 330,
      },
    ]
    this.collectedSliceData = {
      ...props.primary || {},
      buttons: this.buttons,
      icons: this.icons,
      router: props.router,
    }
    this.desktopInstance = new ServiceWithLottieDesktop(this.collectedSliceData)
    this.mobileInstance = new ServiceWithLottieMobile(this.collectedSliceData)
  }
}

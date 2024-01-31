import type { Ref } from 'vue'
import type {
  GetLinkProps,
  IServiceButton,
} from '~/components/ServiceWithLottie/interfaces/IServiceSliceWithLottie'

export type Link = {
  url: string
  label: string
  haveLink: boolean
}

export interface AccordionData {
  buttonLabel: string
  buttonIcon: string
  links: Link[]
  lottieLink: string
}

export interface ServiceWithLottieMobileProps extends GetLinkProps {
  buttons: IServiceButton[]
  icons: string[]
}

export interface IServiceWithLottieMobile {
  indentFromHeader: number
  dataForCreateAccordion: AccordionData[]
  activeAccordion: Ref<string>
  getLottieLink(groupIdx: number): string
  getGroupLinks(groupIdx: number, props: GetLinkProps): Link[] | []
  getData(props: ServiceWithLottieMobileProps): AccordionData[]
  changeActiveAccordion(props: { $event: Event, buttonLabel: string }): Promise<void>
}

import type { Router } from 'vue-router'
import type {
  IServiceWithLottieDesktop,
} from '~/components/ServiceWithLottie/interfaces/IServiceWithLottieDesktop'
import type {
  IServiceWithLottieMobile,
} from '~/components/ServiceWithLottie/interfaces/IServiceWithLottieMobile'

export type IServiceButton = {
  label: string
  lottieFrame: number
}

export interface GetLinkProps {
  softwareDevelopmentLink: string
  hrPracticesLink: string
  transparentStaffingLink: string
  technicalAuditLink: string
  technicalInfrastructureLink: string
  techMarketingLink: string
  projectDiscoveryLink: string
  customSoftwareLink: string
}

export interface ButtonsGroup {
  firstGroupButtonText: string
  secondGroupButtonText: string
  thirdGroupButtonText: string
}

export interface CollectedSliceData extends GetLinkProps, ButtonsGroup {
  buttons: IServiceButton[]
  icons: string[]
  router: Router
}

export interface ServiceSliceWithLottieProps {
  primary: GetLinkProps & ButtonsGroup
  router: Router
}

export interface IServiceSliceWithLottie {
  triggerBreakpoint: number
  icons: string[]
  buttons: IServiceButton[]
  collectedSliceData: CollectedSliceData
  desktopInstance: IServiceWithLottieDesktop
  mobileInstance: IServiceWithLottieMobile
}

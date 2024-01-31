import type { Ref } from 'vue'
import type { AnimationItem } from 'lottie-web'
import type { Router } from 'vue-router'
import type {
  GetLinkProps,
  IServiceButton,
} from '~/components/ServiceWithLottie/interfaces/IServiceSliceWithLottie'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export type ILink = {
  link: string
  label: string
  lottieId: string
  lottieTextId: string
  haveLink: boolean
}

export interface IServiceWithLottieDesktop {
  lottieTextElemIds: string[]
  lottieElemGroups: {
    techAndMarketing: string[]
    managementAndConsulting: string[]
    hrAndMarketing: string[]
  }
  intervalDelay: number
  timeOutDelay: number
  waitingTimeToLoadLottie: number
  links: ILink[]
  buttons: IServiceButton[]
  icons: string[]
  observerRef: Ref<IntersectionObserverInstance | null>
  serviceSliceRef: Ref<Element | null>
  intervalId: Ref<ReturnType<typeof setInterval> | undefined>
  timeOutId: Ref<ReturnType<typeof setTimeout> | undefined>
  activeButton: Ref<string>
  currentActiveButton: Ref<number>
  lottieInstance: Ref<AnimationItem | null>
  router: Router
  getLinks(props: GetLinkProps): ILink[]
  setActiveClass(): void
  getIcon(buttonIndex: number): string
  changeActiveButton(buttonIndex: number, frame: number): void
  animHandler(lottie: AnimationItem): void
  activateFocusLottieLinks(event: Event, router: Router): void
  goToLinkPath(event: Event): void
  changeFrameOnHoverTech(): void
  changeFrameOnHoverManagement(): void
  changeFrameOnHoverHr(): void
  getLottieElements(): Promise<void>
  removeListeners(): void
  initIntersectionObserver(): void
}

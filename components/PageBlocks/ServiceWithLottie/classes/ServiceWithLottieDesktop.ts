import type { Ref } from 'vue'
import type { AnimationItem } from 'lottie-web'
import type { Router } from 'vue-router'
import type {
  ILink,
  IServiceWithLottieDesktop,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceWithLottieDesktop'
import type {
  CollectedSliceData,
  GetLinkProps,
  IServiceButton,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceSliceWithLottie'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class ServiceWithLottieDesktop implements IServiceWithLottieDesktop {
  lottieTextElemIds = [
    '#optimization_hoverarea',
    '#transfer_hoverarea',
    '#customsoftdev_hoverarea',
    '#techaudit_hoverarea',
    '#softdevproc_hoverarea',
    '#techmarketing_hoverarea',
    '#hr_hoverarea',
    '#projectdiscovery_hoverarea',
    '#Technical_Infrastructure_Optimization',
    '#Build-Operate-Transfer',
    '#Custom_Software_Development',
    '#Technical_Aud_t',
    '#Software_Development_Process_Consulting',
    '#Tech_Marketing_Consulting_',
    '#HR_Practices_in_Tech_Companies_Consulting',
    '#Project_Discovery',
  ]

  lottieElemGroups = {
    techAndMarketing: [
      'Custom_Software_Development',
      'Build-Operate-Transfer',
      'Technical_Infrastructure_Optimization',
      'customsoftdev_hoverarea',
      'transfer_hoverarea',
      'optimization_hoverarea',
    ],
    managementAndConsulting: [
      'Software_Development_Process_Consulting',
      'Technical_Aud_t',
      'Project_Discovery',
      'softdevproc_hoverarea',
      'techaudit_hoverarea',
      'projectdiscovery_hoverarea',
    ],
    hrAndMarketing: [
      'HR_Practices_in_Tech_Companies_Consulting',
      'Tech_Marketing_Consulting_',
      'hr_hoverarea',
      'techmarketing_hoverarea',
    ],
  }

  intervalDelay = 1300
  timeOutDelay = 3000
  waitingTimeToLoadLottie = 1500
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

  constructor(props: CollectedSliceData) {
    this.links = this.getLinks(props)
    this.buttons = props.buttons
    this.icons = props.icons
    this.observerRef = ref(null)
    this.serviceSliceRef = ref(null)
    this.intervalId = ref(undefined)
    this.timeOutId = ref(undefined)
    this.activeButton = ref(props.firstGroupButtonText)
    this.currentActiveButton = ref(0)
    this.lottieInstance = ref(null)
    this.router = props.router

    this.getLinks = this.getLinks.bind(this)
    this.setActiveClass = this.setActiveClass.bind(this)
    this.getIcon = this.getIcon.bind(this)
    this.changeActiveButton = this.changeActiveButton.bind(this)
    this.animHandler = this.animHandler.bind(this)
    this.activateFocusLottieLinks = this.activateFocusLottieLinks.bind(this)
    this.goToLinkPath = this.goToLinkPath.bind(this)
    this.getLottieElements = this.getLottieElements.bind(this)
    this.removeListeners = this.removeListeners.bind(this)
    this.initIntersectionObserver = this.initIntersectionObserver.bind(this)
    this.changeFrameOnHoverTech = this.changeFrameOnHoverTech.bind(this)
    this.changeFrameOnHoverManagement = this.changeFrameOnHoverManagement.bind(this)
    this.changeFrameOnHoverHr = this.changeFrameOnHoverHr.bind(this)
  }

  getLinks = (props: GetLinkProps) => [
    {
      link: props.softwareDevelopmentLink || '/',
      label: 'Software Development Process Consulting',
      lottieId: 'softdevproc_hoverarea',
      lottieTextId: 'Software_Development_Process_Consulting',
      haveLink: Boolean(props.softwareDevelopmentLink),
    },
    {
      link: props.hrPracticesLink || '/',
      label: 'HR Practices in Tech Companies Consulting',
      lottieId: 'hr_hoverarea',
      lottieTextId: 'HR_Practices_in_Tech_Companies_Consulting',
      haveLink: Boolean(props.hrPracticesLink),
    },
    {
      link: props.transparentStaffingLink || '/',
      label: 'Build-Operate-Transfer',
      lottieId: 'transfer_hoverarea',
      lottieTextId: 'Build-Operate-Transfer',
      haveLink: Boolean(props.transparentStaffingLink),
    },
    {
      link: props.technicalAuditLink || '/',
      label: 'Technical Audit',
      lottieId: 'techaudit_hoverarea',
      lottieTextId: 'Technical_Aud_t',
      haveLink: Boolean(props.technicalAuditLink),
    },
    {
      link: props.technicalInfrastructureLink || '/',
      label: 'Technical Infrastructure Optimization',
      lottieId: 'optimization_hoverarea',
      lottieTextId: 'Technical_Infrastructure_Optimization',
      haveLink: Boolean(props.technicalInfrastructureLink),
    },
    {
      link: props.techMarketingLink || '/',
      label: 'Tech Marketing Consulting & Support',
      lottieId: 'techmarketing_hoverarea',
      lottieTextId: 'Tech_Marketing_Consulting_',
      haveLink: Boolean(props.techMarketingLink),
    },
    {
      link: props.projectDiscoveryLink || '/',
      label: 'Project Discovery',
      lottieId: 'projectdiscovery_hoverarea',
      lottieTextId: 'Project_Discovery',
      haveLink: Boolean(props.projectDiscoveryLink),
    },
    {
      link: props.customSoftwareLink || '/',
      label: 'Custom Software Development',
      lottieId: 'customsoftdev_hoverarea',
      lottieTextId: 'Custom_Software_Development',
      haveLink: Boolean(props.customSoftwareLink),
    },
  ]

  setActiveClass() {
    this.timeOutId.value = setTimeout(() => {
      this.intervalId.value = setInterval(() => {
        if (this.currentActiveButton.value < (this.buttons.length - 1)) {
          this.currentActiveButton.value += 1
        } else {
          this.currentActiveButton.value = 0
          clearInterval(this.intervalId.value)
        }
        this.activeButton.value = this.buttons[this.currentActiveButton.value].label
      }, this.intervalDelay)
    }, this.timeOutDelay)
  }

  getIcon(buttonIndex: number) {
    return this.icons[buttonIndex]
  }

  changeActiveButton(buttonIndex: number, frame: number) {
    clearInterval(this.intervalId.value)
    clearTimeout(this.timeOutId.value)
    this.activeButton.value = this.buttons[buttonIndex].label
    if (this.lottieInstance.value) { this.lottieInstance.value!.goToAndStop(frame, true) }
  }

  animHandler(lottie: AnimationItem) {
    this.lottieInstance.value = lottie
  }

  activateFocusLottieLinks(event: Event) {
    const target = event.target as HTMLElement
    const parentNode = target.parentNode!.parentNode as HTMLElement
    const link = this.links.find(findLink => findLink.lottieId === parentNode.id ||
      findLink.lottieTextId === parentNode.id)
    // eslint-disable-next-line no-console
    if (link && link.haveLink) { this.router.push(link.link).catch(console.error) }
  }

  goToLinkPath(event: Event) {
    this.activateFocusLottieLinks(event)
  }

  changeFrameOnHoverTech() {
    this.changeActiveButton(0, 200)
  }

  changeFrameOnHoverManagement() {
    this.changeActiveButton(1, 250)
  }

  changeFrameOnHoverHr() {
    this.changeActiveButton(2, 330)
  }

  async getLottieElements() {
    await delay(this.waitingTimeToLoadLottie) // Waiting time to load lottie
    if (!this.serviceSliceRef.value) { return }
    this.lottieTextElemIds.forEach(elem => {
      const lottieElem = this.serviceSliceRef.value!.querySelector(elem) as HTMLElement
      if (lottieElem) {
        const link = this.links.find(findLink => lottieElem.id === findLink.lottieId || lottieElem.id === findLink.lottieTextId)
        if (link?.haveLink) {
          lottieElem.style.cursor = 'pointer'
          lottieElem.addEventListener('click', this.goToLinkPath)
        } else {
          lottieElem.style.cursor = 'not-allowed'
        }
        if (this.lottieElemGroups.techAndMarketing.includes(lottieElem.id)) {
          lottieElem.addEventListener('mouseover', this.changeFrameOnHoverTech)
        }

        if (this.lottieElemGroups.managementAndConsulting.includes(lottieElem.id)) {
          lottieElem.addEventListener('mouseover', this.changeFrameOnHoverManagement)
        }

        if (this.lottieElemGroups.hrAndMarketing.includes(lottieElem.id)) {
          lottieElem.addEventListener('mouseover', this.changeFrameOnHoverHr)
        }
      }
    })
  }

  removeListeners() {
    if (!this.serviceSliceRef.value) { return }
    this.lottieTextElemIds.forEach(elem => {
      const lottieElem = this.serviceSliceRef.value!.querySelector(elem)
      if (lottieElem) {
        lottieElem.removeEventListener('click', this.goToLinkPath)
        if (this.lottieElemGroups.techAndMarketing.includes(lottieElem.id)) {
          lottieElem.removeEventListener('mouseover', this.changeFrameOnHoverTech)
        }

        if (this.lottieElemGroups.managementAndConsulting.includes(lottieElem.id)) {
          lottieElem.removeEventListener('mouseover', this.changeFrameOnHoverManagement)
        }

        if (this.lottieElemGroups.hrAndMarketing.includes(lottieElem.id)) {
          lottieElem.removeEventListener('mouseover', this.changeFrameOnHoverHr)
        }
      }
    })
  }

  initIntersectionObserver() {
    if (this.serviceSliceRef.value) {
      this.observerRef.value = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setActiveClass()
            // eslint-disable-next-line
            this.getLottieElements().catch(console.log)
            if (this.serviceSliceRef.value) {
              observer.unobserve(this.serviceSliceRef.value)
            }
          }
        })
      })
      this.observerRef.value.observe(this.serviceSliceRef.value)
    }
  }
}

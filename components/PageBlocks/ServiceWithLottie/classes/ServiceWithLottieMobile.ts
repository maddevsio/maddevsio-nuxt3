import type { Ref } from 'vue'
import type {
  AccordionData,
  IServiceWithLottieMobile, ServiceSliceWithLottieMobileProps,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceWithLottieMobile'
import type { GetLinkProps } from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceSliceWithLottie'

export class ServiceWithLottieMobile implements IServiceWithLottieMobile {
  indentFromHeader = 230
  dataForCreateAccordion: AccordionData[]
  activeAccordion: Ref<string>

  constructor(props: ServiceSliceWithLottieMobileProps) {
    this.dataForCreateAccordion = this.getData(props)
    this.activeAccordion = ref('Tech and Development')

    this.getLottieLink = this.getLottieLink.bind(this)
    this.getGroupLinks = this.getGroupLinks.bind(this)
    this.getData = this.getData.bind(this)
    this.changeActiveAccordion = this.changeActiveAccordion.bind(this)
  }

  getLottieLink = (groupIdx: number) => {
    switch (groupIdx) {
    case 1: return 'blue-graphic'
    case 2: return 'red-graphic'
    case 3: return 'yellow-graphic'
    default: return ''
    }
  }

  getGroupLinks = (groupIdx: number, props: GetLinkProps) => {
    switch (groupIdx) {
    case 1: return [
      {
        url: props.customSoftwareLink,
        label: 'Custom Software Development',
        haveLink: Boolean(props.customSoftwareLink),
      },
      {
        url: props.transparentStaffingLink,
        label: 'Build-Operate-Transfer',
        haveLink: Boolean(props.transparentStaffingLink),
      },
      {
        url: props.technicalInfrastructureLink,
        label: 'Technical Infrastructure Optimization',
        haveLink: Boolean(props.technicalInfrastructureLink),
      },
    ]
    case 2: return [
      {
        url: props.softwareDevelopmentLink,
        label: 'Software Development Process Consulting',
        haveLink: Boolean(props.softwareDevelopmentLink),
      },
      {
        url: props.technicalAuditLink,
        label: 'Technical Audit',
        haveLink: Boolean(props.technicalAuditLink),
      },
      {
        url: props.projectDiscoveryLink,
        label: 'Project Discovery',
        haveLink: Boolean(props.projectDiscoveryLink),
      },
    ]
    case 3: return [
      {
        url: props.hrPracticesLink,
        label: 'HR Practices in Tech Companies Consulting',
        haveLink: Boolean(props.hrPracticesLink),
      },
      {
        url: props.techMarketingLink,
        label: 'Tech Marketing Consulting & Support',
        haveLink: Boolean(props.techMarketingLink),
      },
    ]
    default: return []
    }
  }

  getData(props: ServiceSliceWithLottieMobileProps) {
    return props.buttons.map((item, itemIdx) => ({
      buttonLabel: item.label,
      buttonIcon: props.icons[itemIdx],
      links: this.getGroupLinks(itemIdx + 1, props),
      lottieLink: this.getLottieLink(itemIdx + 1),
    }))
  }

  async changeActiveAccordion({
    $event,
    buttonLabel,
  }: { $event: Event, buttonLabel: string }) {
    this.activeAccordion.value = buttonLabel
    await useScrollToTab($event, this.indentFromHeader)
  }
}

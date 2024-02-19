import { EbookTemplateIDs } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'
import {
  approachDPEbookSubmitFormEvent,
  engineeringsHandbookSubmitFormEvent,
  pricingStrategiesEbookSubmitFormEvent,
  transparentRelationshipsHandbookSubmitFormEvent,
} from '~/analytics/events'
import { smartlookSubmitEbookForm } from '~/analytics/smartlookEvents'

export const sendEbookSubmitToAnalytics = (sendpulseTemplateId: number, location: string) => {
  const ebookEvents: { [key: number]: any } = {
    [EbookTemplateIDs.ENGINEERINGS_HANDBOOK]: () => {
      engineeringsHandbookSubmitFormEvent.send()
      smartlookSubmitEbookForm.send({ location })
    },
    [EbookTemplateIDs.APPROACH_DP]: () => {
      approachDPEbookSubmitFormEvent.send()
      smartlookSubmitEbookForm.send({ location })
    },
    [EbookTemplateIDs.PRICING_STRATEGIES]: () => {
      pricingStrategiesEbookSubmitFormEvent.send()
      smartlookSubmitEbookForm.send({ location })
    },
    [EbookTemplateIDs.TRANSPARENT_RELATIONSHIPS]: () => {
      transparentRelationshipsHandbookSubmitFormEvent.send()
      smartlookSubmitEbookForm.send({ location })
    },
  }

  return ebookEvents[sendpulseTemplateId]
}

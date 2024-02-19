import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { SendEmailPayload } from '~/components/Widgets/Form/interfaces/forms/FormTypes'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

export interface EbookFormProps {
  formTitle?: string
  formBuilder: IFormBuilder['props']
  formLocation: string
  sendPulseTemplateId: number
  ebookPath: string
  ebookName: string
}

export interface IEbookForm extends IBaseForm {
  sendPulseTemplateId: number
  subject: string
  type: string
  formTitle: string
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  ebookPath: string
  ebookName: string
  sendEmail(payload: SendEmailPayload): Promise<any>
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
  submitEbookEventToAnalytics(location: string, route: any): void
}

export enum EbookTemplateIDs {
  PRICING_STRATEGIES = 763889,
  APPROACH_DP = 791537,
  ENGINEERINGS_HANDBOOK = 837968,
  TRANSPARENT_RELATIONSHIPS = 938536,
}

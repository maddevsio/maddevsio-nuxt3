import type { IContactMeForm } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IServiceForm } from '~/components/Widgets/Form/interfaces/forms/IServiceForm'
import type { IEbookForm } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'
import type { ISubscribeForm } from '~/components/Widgets/Form/interfaces/forms/ISubscribeForm'
import type { IChecklistForm } from '~/components/Widgets/Form/interfaces/forms/IChecklistForm'
import type { ICareersForm } from '~/components/Widgets/Form/interfaces/forms/ICareersForm'
import type { ICareersSubscribeForm } from '~/components/Widgets/Form/interfaces/forms/ICareersSubscribeForm'

export type FormTypes = IContactMeForm | IServiceForm | IEbookForm | ISubscribeForm | IChecklistForm | ICareersForm | ICareersSubscribeForm

export interface SendEmailPayload {
  body: {
    email: {
      templateId: number
      variables: {
        modalTitle: string
        subject: string
        emailTo: string
        bookName?: string
        ebook?: string
        checklistName?: string
        checklistPathOnS3?: string
      },
    },
  }
}

export interface SendFeedbackEmail {
  feedback: string
  email: string
  fullName: string
  token: string
  subject: string
}

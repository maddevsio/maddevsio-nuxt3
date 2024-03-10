import type { IContactMeForm } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IServiceForm } from '~/components/Widgets/Form/interfaces/forms/IServiceForm'
import type { IEbookForm } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'
import type { ISubscribeForm } from '~/components/Widgets/Form/interfaces/forms/ISubscribeForm'
import type { IChecklistForm } from '~/components/Widgets/Form/interfaces/forms/IChecklistForm'
import type { ICareersForm } from '~/components/Widgets/Form/interfaces/forms/ICareersForm'

export type FormTypes = IContactMeForm | IServiceForm | IEbookForm | ISubscribeForm | IChecklistForm | ICareersForm

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

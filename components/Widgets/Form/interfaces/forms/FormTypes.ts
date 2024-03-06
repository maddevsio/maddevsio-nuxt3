import type { IContactMeForm } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IServiceForm } from '~/components/Widgets/Form/interfaces/forms/IServiceForm'
import type { IEbookForm } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'
import type { ISubscribeForm } from '~/components/Widgets/Form/interfaces/forms/ISubscribeForm'
import type { IChecklistForm } from '~/components/Widgets/Form/interfaces/forms/IChecklistForm'

export type FormTypes = IContactMeForm | IServiceForm | IEbookForm | ISubscribeForm | IChecklistForm

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

import type { IContactMeForm } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IServiceForm } from '~/components/Widgets/Form/interfaces/forms/IServiceForm'
import type { IEbookForm } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'

export type FormTypes = IContactMeForm | IServiceForm | IEbookForm

export interface SendEmailPayload {
  body: {
    email: {
      templateId: number
      variables: {
        modalTitle: string
        subject: string
        emailTo: string
        bookName: string
        ebook: string
      },
    },
  }
}

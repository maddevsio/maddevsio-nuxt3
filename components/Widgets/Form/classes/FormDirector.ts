import type { IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import { FormMaker } from '~/components/Widgets/Form/classes/FormMaker'

interface IFormDirector {
  formBuilder: IFormBuilder
  [key: string]: any
}

export class FormDirector implements IFormDirector {
  formBuilder: IFormBuilder

  constructor(builder: IFormBuilder) {
    this.formBuilder = builder
  }

  makeServiceFormWithPrismic(options: any) {
    return new FormMaker(this.formBuilder, options).serviceFormWithPrismicMaker()
  }

  makeContactMeForm(options: any) {
    return new FormMaker(this.formBuilder, options).contactMeFormMaker()
  }

  makeContactUsFooterForm (options: any) {
    return new FormMaker(this.formBuilder, options).contactUsFooterFormMaker()
  }

  makeEbookForm(options: any) {
    return new FormMaker(this.formBuilder, options).ebookFormMaker()
  }

  makeChecklistForm (options: any) {
    return new FormMaker(this.formBuilder, options).checklistFormMaker()
  }

  makeSubscribeForm(options: any) {
    return new FormMaker(this.formBuilder, options).subscribeFormMaker()
  }

  makeCareersForm(options: any) {
    return new FormMaker(this.formBuilder, options).careersFormWithPrismicMaker()
  }

  makeCareersSubscribeForm(options: any) {
    return new FormMaker(this.formBuilder, options).careersSubscribeFormMaker()
  }

  makeFeedbackForm(options: any) {
    return new FormMaker(this.formBuilder, options).feedbackFormMaker()
  }
}

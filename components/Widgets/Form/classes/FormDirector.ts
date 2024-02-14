import type { IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import { FormMaker } from '~/components/Widgets/Form/classes/FormMaker'

export class FormDirector {
  formBuilder: IFormBuilder

  constructor(builder: IFormBuilder) {
    this.formBuilder = builder
  }

  // makeServiceFormWithPrismic = (options: any) => new FormMaker(this.formBuilder, options).serviceFormWithPrismicMaker()
  //
  // makeContactMeForm = (options: any) => new FormMaker(this.formBuilder, options).contactMeFormMaker()
  //
  // makeContactUsFooterForm = (options: any) => new FormMaker(this.formBuilder, options).contactUsFooterFormMaker()
  //
  // makeEbookForm = (options: any) => new FormMaker(this.formBuilder, options).ebookFormMaker()
  //
  // makeChecklistForm = (options: any) => new FormMaker(this.formBuilder, options).checklistFormMaker()
  //
  // makeSubscribeForm = (options: any) => new FormMaker(this.formBuilder, options).subscribeFormMaker()
}

import type { IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import { Field } from '~/components/Widgets/Form/classes/formElements/Field'
import { Checkbox } from '~/components/Widgets/Form/classes/formElements/Checkbox'
import { Button } from '~/components/Widgets/Form/classes/formElements/Button'
import { RadioButtonGroup } from '~/components/Widgets/Form/classes/formElements/RadioButtonGroup'
import { RadioButton } from '~/components/Widgets/Form/classes/formElements/RadioButton'
import { ContactMeForm } from '~/components/Widgets/Form/classes/forms/ContactMeForm'
import { ServiceForm } from '~/components/Widgets/Form/classes/forms/ServiceForm'
import { EbookForm } from '~/components/Widgets/Form/classes/forms/EbookForm'
import { SubscribeForm } from '~/components/Widgets/Form/classes/forms/SubscribeForm'
import { ChecklistForm } from '~/components/Widgets/Form/classes/forms/ChecklistForm'
import { CareersForm } from '~/components/Widgets/Form/classes/forms/CareersForm'

interface FormMakerOptions {
  formLocation?: string
  emailSubject?: string
  sendPulseTemplateId?: number
  sendpulseTemplateID?: number
  ebookPath?: string
  ebookName?: string
  templateId?: number
  lineBreakForSuccess?: boolean
  isModalChecklist?: boolean
  checklistName?: string
  checklistPathOnS3?: string
  [key: string]: any
}

export class FormMaker {
  formBuilder: IFormBuilder
  options: FormMakerOptions

  constructor(formBuilder: IFormBuilder, options: FormMakerOptions) {
    this.formBuilder = formBuilder
    this.options = options
  }

  contactMeFormMaker() {
    return new ContactMeForm({
      formTitle: 'Tell Us About Your Project',
      formLocation: this.options.formLocation!,
      emailSubject: this.options.emailSubject!,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'fullName',
            elementId: 'fullName',
            type: 'text',
            name: 'Full name',
            placeholder: 'Full Name',
            validationType: 'longText',
            longTextLimit: 140,
            required: true,
          }),
          new Field({
            objectKeyName: 'email',
            elementId: 'email',
            type: 'email',
            name: 'Business Email',
            placeholder: 'Business Email',
            validationType: 'businessEmail',
            required: true,
          }),
          new Field({
            objectKeyName: 'phoneNumber',
            elementId: 'phoneNumber',
            type: 'text',
            name: 'phoneNumber',
            placeholder: 'Phone Number',
            validationType: 'phone',
            required: false,
          }),
        ])
        .addTextarea(
          new Field({
            objectKeyName: 'description',
            elementId: 'description',
            type: 'textarea',
            name: 'description',
            placeholder: 'How we can help you?',
            validationType: 'longText',
            longTextLimit: 2500,
            required: true,
          }),
        )
        .addCheckBoxes([
          new Checkbox({
            objectKeyName: 'newsLetter',
            elementId: 'newsLetter',
            label: 'I agree to get Mad Devs’ discount offers and other marketing communications.',
            name: 'Newsletter agreement',
            defaultValue: true,
          }),
        ])
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            label: 'Send',
            type: 'submit',
          }),
        )
        .build(),
    })
  }

  checklistFormMaker() {
    return new ChecklistForm({
      formLocation: this.options.formLocation!,
      sendpulseTemplateID: this.options.sendpulseTemplateID!,
      checklistName: this.options.checklistName!,
      checklistPathOnS3: this.options.checklistPathOnS3!,
      isModalChecklist: this.options.isModalChecklist!,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'fullName',
            elementId: 'fullName',
            type: 'text',
            name: 'Full name',
            placeholder: 'Full Name',
            validationType: 'longText',
            longTextLimit: 140,
            required: true,
          }),
          new Field({
            objectKeyName: 'email',
            elementId: 'email',
            type: 'email',
            name: 'Email',
            placeholder: 'Email',
            validationType: 'email',
            required: true,
          }),
        ])
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            label: this.options.buttonText || 'Send me the checklist',
            type: 'submit',
          }),
        )
        .build(),
    })
  }

  contactUsFooterFormMaker() {
    return new ContactMeForm({
      formTitle: this.options.formTitle,
      formLocation: this.options.formLocation!,
      emailSubject: this.options.emailSubject!,
      formID: this.options.formUid,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'fullName',
            elementId: 'fullName',
            type: 'text',
            name: 'Full name',
            placeholder: 'Full Name',
            validationType: 'longText',
            longTextLimit: 140,
            required: true,
          }),
          new Field({
            objectKeyName: 'email',
            elementId: 'email',
            type: 'email',
            name: 'Business Email',
            placeholder: 'Business Email',
            validationType: 'businessEmail',
            required: true,
          }),
          new Field({
            objectKeyName: 'phoneNumber',
            elementId: 'phoneNumber',
            type: 'text',
            name: 'phoneNumber',
            placeholder: 'Phone Number',
            validationType: 'phone',
            required: false,
          }),
        ])
        .addTextarea(
          new Field({
            objectKeyName: 'description',
            elementId: 'description',
            type: 'textarea',
            name: 'description',
            placeholder: 'How we can help you?',
            validationType: 'longText',
            longTextLimit: 2500,
            required: true,
          }),
        )
        .addCheckBoxes([
          new Checkbox({
            objectKeyName: 'newsLetter',
            elementId: 'newsLetter',
            label: 'I agree to get Mad Devs’ discount offers and other marketing communications.',
            name: 'Newsletter agreement',
            defaultValue: true,
          }),
        ])
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            type: 'submit',
          }),
        )
        .build(),
    })
  }

  ebookFormMaker() {
    return new EbookForm({
      formTitle: '',
      formLocation: this.options.formLocation!,
      sendPulseTemplateId: this.options.sendPulseTemplateId!,
      ebookPath: this.options.ebookPath!,
      ebookName: this.options.ebookName!,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'fullName',
            elementId: 'fullName',
            type: 'text',
            name: 'Full name',
            placeholder: 'Full Name',
            validationType: 'longText',
            longTextLimit: 140,
            required: true,
          }),
          new Field({
            objectKeyName: 'email',
            elementId: 'email',
            type: 'email',
            name: 'Email',
            placeholder: 'Email',
            validationType: 'email',
            required: true,
          }),
        ])
        .addCheckBoxes([
          new Checkbox({
            objectKeyName: 'newsLetter',
            elementId: 'newsLetter',
            label: 'I agree to receive the monthly newsletter from Mad Devs.',
            name: 'Newsletter agreement',
            defaultValue: true,
          }),
        ])
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            label: 'Send me the ebook',
            type: 'submit',
          }),
        )
        .build(),
    })
  }

  serviceFormWithPrismicMaker() {
    return new ServiceForm({
      formTitle: this.options.$prismic.asText(this.options.slice.primary.title),
      formDescription: this.options.slice.primary.description,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'fullName',
            elementId: 'fullName',
            type: 'text',
            name: 'Full name',
            placeholder: this.options.slice.primary.fieldNamePlaceholder || 'Full Name',
            validationType: 'longText',
            longTextLimit: 140,
            required: true,
          }),
          new Field({
            objectKeyName: 'email',
            elementId: 'email',
            type: 'email',
            name: 'Business Email',
            placeholder: this.options.slice.primary.fieldEmailPlaceholder || 'Business Email',
            validationType: 'businessEmail',
            required: true,
          }),
          new Field({
            objectKeyName: 'phoneNumber',
            elementId: 'phoneNumber',
            type: 'text',
            name: 'phoneNumber',
            placeholder: this.options.slice.primary.fieldPhonePlaceholder || 'Phone Number',
            validationType: 'phone',
            required: false,
          }),
        ])
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            label: this.options.slice.primary.buttonText || 'Get Started',
            type: 'submit',
          }),
        )
        .addRadioButtonGroup(
          new RadioButtonGroup({
            objectKeyName: 'serviceFormRadioGroup',
            elementId: 'serviceFormRadioGroup',
            description: this.options.slice.primary.radioButtonGroupDescription || '',
            required: true,
            radioButtons: this.options.slice.items.map((radio: {
              radioButtonLabel: string
              radioButtonGroupName: string
            }) => new RadioButton({
              objectKeyName: radio.radioButtonLabel,
              elementId: radio.radioButtonLabel,
              label: radio.radioButtonLabel,
              name: radio.radioButtonGroupName || this.options.slice.primary.radioButtonGroupDescription,
            })),
          }),
        )
        .addCheckBoxes([
          new Checkbox({
            objectKeyName: 'newsLetter',
            elementId: 'newsLetter',
            label: 'I agree to get Mad Devs’ discount offers and other marketing communications.',
            name: 'Newsletter agreement',
            defaultValue: true,
          }),
        ])
        .build(),
    })
  }

  subscribeFormMaker() {
    return new SubscribeForm({
      templateId: Number(this.options.templateId),
      formTitle: '',
      formLocation: this.options.formLocation!,
      lineBreakForSuccess: this.options.lineBreakForSuccess!,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'email',
            elementId: this.options.elementId,
            type: 'email',
            name: 'Subscribe Email',
            placeholder: 'Email',
            validationType: 'existingEmail',
            required: true,
          }),
        ])
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            label: '',
            type: 'submit',
          }),
        )
        .build(),
    })
  }

  careersFormWithPrismicMaker() {
    return new CareersForm({
      vacancyPosition: this.options.vacancyPosition,
      formBuilder: this.formBuilder
        .setFields([
          new Field({
            objectKeyName: 'fullName',
            elementId: 'fullName',
            type: 'text',
            name: 'Full name',
            placeholder: 'Your name',
            validationType: 'longText',
            longTextLimit: 140,
            required: true,
          }),
          new Field({
            objectKeyName: 'email',
            elementId: 'email',
            type: 'email',
            name: 'Email',
            placeholder: 'Email',
            validationType: 'email',
            required: true,
          }),
          new Field({
            objectKeyName: 'phoneNumber',
            elementId: 'phoneNumber',
            type: 'text',
            name: 'phoneNumber',
            placeholder: 'Phone Number',
            validationType: 'phone',
            required: true,
          }),
          new Field({
            objectKeyName: 'cvFile',
            elementId: 'cvFile-input',
            type: 'file',
            name: 'cvFile',
            placeholder: 'Choose a file',
            validationType: 'file',
            required: true,
            $eventBus: this.options.$eventBus,
          }),
          new Field({
            objectKeyName: 'linkedin',
            elementId: 'linkedin-input',
            type: 'text',
            name: 'linkedin',
            placeholder: 'LinkedIn link',
            validationType: 'linkedinLink',
            required: true,
            $eventBus: this.options.$eventBus,
          }),
        ])
        .addRadioButtonGroup(
          new RadioButtonGroup({
            objectKeyName: 'careersRadioGroup',
            elementId: 'careersRadioGroup',
            description: '',
            required: true,
            radioButtons: [
              new RadioButton({
                objectKeyName: 'cvFileRadio',
                elementId: 'cvFile-radio',
                label: 'File containing resume',
                name: 'resumeType',
                prechecked: true,
                defaultValue: 'File containing resume',
              }),
              new RadioButton({
                objectKeyName: 'linkedinRadio',
                elementId: 'linkedin-link-radio',
                label: 'Link to LinkedIn',
                name: 'resumeType',
              }),
            ],
          }),
        )
        .addButton(
          new Button({
            objectKeyName: 'submitButton',
            elementId: 'submitButton',
            label: 'I want to work for Mad Devs!',
            type: 'submit',
          }),
        )
        .build(),
    })
  }
}

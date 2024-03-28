import type { Ref } from 'vue'
import { parsePhoneNumber } from 'awesome-phonenumber'
import {
  type FieldProps,
  type IField,
  IgnoreEmailDomains,
  ValidationTypes,
} from '~/components/Widgets/Form/interfaces/formElements'
import { phone } from '~/components/Widgets/Form/validators/inputValidators'

export class Field implements IField {
  private readonly errorMessages = {
    businessEmail: 'Please, use a business email address.',
    correctEmail: 'Please, type correct email.',
    correctBusinessEmail: 'Please, type correct business email.',
    longText: (size: number) => `Maximum length ${ size } characters.`,
    phoneNumber: 'Please, type correct phone number including country code.',
    xss: 'Please, type correct value.',
    requiredField: 'This field is required.',
    emailExists: 'Your email already exists.',
    fileSize: 'File size must be less than 5MB',
    fileExtensions: 'File extension must be PDF, DOC or DOCX',
    linkedinLink: 'URL does not contain \'linkedin\'',
  }

  private readonly validationTypes: Record<string, ValidationTypes> = {
    businessEmail: ValidationTypes.BUSINESS_EMAIL,
    phone: ValidationTypes.PHONE,
    longText: ValidationTypes.LONG_TEXT,
    email: ValidationTypes.EMAIL,
    existingEmail: ValidationTypes.EXISTING_EMAIL,
    file: ValidationTypes.FILE,
    linkedinLink: ValidationTypes.LINKEDIN_LINK,
  }

  private readonly ignoreEmailDomains = [
    IgnoreEmailDomains.AOL,
    IgnoreEmailDomains.GMX,
    IgnoreEmailDomains.MAIL,
    IgnoreEmailDomains.ICLOUD,
    IgnoreEmailDomains.HOTMAIL,
    IgnoreEmailDomains.GMAIL,
    IgnoreEmailDomains.OUTLOOK,
    IgnoreEmailDomains.PROTON,
    IgnoreEmailDomains.PROTONMAIL,
    IgnoreEmailDomains.YAHOO,
    IgnoreEmailDomains.YANDEX,
    IgnoreEmailDomains.ZOHO,
    IgnoreEmailDomains.ZOHOMAIL,
  ]

  objectKeyName: string
  elementId: string
  type: string
  name: string
  placeholder: string
  validationType: string
  longTextLimit: number
  required: boolean
  fieldValue: Ref<string>
  error: Ref<string | boolean>
  showCheckMark: Ref<boolean>
  verifiedSuccess: Ref<boolean>
  $eventBus: any

  constructor({
    objectKeyName = '',
    elementId = '',
    type = 'text',
    name = '',
    placeholder = '',
    validationType = '',
    longTextLimit = 2500,
    required = false,
    $eventBus,
  }: FieldProps) {
    this.objectKeyName = objectKeyName
    this.elementId = elementId
    this.type = type
    this.name = name
    this.placeholder = placeholder
    this.validationType = validationType
    this.longTextLimit = longTextLimit
    this.required = required
    this.fieldValue = ref('')
    this.error = ref('')
    this.showCheckMark = ref(false)
    this.verifiedSuccess = ref(false)
    this.$eventBus = $eventBus
    this.onChangeValue = this.onChangeValue.bind(this)
    this.realTimeValidation = this.realTimeValidation.bind(this)
    this.validationOnSubmit = this.validationOnSubmit.bind(this)
    this.onBlurInput = this.onBlurInput.bind(this)
    this.businessEmailValidation = this.businessEmailValidation.bind(this)
    this.xssValidation = this.xssValidation.bind(this)
    this.longTextValidation = this.longTextValidation.bind(this)
    this.correctEmailValidation = this.correctEmailValidation.bind(this)
    this.phoneValidation = this.phoneValidation.bind(this)
    this.isEmptyRequiredField = this.isEmptyRequiredField.bind(this)
    this.resetEmptyPhoneField = this.resetEmptyPhoneField.bind(this)
    this.onFocusInput = this.onFocusInput.bind(this)
    this.phoneNumberFormat = this.phoneNumberFormat.bind(this)
    this.checkEmailInLocalStorage = this.checkEmailInLocalStorage.bind(this)
  }

  businessEmailValidation() {
    const regex = new RegExp(`@(${ this.ignoreEmailDomains.join('|') })`, 'i')
    return regex.test(this.fieldValue.value) ? this.errorMessages.businessEmail : ''
  }

  xssValidation() {
    const htmlRegex = /<[^>]*>/g
    const jsRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
    return htmlRegex.test(this.fieldValue.value) || jsRegex.test(this.fieldValue.value) ? this.errorMessages.xss : ''
  }

  longTextValidation() {
    return this.fieldValue.value.length > this.longTextLimit ? this.errorMessages.longText(this.longTextLimit) : ''
  }

  linkedinLinkValidation() {
    return !this.fieldValue.value.toLowerCase().includes('linkedin') ? this.errorMessages.linkedinLink : ''
  }

  correctEmailValidation() {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (this.fieldValue.value) {
      return !emailRegex.test(this.fieldValue.value) &&
        `${ this.validationType === this.validationTypes.businessEmail
          ? this.errorMessages.correctBusinessEmail
          : this.errorMessages.correctEmail }`
    }
    return ''
  }

  phoneValidation() {
    if (this.fieldValue.value.length > 1) {
      return parsePhoneNumber(this.fieldValue.value).valid ? '' : this.errorMessages.phoneNumber
    }
    return ''
  }

  isEmptyRequiredField() {
    if (this.required && !this.fieldValue.value) { this.error.value = this.errorMessages.requiredField }
  }

  checkEmailInLocalStorage() {
    if (localStorage.getItem('newsLetter_subscriber')) {
      const subscriber = JSON.parse(localStorage.getItem('newsLetter_subscriber')!) || []
      if (subscriber.length) {
        if (subscriber.includes(this.fieldValue.value)) {
          this.error.value = this.errorMessages.emailExists
        }
      }
    }
  }

  fileValidation() {
    if (this.fieldValue.value) {
      // @ts-ignore
      if (this.fieldValue.value.size > 5000000) {
        return this.errorMessages.fileSize
      }
      const re = /(\.pdf|\.doc|\.docx)$/i
      // @ts-ignore
      if (!re.exec(this.fieldValue.value.name)) {
        return this.errorMessages.fileExtensions
      }
    }

    return ''
  }

  realTimeValidation() {
    this.error.value = ''
    if (this.xssValidation()) { return this.xssValidation() }
    if (this.type === this.validationTypes.email &&
      this.correctEmailValidation()) { return this.correctEmailValidation() }
    if (this.validationType === this.validationTypes.businessEmail &&
      this.businessEmailValidation()) { return this.businessEmailValidation() }
    if (this.validationType === this.validationTypes.longText &&
      this.longTextValidation()) { return this.longTextValidation() }
    if (this.validationType === this.validationTypes.phone &&
      this.phoneValidation()) { return this.phoneValidation() }
    if (this.validationType === this.validationTypes.file &&
    this.fileValidation()) { return this.fileValidation() }
    if (this.validationType === this.validationTypes.linkedinLink &&
    this.linkedinLinkValidation()) { return this.linkedinLinkValidation() }

    return ''
  }

  validationOnSubmit() {
    this.isEmptyRequiredField()
    if (this.validationType === this.validationTypes.existingEmail) { this.checkEmailInLocalStorage() }
    this.verifiedSuccess.value = !this.error.value
    this.showCheckMark.value = !(!this.fieldValue.value && !this.error.value)
  }

  onChangeValue(event: InputEvent) {
    const currentTarget = event.currentTarget as HTMLInputElement
    this.showCheckMark.value = false
    this.error.value = ''
    if (this.validationType === this.validationTypes.phone) {
      this.phoneNumberFormat(event)
    } else {
      this.fieldValue.value = currentTarget.value
    }
  }

  phoneNumberFormat(event: InputEvent) {
    const currentTarget = event.currentTarget as HTMLInputElement
    const phoneNumberWithoutPlus = currentTarget.value.slice(1)
    if (currentTarget.value.length <= 1) {
      currentTarget.value = '+'
    }
    if (phone(phoneNumberWithoutPlus)) {
      this.fieldValue.value = parsePhoneNumber(currentTarget.value).number?.rfc3966?.split(':')[1] ||
        currentTarget.value
    } else {
      currentTarget.value = '+'
    }
  }

  onFocusInput() {
    if (this.name === 'phoneNumber') {
      this.fieldValue.value = this.fieldValue.value.includes('+') ? this.fieldValue.value : '+'
    }
  }

  resetEmptyPhoneField() {
    if (this.name === 'phoneNumber' && this.fieldValue.value.length === 1) {
      this.fieldValue.value = ''
    }
  }

  onBlurInput() {
    this.error.value = this.realTimeValidation()
    this.verifiedSuccess.value = !this.error.value
    this.resetEmptyPhoneField()
    this.showCheckMark.value = !(!this.fieldValue.value && !this.error.value)
  }

  handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement
    const [file] = target.files as FileList
    // @ts-ignore
    this.fieldValue.value = file
    this.error.value = this.realTimeValidation()
    this.verifiedSuccess.value = !this.error.value
    this.showCheckMark.value = !(!this.fieldValue.value && !this.error.value)
  }
}

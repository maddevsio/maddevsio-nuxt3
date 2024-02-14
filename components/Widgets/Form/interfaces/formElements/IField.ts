import type { Ref } from 'vue'

export enum IgnoreEmailDomains {
  GMAIL = 'gmail',
  YAHOO = 'yahoo',
  HOTMAIL = 'hotmail',
  OUTLOOK = 'outlook',
  ICLOUD = 'icloud',
  AOL = 'aol',
  PROTONMAIL = 'protonmail',
  MAIL = 'mail',
  ZOHO = 'zoho',
  ZOHOMAIL = 'zohomail',
  GMX = 'gmx',
  YANDEX = 'yandex',
  PROTON = 'proton',
}

export enum ValidationTypes {
  BUSINESS_EMAIL = 'businessEmail',
  PHONE = 'phone',
  LONG_TEXT = 'longText',
  EMAIL = 'email',
  EXISTING_EMAIL = 'existingEmail',
}

export interface FieldProps {
  objectKeyName: string
  elementId: string
  type: string
  name: string
  placeholder: string
  validationType: string
  longTextLimit?: number
  required: boolean
}

export interface IField {
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
  onChangeValue(event: InputEvent): void
  realTimeValidation(): string | false
  validationOnSubmit(): void
  onBlurInput(): void
  businessEmailValidation(): string
  xssValidation(): string
  longTextValidation(): string
  correctEmailValidation(): string | false
  phoneValidation(): string
  isEmptyRequiredField(): void
  resetEmptyPhoneField(): void
  onFocusInput(): void
  phoneNumberFormat(event: InputEvent): void
  checkEmailInLocalStorage(): void
}

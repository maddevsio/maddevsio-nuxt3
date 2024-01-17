import { SmartlookEvent } from 'analytics/SmartlookEvent.js'
import { SMARTLOOK_EVENTS, SMARTLOOK_EVENT_CATEGORIES } from 'analytics/constants.js'

export const smartlookSubmitContactMe = new SmartlookEvent(SMARTLOOK_EVENTS.submitContactMe).setCategory(
  SMARTLOOK_EVENT_CATEGORIES.SUBMIT,
)
export const smartlookSubmitOrderProject = new SmartlookEvent(SMARTLOOK_EVENTS.submitOrderProject).setCategory(
  SMARTLOOK_EVENT_CATEGORIES.SUBMIT,
)
export const smartlookSubmitPostForm = new SmartlookEvent(SMARTLOOK_EVENTS.submitPostForm).setCategory(
  SMARTLOOK_EVENT_CATEGORIES.SUBMIT,
)
export const smartlookSubmitEbookForm = new SmartlookEvent(SMARTLOOK_EVENTS.submitEbookForm).setCategory(
  SMARTLOOK_EVENT_CATEGORIES.SUBMIT,
)
export const smartlookSubmitCv = new SmartlookEvent(SMARTLOOK_EVENTS.submitCv).setCategory(
  SMARTLOOK_EVENT_CATEGORIES.SUBMIT,
)
export const smartlookSubmitNewsletter = new SmartlookEvent(SMARTLOOK_EVENTS.submitNewsletter).setCategory(
  SMARTLOOK_EVENT_CATEGORIES.SUBMIT,
)

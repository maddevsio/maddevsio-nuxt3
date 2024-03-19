import { SmartlookEvent } from '~/analytics/SmartlookEvent'
import { SMARTLOOK_EVENT_CATEGORIES, SMARTLOOK_EVENTS } from '~/analytics/constants'

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
export const smartlookClickHeaderCta = new SmartlookEvent(SMARTLOOK_EVENTS.clickHeaderCta)
  .setCategory(SMARTLOOK_EVENT_CATEGORIES.CLICK)

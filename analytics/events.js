import { AnalyticsEvent } from './Event.js'
import { EVENT_CATEGORIES } from './constants.js'

export const emailClickEvent = new AnalyticsEvent('email_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeClickEvent = new AnalyticsEvent('contact_me_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeSubmitEvent = new AnalyticsEvent('submit_contact_me').setCategory(EVENT_CATEGORIES.SUBMIT)

export const projectFormClickEvent = new AnalyticsEvent('click_submit_project_form').setCategory(EVENT_CATEGORIES.CLICK)

export const projectFormSubmitEvent = new AnalyticsEvent('submit_your_project').setCategory(EVENT_CATEGORIES.SUBMIT)

export const contactsClickEvent = new AnalyticsEvent('contacts_click').setCategory(EVENT_CATEGORIES.CLICK)

export const careersClickEvent = new AnalyticsEvent('careers_click').setCategory(EVENT_CATEGORIES.CLICK)

export const submitCvFormEvent = new AnalyticsEvent('submit_cv').setCategory(EVENT_CATEGORIES.SUBMIT)

export const pricingStrategiesEbookSubmitFormEvent = new AnalyticsEvent('submit_pricing_strategies_ebook_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const approachDPEbookSubmitFormEvent = new AnalyticsEvent('submit_approach_dp_ebook_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const engineeringsHandbookSubmitFormEvent = new AnalyticsEvent('submit_engineerings_handbook_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const transparentRelationshipsHandbookSubmitFormEvent = new AnalyticsEvent('submit_transparent_relationships_ebook_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const submitNewsletterSubscription = new AnalyticsEvent('submit_newsletter_subscription').setCategory(EVENT_CATEGORIES.SUBMIT)

export const submitPostForm = new AnalyticsEvent('submit_post_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const clickHeaderCta = new AnalyticsEvent('click_header_cta').setCategory(EVENT_CATEGORIES.CLICK)

export const submitOrderProject = new AnalyticsEvent('submit_order_project').setCategory(EVENT_CATEGORIES.SUBMIT)

export const checklistSubmitEvent = new AnalyticsEvent('submit_checklist').setCategory(EVENT_CATEGORIES.SUBMIT)

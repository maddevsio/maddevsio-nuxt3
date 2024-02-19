export const CONTENT_GROUPS = [
  {
    url: ['/'],
    name: 'home_page',
  },
  {
    url: ['/case-studies/'],
    name: 'case_studies',
  },
  {
    url: ['/case-studies/clutch/'],
    name: 'case',
  },
  {
    url: ['/blog/'],
    name: 'blog',
  },
  {
    url: ['/ebooks/pricing-strategies/'],
    name: 'pricing-strategies',
  },
  {
    url: ['/customer-university/custom-software-development-pricing-strategies/'],
    name: 'cu_post',
  },
  {
    url: ['/blog/automation-of-customer-service/'],
    name: 'blog_post',
  },
  {
    url: ['/open-source/'],
    name: 'open_source',
  },
  {
    url: ['/services/', '/software-testing/'],
    name: 'services',
  },
  {
    url: ['/development-process/', '/delivery-models/'],
    name: 'approach',
  },
  {
    url: ['/team/'],
    name: 'team',
  },
  {
    url: ['/careers/'],
    name: 'careers',
  },
  {
    url: ['/careers/senior-golang/'],
    name: 'job_post',
  },
  {
    url: ['/contact-us/'],
    name: 'contact_us',
  },
  {
    url: ['/tag/frontend-development/'],
    name: 'tag',
  },
  {
    url: ['/author/denis-grushkin/'],
    name: 'author',
  },
  {
    url: ['/privacy/', '/sustainability-policy/', '/gdpr/', '/nda/', '/faq/'],
    name: 'policy',
  },
  {
    url: ['/transportation/', '/blockchain/'],
    name: 'industries',
  },
]

export const EVENT_CATEGORIES = {
  CLICK: 'click',
  SCROLL: 'scroll',
  SUBMIT: 'submit',
}

export const ANALYTICS_IDS = {
  GA4: process.env.analytics4Key,
}

export const SMARTLOOK_EVENT_CATEGORIES = {
  SUBMIT: 'submit_form',
}

export const SMARTLOOK_EVENTS = {
  submitContactMe: 'submit_contact_me',
  submitOrderProject: 'submit_order_project',
  submitPostForm: 'submit_post_form',
  submitEbookForm: 'submit_ebook_form',
  submitCv: 'submit_cv',
  submitNewsletter: 'submit_newsletter',
}

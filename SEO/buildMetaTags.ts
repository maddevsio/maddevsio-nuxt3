import type { SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'

interface BuildHeadData {
  lang?: string
  title: string
  description: string
  url: string
  jsonLd?: string | ({ type: string; innerHTML: string; } | null)[] | SchemaOrgSnippet[]
  image?: string
  metaTitle?: string
  noindex?: boolean
}

const deliveryModelsSeo = {
  'delivery-models': {
    title: 'Collaboration Approaches and Delivery Models | Mad Devs',
    description: 'Expand your development capabilities by choosing proper delivery models for your IT project. Manage your product growth through an effective collaboration model.',
    url: 'https://maddevs.io/delivery-models/',
  },
  'staff-augmentation': {
    title: 'IT Staff Augmentation | Mad Devs Delivery Models',
    description: 'Are you need quick development team scaling to meet release deadlines? Reach time-to-market targets and release deadlines faster with a staff augmentation model.',
    url: 'https://maddevs.io/delivery-models/staff-augmentation/',
  },
  'dedicated-team': {
    title: 'Dedicated Development Team | Mad Devs Delivery Models',
    description: 'Do you need a development team that will supplement your existing team and focuses solely on your project? Hire a dedicated team to bring your product idea to life.',
    url: 'https://maddevs.io/delivery-models/dedicated-team/',
  },
  'temp-to-hire': {
    title: 'Temp to Hire | Mad Devs Delivery Models',
    description: 'Do you face long and complex employee recruitment processes? Expand the hiring geography with minimal onboarding and recruiting risks with temp to hire model.',
    url: 'https://maddevs.io/delivery-models/temp-to-hire/',
  },
  'technical-assessment': {
    title: 'Technical Competency Assessment | Mad Devs Delivery Models',
    description: 'Are you looking for an unbiased expert assessment? Get unbias development team competency assessment to solve technical issues and scale your business.',
    url: 'https://maddevs.io/delivery-models/technical-assessment/',
  },
  'team-supervision': {
    title: 'Effective Team Supervision | Mad Devs Delivery Models',
    description: 'Are your business facing technical challenges due to rapid growth? Boost technical team performance with effective team supervision.',
    url: 'https://maddevs.io/delivery-models/team-supervision/',
  },
  'transferring-projects': {
    title: 'IT Projects Transferring | Mad Devs Delivery Models',
    description: 'Do you need to prepare your project for transfer to another IT team? Protect your intellectual property while transferring a project with the project handover model.',
    url: 'https://maddevs.io/delivery-models/transferring-projects/',
  },
}

const tagPagesSeo = {
  'project-management': {
    title: 'Top articles about project management | Mad Devs Blog',
    description: 'Discover articles about project management and SDLC. Insightful articles on the best project management practices. Quality content curated by Mad Devs.',
  },
  'backend-development': {
    title: 'Top articles about backend development | Mad Devs Blog',
    description: 'Discover tech articles about software solutions. Insightful articles on the best backend development practices. Quality content curated by Mad Devs.',
  },
  'frontend-development': {
    title: 'Top articles about frontend development | Mad Devs Blog',
    description: 'Discover tech articles about software solutions. Insightful articles on the best frontend development practices. Quality content curated by Mad Devs.',
  },
  hardware: {
    title: 'Top articles about hardware | Mad Devs Blog',
    description: 'Discover tech articles about hardware and computer science. Insightful articles on the best hardware practices. Quality content curated by Mad Devs.',
  },
  devops: {
    title: 'Top articles about DevOps | Mad Devs Blog',
    description: 'Discover tech articles about devops, cloud, AWS and infrastructure . Insightful articles on the best Devops practices. Quality content curated by Mad Devs.',
  },
  'software-development': {
    title: 'Top articles about software development | Mad Devs Blog',
    description: 'Discover tech articles about software solutions. Insightful articles on the best software development practices. Quality content curated by Mad Devs.',
  },
  'android-development': {
    title: 'Top articles about Android app development | Mad Devs Blog',
    description: 'Discover tech articles about mobile app development. Insightful articles on the best  Android creation practices. Quality content curated by Mad Devs.',
  },
  'ios-development': {
    title: 'Top articles about app development for iOS | Mad Devs Blog',
    description: 'Discover tech articles about mobile app development. Insightful articles on the best  iOS creation practices. Quality content curated by Mad Devs.',
  },
  'mobile-development': {
    title: 'Top articles about mobile app development | Mad Devs Blog',
    description: 'Discover tech articles about mobile app development. Insightful articles on the best iOS and Android creation practices. Quality content curated by Mad Devs.',
  },
  ux: {
    title: 'Top articles about UX/UI | Mad Devs Blog',
    description: 'Discover articles about UX/UI design. Insightful articles on the best UX design practices. Quality content curated by Mad Devs.',
  },
  ui: {
    title: 'Top articles about UX/UI | Mad Devs Blog',
    description: 'Discover articles about UX/UI design. Insightful articles on the best UI design practices. Quality content curated by Mad Devs.',
  },
  'customer-university': {
    title: 'Customer University articles | Mad Devs Blog',
    description: 'Discover every aspect of customer-contractor interactions in the IT industry. Insightful articles about how to achieve a genuinely profitable partnership.',
  },
  'pricing-strategies': {
    title: 'Pricing strategies series from Customer University | Mad Devs Blog',
    description: 'Discover articles about custom software development pricing strategies. Insightful articles on different pricing model practices in IT.',
  },
  'editors-pick': {
    title: 'Top articles by editors\' pick | Mad Devs Blog',
    description: 'Discover tech articles by Mad Devs editors\' pick. Insightful articles on the best practices ans solutions in IT. Quality content curated by Mad Devs.',
  },
}

export const generateDefaultSchema = (title: string, description: string) => `{"@context": "https://schema.org", "@type": "WebPage", "name": "${ title || '' }", "description": "${ description || '' }", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}`

export const meta: { [key: string]: any } = {
  index: {
    title: 'Custom Software Development Company | Mad Devs',
    description:
      'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
    url: 'https://maddevs.io/',
    jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in London, which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "27 Old Gloucester Street", "addressLocality": "London", "addressRegion": "UK", "postalCode": "WC1N3AX"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
  },
  careers: {
    title: 'Mad Devs Careers: Work with Us',
    description: 'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in cloud and software engineering.',
    url: 'https://maddevs.io/careers/',
  },
  faq: {
    title: 'Mad Devs: Frequently Asked Questions',
    description:
      'FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.',
    url: 'https://maddevs.io/faq/',
    jsonLd: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many people work at your company?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-many-people-work-at-your-company?\'>Mad Devs currently is a 120+ person strong team of rock stars who are on a mission to deliver value to long-term projects.</a>"}},{"@type":"Question","name":"What time zone does your team operate in?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-time-zone-does-your-team-operate-in?\'>We generally work in +6 and +3 UTC from 9 AM to 6 PM, but we have early birds and night owls allowing us to adjust to customers from the US, the UK, South East Asia, and Oceania. Our development workflows are devised around asynchronous communication, leveraging automatic reporting drilled down to every task instance or team member. Daily standups, work logs, and all-hands meetings or video calls keep everybody on the same page. </a>"}},{"@type":"Question","name":"What types of projects you do NOT work on?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-types-of-projects-you-do-not-work-on?\'>Mad Devs workflow is dedicated to the creation and maintenance of high-quality, scalable systems intended for heavy workloads. We can’t help with requests for landing pages and ultra-fast MVPs.</a>"}},{"@type":"Question","name":"Where can I find the project portfolio of your company? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#where-can-i-find-the-project-portfolio-of-your-company?\'>Since 2016, our team has delivered to customers 50+ projects in FinTech, Transportation, HealthTech, AdTech, EdTech, and E-commerce industries. The Mad Devs team has worked with Clutch.co, Teacherly, Guardrails, GoDee, Sir John Monash Centre, Eatigo, Alfabank, Admitad, Triggermesh, and many other companies ensuring that hundreds of thousands of people enjoy apps and services they use on a daily basis. We cannot disclose details for ~40% of our customers as we need to comply with the terms of NDAs.</a>"}},{"@type":"Question","name":"What details do you need from me to discuss my project & start work? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-details-do-you-need-from-me-to-discuss-my-project-&-start-work?\'>Simply submit your project idea to us via our contact form. We will contact you to clarify further requirements and prepare the project time & cost estimates. For more details, you can get in touch with our head of delivery management Tamara Mun: tamaramun@maddevs.io, or schedule a meeting at calendly/mun_tamara.</a> "}},{"@type":"Question","name":"How much does software development cost? How do you charge? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-much-does-software-development-cost?-how-do-you-charge?\'>Our pricing has always been transparent. We charge our customers on a ‘Time & Material’ basis which makes the costs predictable as there are known rates for each specialist, from developer to PM. This ensures great control over budget and provides the required level of flexibility as the projects’ scope can be easily corrected on the go. Thus, in the end, together we deliver a product that truly solves end-customers’ needs.</a> "}},{"@type":"Question","name":"How can I control my project budget? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-can-i-control-my-project-budget?\'>You will have full control over your budget with our detailed monthly invoice. Weekly and daily reports cover the team’s contribution to your project in addition to individual performance reports that tell you what each of the specialists you hired has accomplished. Thus, with all information in your hands, the right adjustments in priorities of cost control factors can be implemented.</a>  "}},{"@type":"Question","name":"How do you ensure security for confidential information? Do you work under NDA?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-do-you-ensure-security-for-confidential-information?-do-you-work-under-nda?\'>Mad Devs always works under the NDA of our own, however, if you have a non-disclosure agreement on your side, we can consider your contract, too. Please read more about work under NDA in the corresponding section of our website: https://maddevs.io/nda/</a>"}},{"@type":"Question","name":"How do you mitigate the risks related to intellectual property ownership?","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#how-do-you-mitigate-the-risks-related-to-intellectual-property-ownership?\'>Intellectual Property is wholly owned by you and your company.  After you sign a contract with us, you will become the owner of the repository, the project environment, Slack, hosting, and etc. The team only manages this and adjusts the processes in accordance with the regulations of the company. You have these accesses from the very beginning of the project, but it is important to remember that according to the contract you become a full owner only after paying for all the hours worked by the team.</a> "}},{"@type":"Question","name":"What if my question is not answered on this page? ","acceptedAnswer":{"@type":"Answer","text":"<a href=\'https://maddevs.io/faq/#what-if-my-question-is-not-answered-on-this-page?\'>Please don’t hesitate to contact us directly with any questions you may have. You have a number of options to use: Live chat Direct mail to our Head of Delivery Management Tamara Mun via tamaramun@maddevs.io. Contact form. Phone Call via +44 20 3984 8555. Text message via Facebook Messenger, Telegram, Whatsapp, or WeChat.</a>"}}]}',
  },
  gdpr: {
    title: 'Mad Devs GDPR Compliance',
    description: 'Mad Devs is committed to complying with the data protection and privacy rules in the EU General Data Protection Regulation (GDPR).',
    url: 'https://maddevs.io/gdpr/',
  },
  nda: {
    title: 'Mad Devs: Work Under NDA',
    description: 'Signing an NDA has been a standard practice at Mad Devs for each employee on the first day of work: we understand the importance of confidentiality in our clients\' projects.',
    url: 'https://maddevs.io/nda/',
  },
  privacy: {
    title: 'Mad Devs Privacy Policy',
    description: 'Mad Devs Privacy Policy: Website Acceptable Use Terms. We respect your privacy and are committed to protecting your personal information.',
    url: 'https://maddevs.io/privacy/',
  },
  services: {
    title: 'Custom Software Development Services | Mad Devs',
    description:
      'We deliver software engineering and mobile app development services, DevOps and IT consulting services to businesses of any size.',
    url: 'https://maddevs.io/services/',
    image: 'https://maddevs.io/sw-development.png',
  },
  caseStudies: {
    title: 'Solid Software Solutions and Case Studies by Mad Devs',
    description: 'Discover how Mad Devs helps Clutch, RociFi, GoDee, Lido, and many other world-class brands and startups with their growth and maintenance.',
    url: 'https://maddevs.io/case-studies/',
    jsonLd: '{"@context": "http://www.schema.org", "@type": "WebPage", "name": "Mad Devs Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.", "address": {"@type": "PostalAddress", "streetAddress": "27 Old Gloucester Street", "addressLocality": "London", "addressRegion": "UK", "postalCode": "WC1N3AX"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
    image: 'https://maddevs.io/case-studies.png',
  },
  godee: {
    title: 'Mad Devs Case Study: GoDee - Convenient Shuttle Bus Service',
    description:
      'Case Study Shuttle Bus Service. Read GoDee’s story on building a public transportation app for passengers and drivers and a monitoring system for admins in Vietnam.',
    url: 'https://maddevs.io/case-studies/godee/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "breadcrumb": "Projects > Case Studies > Transportation Solutions", "name": "Mad Devs Case Study: GoDee - Convenient Shuttle Bus Service", "description": "Case Study Shuttle Bus Service. Read GoDee’s story on building a public transportation app for passengers and drivers and a monitoring system for admins in Vietnam.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group LTD"}}',
  },
  nambaFood: {
    title: 'Mad Devs Case Study: Namba Food Top Delivery Service',
    description:
      'FoodTech Case Study. How to make a delivery app from scratch? Read Namba Food’s story of developing a custom software top delivery service in Central Asia.',
    url: 'https://maddevs.io/case-studies/namba-food/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "breadcrumb": "Projects > Case Studies > FoodTech Solutions", "name": "Mad Devs Case Study: Namba Food Top Delivery Service", "description": "FoodTech Case Study. How to make a delivery app from scratch? Read Namba Food’s story of developing a custom software top delivery service in Central Asia.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group LTD"}}',
  },
  sirJohnMonashCentre: {
    title: 'Mad Devs Case Study: Sir John Monash Centre',
    description:
      'BYOD Case Study. Read how Mad Devs enhanced and developed new features for the Sir John Monash Centre’s software, mobile applications, and technological debt.',
    url: 'https://maddevs.io/case-studies/sir-john-monash-centre/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "breadcrumb": "Projects > Case Studies > BYOD Solutions", "name": "Mad Devs Case Study: Sir John Monash Centre", "description": "BYOD Case Study. Read how Mad Devs enhanced and developed new features for the Sir John Monash Centre’s software, mobile applications, and technological debt.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group LTD"}}',
  },
  yourcast: {
    title: 'Mad Devs Case Study: YourcastTV - online video streaming platform',
    description: 'OTT-like streaming platform case study. Read how Mad Devs developed an online video streaming service for isolated groups of people feeling homesick.',
    url: 'https://maddevs.io/case-studies/yourcast/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: YourcastTV - online video streaming platform", "description": "OTT-like streaming platform case study. Read how Mad Devs developed an online video streaming service for isolated groups of people feeling homesick.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group LTD"}}',
  },
  veeqo: {
    title: 'Mad Devs Case Study: Veeqo an inventory management platform for e-commerce',
    description: 'Infrastructure Case Study: How to optimize and reduce infrastructure costs? Read Veeqo’s story of optimizing the costs along with improving the system’s performance.',
    url: 'https://maddevs.io/case-studies/veeqo/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Veeqo an Inventory Management Platform for E-commerce", "description": "Infrastructure Case Study: How to optimize and reduce infrastructure costs? Read Veeqo’s story of optimizing the costs along with improving the system’s performance.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  r4tcaWebApplication: {
    title: 'Mad Devs Case Study: the International Trade Centre (ITC)',
    description: 'Digital Transformation Case Study: How to implement digital transformation? Read an ITC\'s story of improving the reports and the coaches\' coordination with a convenient web app.',
    url: 'https://maddevs.io/case-studies/R4TCA-web-application/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: the International Trade Centre (ITC)", "description": "Digital Transformation Case Study: How to implement digital transformation? Read an ITC\'s story of improving the reports and the coaches\' coordination with a convenient web app.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  openSource: {
    title: 'Open Source Projects | Mad Devs',
    description: 'Discover how Mad Devs open-source projects and boilerplate solutions help the community to make development productive and faster.',
    url: 'https://maddevs.io/open-source/',
  },
  ebook: {
    title: 'Software Industry Ebooks | Mad Devs Insights',
    description: 'How to build a successful product? Read Mad Devs Ebooks to understand the key aspects of software and mobile app development.',
    url: 'https://maddevs.io/ebooks/pricing-strategies/',
  },
  peklo: {
    title: 'Mad Devs Case Study: Peklo Tool Keyword Grouping Software',
    description: 'AdTech Case Study: How to build a keyword grouping tool? Read Peklo Tool\'s story of preparing keywords groups to launch effective ads in Google and Yandex.',
    url: 'https://maddevs.io/case-studies/peklo/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Peklo Tool Keyword Grouping Software", "description": "AdTech Case Study: How to build a keyword grouping tool? Read Peklo Tool\'s story of preparing keywords groups to launch effective ads in Google and Yandex.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  citycam: {
    title: 'Mad Devs Case Study: Real-Time Traffic Monitoring System for Cities',
    description: 'IoT Case Study: How to monitor traffic in real-time? Read CityCam\'s story of real-time traffic monitoring, which makes transportation safer and faster.',
    url: 'https://maddevs.io/case-studies/citycam/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Real-Time Traffic Monitoring System for Cities", "description": "IoT Case Study: How to monitor traffic in real-time? Read CityCam\'s story of real-time traffic monitoring, which makes transportation safer and faster.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  clutch: {
    title: 'Mad Devs Case Study: Clutch - the leading B2B ratings and reviews platform',
    description: 'B2B Service Review Platform Case Study: How to adapt the B2B platform to increasing numbers of users? Read Clutch\'s story about implementing cutting-edge technology solutions to the platform\'s growth.',
    url: 'https://maddevs.io/case-studies/clutch/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Clutch - the leading B2B ratings and reviews platform", "description": "B2B Service Review Platform Case Study: How to adapt the B2B platform to increasing numbers of users? Read Clutch\'s story about implementing cutting-edge technology solutions to the platform\'s growth.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  nambaTaxi: {
    title: 'Mad Devs Case Study: Namba Taxi - Leading Taxi Service in Bishkek',
    description:
      'Transportation Industry Case Study: How to develop software for taxi services from scratch? Read Namba Taxi\'s story of creating a taxi app to revolutionise the way people move around in a modern city.',
    url: 'https://maddevs.io/case-studies/namba-taxi/',
    jsonLd: '{"@context": "https://schema.org", "@type": "Article", "headline": "DevSecOps Case Study: Enhancing GuardRails Continuous Security Verification Platform", "alternativeHeadline": "This article also about a security application maintenance", "image":"https://d6xkme6dcvajw.cloudfront.net/images/Cases/guardrails/png/guardrails-banner.png", "author": "Anna Petrova", "editor": "Emir Sabyrkulov", "genre": "IT", "keywords": "devsecops, devsecops tools, devsecops process, devsecops processes, devsecops model, devsecops lifecycle, agile devsecops", "wordcount": "2400", "publisher": { "@type": "Organization", "name": "Mad Devs Group LTD", "logo": { "@type": "ImageObject", "url": "https://maddevs.io/Open-Graph.png" } }, "url": "https://maddevs.io/insights/blog/", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://maddevs.io/insights/blog//" }, "datePublished": "2022-01-31", "dateCreated": "2022-01-30", "dateModified": "2022-01-31", "description": "DevSecOps Platform Optimization Case Study: How to optimize a security application? Read GuardRails\' story of enhancing the security solution & reducing database responses from 2 seconds to 30 milliseconds.", "articleBody": "Critical vulnerabilities can cost you a lot if they are not detected before your IT project goes to production. The security industry has to adjust to the challenges of cloud-first deployment and continuous security monitoring and testing. This is the niche that GuardRails fills, offering automated vulnerability scanning for code as part of a standard development process built under the DevSecOps approach. The Story Behind the Project By the time the Mad Devs experts got involved in the project, GuardRails had already had a prototype up and running. After the installation, the app could scan code looking for its vulnerabilities. Once a security issue was detected, the app created a pull request (PR) comment in the repository so that the user could review the scan report. Having only a PR with a short lifespan, the user lacked information about the security problems and could not track them. So the customer’s top priority was to improve the usability of the product by making it more functional and user-friendly. Initially, the GuardRails app was an open-source GitHub solution. Integrating with other Version Control Systems (VCSs) was important for acquiring new users. In addition, it was necessary to optimize the overall app performance, that was, to speed up continuous security monitoring and testing, increase the accuracy of vulnerability detection, and improve the stability of the app. By maximising the app’s potential, GuardRails wanted to take their product to a new level. This would allow for raising funds and thus increasing the product’s business value to a greater degree. Project Issues and How We Resolved Them Lack of user-friendly reports: Mad Devs developed the security reporting dashboard and API that allowed users to track the history of scans and reports. Slow security checks blocking pull requests: We have changed the project’s technology stack to unlock pull requests faster after the checks. Lack of integrations with hosting services/git providers: The GitHub integration was ready by 50%, we completed the remaining part. We also added the GitLab integration and the one for BitBucket (now alpha version stage). False positives occurred at vulnerability detection: Slow security checks blocking pull requestsWe expanded the number of open source libraries under the hood for a better quality of results."}',
  },

  guardrails: {
    title: 'DevSecOps Case Study: Enhancing GuardRails Continuous Security Verification Platform',
    description:
      'DevSecOps Platform Optimization Case Study: How to optimize a security application? Read GuardRails\' story of enhancing the security solution & reducing database responses from 2 seconds to 30 milliseconds.',
    url: 'https://maddevs.io/case-studies/guardrails/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "breadcrumb": "Projects > Case Studies > Transportation Solutions", "name": "Mad Devs Case Study: Namba Taxi - Leading Taxi Service in Bishkek", "description": "Transportation Industry Case Study: How to develop software for taxi services from scratch? Read Namba Taxi\'s story of creating a taxi app to revolutionise the way people move around in a modern city.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group LTD"}}',
  },
  bandpay: {
    title: 'Mad Devs Case Study: Bandpay - Payment Management Solution for Freelancers and Small Businesses',
    description:
      'FinTech Case Study: Why freelancers don\'t receive payment on time, and how to avoid it? Read Bandpay\'s stories of creating a milestone-based platform to manage the payments process for freelancers.',
    url: 'https://maddevs.io/case-studies/bandpay/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Bandpay - Payment Management Solution for Freelancers and Small Businesses", "description": "FinTech Case Study: Why freelancers don\'t receive payment on time, and how to avoid it? Read Bandpay\'s stories of creating a milestone-based platform to manage the payments process for freelancers.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  lido: {
    title: 'Mad Devs Case Study: Lido - the Leading DeFi Staking Platform',
    description:
      'Blockchain Technology Case Study: How to secure staking for the Defi platform? Read how Mad Devs helped Lido to improve their product and simplify and secure staking for users\' digital assets.',
    url: 'https://maddevs.io/case-studies/lido/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Lido - the Leading DeFi Staking Platform", "description": "Blockchain Technology Case Study: How to secure staking for the Defi platform? Read how Mad Devs helped Lido to improve their product and simplify and secure staking for users\' digital assets.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  ourPhilosophy: {
    title: 'Mad Devs\' Philosophy - Our Vision, Mission, Principles and Values',
    description: 'Discover how our mission, values, principles and vision help us provide quality solutions to leading technology companies and innovative startups worldwide.',
    url: 'https://maddevs.io/our-philosophy/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs\' Philosophy - Our Vision, Mission, Principles and Values", "description": "Discover how our mission, values, principles and vision help us provide quality solutions to leading technology companies and innovative startups worldwide.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  megauni: {
    title: 'Mad Devs Case Study: MegaUni - E-Learning Platform for Universities',
    description: 'EdTech Case Study: How to build an online learning platform? Discover how Mad Devs made a customized education platform to connect universities with students in Vietnam.',
    url: 'https://maddevs.io/case-studies/megauni/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: MegaUni - E-Learning Platform for Universities", "description": "EdTech Case Study: How to build an online learning platform? Discover how Mad Devs made a customized education platform to connect universities with students in Vietnam.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  bilimapp: {
    title: 'Mad Devs Case Study: Bilim App - Women Health Monitoring App',
    description: 'FemTech Case Study: How to improve women\'s health tracking app? Read how Mad Devs helps the Bilim app to improve and maintain women\'s period and cycle tracking app.',
    url: 'https://maddevs.io/case-studies/bilimapp/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Bilim App - Women Health Monitoring App", "description": "FemTech Case Study: How to improve women\'s health tracking app? Read how Mad Devs helps the Bilim app to improve and maintain women\'s period and cycle tracking app.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  rocifi: {
    title: 'DeFi Case Study: RociFi - Under-Collateralized Credit Protocol on Polygon',
    description: 'How to develop a reliable and efficient cryptocurrency credit scoring model? Find out how Mad Devs assisted RociFi in developing and launching DeFi\'s under-collateralized credit protocol on the Polygon network.',
    url: 'https://maddevs.io/case-studies/rocifi/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "DeFi Case Study: RociFi - Under-Collateralized Credit Protocol on Polygon", "description": "How to develop a reliable and efficient cryptocurrency credit scoring model? Find out how Mad Devs assisted RociFi in developing and launching DeFi\'s under-collateralized credit protocol on the Polygon network.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  blog: {
    url: 'https://maddevs.io/blog/',
  },
  tonyPage: {
    title: 'Tony Fedorenko - Head of Delivery Department',
    description: 'Tony practices the agile approach to project delivery combined with the Theory of Constraints (ToC) tooling and Business Modeling practices to achieve sustainable results such as increased profits, decreased staff turnover and burnout rates, and shortened project delivery time.',
    url: 'https://maddevs.io/team/tony-fedorenko/',
  },
  digest: {
    title: 'IT and Business Digests from Mad Devs',
    description: 'Insightful articles on the best custom software development and project management practices. Quality content curated by Mad Devs editors.',
    url: 'https://maddevs.io/digest/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "IT and Business Digests from Mad Devs", "description": "Insightful articles on the best custom software development and project management practices. Quality content curated by Mad Devs editors.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  ...deliveryModelsSeo,
  ...tagPagesSeo,
  mobileBanking: {
    title: 'Fintech Case Study - Mobile Banking App Optimization and Maintenance',
    description: 'Learn how we\'ve streamlined the development process, improved existing features, and increased the transparency of remote team communication when developing a mobile banking app.',
    url: 'https://maddevs.io/case-studies/mobile-banking/',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Fintech Case Study - Mobile Banking App Optimization and Maintenance", "description": "Learn how we\'ve streamlined the development process, improved existing features, and increased the transparency of remote team communication when developing a mobile banking app.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
  transparency: {
    title: 'Building Trust Through Transparency: Our Customer Relationship Philosophy',
    description: 'Explore our transparency-focused approach, ensuring project longevity and client satisfaction, and learn how it improves project outcomes and workflow efficiency.',
    jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Building Trust Through Transparency: Our Customer Relationship Philosophy", "description": "Explore our transparency-focused approach, ensuring project longevity and client satisfaction, and learn how it improves project outcomes and workflow efficiency.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  },
}

export const getMetadata = (key: string, title = '', description = '') => ({
  ...meta[key],
  jsonLd: [{
    type: 'application/ld+json',
    innerHTML: meta[key]?.jsonLd || generateDefaultSchema(meta[key]?.title || title, meta[key]?.description || description),
  }],
})

export const buildHead = ({
  title,
  description,
  url,
  jsonLd,
  image = 'https://maddevs.io/Open-Graph.png',
  metaTitle,
  noindex = false,
}: BuildHeadData, scripts: any[] = [], links: any[] = []) => ({
  title,
  meta: [
    { name: 'description', content: description },
    // Facebook / Open Graph
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Custom Software Development Company' },
    { property: 'og:title', content: metaTitle || title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    // Twitter / Twitter Card
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:text:title', content: metaTitle || title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image:src', content: image },
    { property: 'twitter:url', content: url },
    noindex && { name: 'robots', content: 'noindex, nofollow' },
  ].filter(Boolean),
  link: [
    {
      rel: 'canonical',
      href: url,
    },
    ...links,
  ],
  script: jsonLd
    ? [
      ...jsonLd,
      ...scripts,
    ]
    : [...scripts],
})

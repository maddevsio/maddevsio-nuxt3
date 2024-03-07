export const deliveryModels: { [key: string]: any } = {
  'staff-augmentation': {
    className: 'staff-augmentation',
    animationName: 'teamMembers',
    animationSpeed: 0.7,
    startAnimationOnScreenPercent: 20,
    title: 'Reach time-to-market targets and release deadlines faster with <span>augmented staff members.</span>',
    subtitle: 'Best suited for customers with an existing team that has well-established development processes and knowledge management.',
    optimalModelFor: [
      'Organizations that need to add specialists to facilitate reaching time-to-market targets.',
      'Companies that need to determine the best fit for the team and identify uncertainty in the scope of work.',
      'Companies that cope with urgent tasks to meet release deadlines.',
      'Organizations that want to avoid inefficient in-house hiring processes.',
    ],
    process: {
      title: 'Staff augmentation interaction process',
      steps: [
        {
          title: 'Define specialists’ competencies',
          content: [
            'Together with project stakeholders, we define the required competencies for specialists (hard and soft skills, expertise level) by assessing the product’s technological stack and collecting further information about the scope of work (tasks to be performed, product features).',
          ],
        },
        {
          title: 'Team composition',
          content: [
            'We propose a team composition with a cost-effective combination of seniority levels. Our approach to team headcount is based on our 15+ years of experience in custom software development.',
            'Each selected candidate is available for additional interviews to ensure that the competence requirements are met.',
            'In cases of absence of exact criteria, our senior developers or principals can assess the current team performance and suggest optimization options.',
          ],
        },
        {
          title: 'Approval',
          content: [
            'When the candidates are approved, they adopt the customer’s corporate processes and fully integrate as valued team members.',
            'Our internal monitoring processes continuously collect feedback on augmented staff performance and develop action plans for changes if needed.',
          ],
        },
        {
          title: 'Extras',
          content: [
            'Augmented staff motivation, training, and additional vacation and sick leave expenses are the sole responsibility of Mad Devs.',
          ],
        },
      ],
    },
  },
  'dedicated-team': {
    className: 'dedicated-team',
    animationName: 'dedicated',
    animationSpeed: 1,
    startAnimationOnScreenPercent: 77,
    title: 'Hire a <span>dedicated project-based team</span> to meet all IT-related needs and bring your product idea to life.',
    subtitle: '',
    optimalModelFor: [
      'Businesses that need to raise funds and quickly move to the next stage.',
      'Companies that plan to reorganize their internal IT departments to optimize costs and performance.',
      'Existing businesses that need teams with specific expertise to develop new products.',
      'Companies that don’t have expertise in hiring and supervising big IT teams.',
    ],
    process: {
      title: 'Dedicated project-based team interaction process',
      steps: [
        {
          title: 'Product requirements',
          content: [
            'Together with project stakeholders, our SWOT team prepares a product requirements document (PRD).',
            'We analyse the PRD and propose solutions and a team composition to deliver the project or one of its modules.',
          ],
        },
        {
          title: 'Planning',
          content: [
            'Jointly, we build a product roadmap and continuously adjust the vision and priorities during the project.',
            'We ensure compliance with all organizational processes and value-driven development.',
          ],
        },
        {
          title: 'Monitoring and evaluation',
          content: [
            'Development teams don’t hide behind project managers, and we welcome customers to directly communicate with each team member.',
            'The entire development team communicates directly with the customer to effectively align with business goals and get actively involved in the product itself.',
            'Our managers internally monitor the whole team’s performance and ensure that it delivers the expected results.',
            'We provide detailed weekly and monthly reports and arrange demo calls on the completed work.',
            'To improve collaboration, our team can travel to your organization.',
          ],
        },
      ],
    },
  },
  'temp-to-hire': {
    className: 'temp-to-hire',
    animationName: 'team',
    animationSpeed: 0.85,
    startAnimationOnScreenPercent: 60,
    title: '<span>Temp to hire</span> allows businesses to safely expand the hiring geography and diversity with minimal onboarding and recruiting risks.',
    subtitle: '',
    optimalModelFor: [
      'Businesses whose offshore development is hindered by legal restrictions and corporate rules.',
      'Companies that face long and difficult employee recruitment and onboarding processes due to governmental and corporate regulations.',
      'Organizations that want to safely expand the hiring geography and diversify their corporate culture.',
    ],
    process: {
      title: 'Temp to hire interaction process',
      steps: [
        {
          title: 'Define specialists’ competencies',
          content: [
            'Our SWOT team collects the specialist requirements (hard and soft skills, expertise level) and information about the project (tasks to be performed, product features).',
          ],
        },
        {
          title: 'Approval and onboarding of specialists',
          content: [
            'After an internal check, candidates have an additional interview with the customer.',
            'We onboard approved specialists to fit in the team. They work under the existing organizational processes and the customer’s direct supervision. At this stage, we aim to make the specialist a part of your team.',
            'Additionally, we offer consulting services for developing and integrating organizational and development processes.',
          ],
        },
        {
          title: 'Monitoring and improvement',
          content: [
            'The specialist’s performance is monitored internally through regular sync-up meetings with our tech lead.',
            'Arrangements can be changed and added based on the customer’s and end users’ feedback.',
            'We help specialists adapt to your corporate culture and adopt high standards of professional conduct.',
            'Transparency is achieved by openly stating the specialist’s salary and our management fee.',
            '',
          ],
        },
        {
          title: 'Transition',
          content: [
            'The customer can formally hire the specialist after 6 to 12 months if they fit in the team.',
          ],
        },
        {
          title: 'Extras',
          content: [
            'No flat rate. We fully transfer the specialist to your team.',
          ],
        },
      ],
    },
  },
  'technical-assessment': {
    className: 'technical-assessment',
    animationName: 'technicalAssessment',
    animationSpeed: 0.75,
    startAnimationOnScreenPercent: 60,
    title: '<span>Technical assessment & consulting</span> equip business with unbiased expert assessment to solve technical issues and scaling your business.',
    subtitle: '',
    optimalModelFor: [
      'Organizations looking for an unbiased expert assessment.',
      'Businesses in need to effectively scale up their products.',
      'Businesses in search of new product development directions.',
      'Companies dealing with overwhelming tech issues and technical debt.',
      'Organizations that have had several failed MVP launches.',
      'Business owners that doubt their current teams’ competencies.',
      'Companies facing disappointing performance and ruined relationships with the current IT contractor or in-house team.',
    ],
    process: {
      title: 'Technical assessment & consulting interaction process',
      steps: [
        {
          title: 'Define problems',
          content: [
            'We start the assessment with several interviews with all project stakeholders to better understand the issues and then we suggest workarounds.',
          ],
        },
        {
          title: 'Conduct analysis and work plan',
          content: [
            'Based on the identified issues and the customer’s requests, we decide whether our assessment should cover the complete product or only its critical components.',
            'Our complex assessment involves analysis code, infrastructure, organizational processes, including communications and knowledge management.',
            'We onboard a team of top-notch specialists with 10+ years of experience in the IT industry.',
          ],
        },
        {
          title: 'Offer recommendations',
          content: [
            'At the final stage, the customer receives a 360-degree report on the current project state and recommendations for improvements.',
          ],
        },
        {
          title: 'Extras',
          content: [
            'To ensure implementation of our recommendations and superior execution, we offer additional supervision services.',
          ],
        },
      ],
    },
  },
  'team-supervision': {
    className: 'team-supervision',
    animationName: 'boost',
    animationSpeed: 0.7,
    startAnimationOnScreenPercent: 20,
    title: 'Boost technical team performance with <span>effective team supervision.</span>',
    subtitle: '',
    optimalModelFor: [
      'Managers who don’t have a technical background.',
      'Organizations whose current teams’ competencies don’t grow in proportion to their business needs.',
      'Businesses facing technical challenges due to rapid growth.',
      'Managers experiencing frustration due to a lack of transparency in teams’ development processes and communication.',
      'Businesses whose lack of infrastructure planning and management incurs expenses.',
    ],
    process: {
      title: 'Team supervision interaction process',
      steps: [
        {
          title: 'Define problems',
          content: [
            'A team of top-notch specialists with 10+ years of experience in the IT industry reverse engineer the way development and organizational processes are coordinated and analyse team bottlenecks.',
          ],
        },
        {
          title: 'Conduct analysis and prepare an action plan',
          content: [
            'We devise and present an action plan to overcome the current issues and a detailed justification of the issue background.',
            'The customer receives not only a solution but also detailed guidance and best practices advice to avoid a relapse.',
          ],
        },
        {
          title: 'Action plan execution',
          content: [
            'Our senior expert monitors the action plan implementation and makes necessary adjustments.',
            'Regular meetings between our senior expert and the customer help us adjust the project plans and vision.',
            'We provide monthly reports on completed work and maintain complete transparency in communication.',
          ],
        },
      ],
    },
  },
  'transferring-projects': {
    className: 'transferring-projects',
    animationName: 'transfer',
    animationSpeed: 0.9,
    startAnimationOnScreenPercent: 77,
    title: 'Protect intellectual property while <span>transferring a project</span> to another IT partner.',
    subtitle: 'The main aim of the delivery is to prepare the customer’s project for transfer to another IT team.',
    optimalModelFor: [
      'Companies facing disappointing performance and ruined relationships with the current IT contractor.',
      'Companies whose end results bring no value to their owners or to end users.',
      'Businesses looking to switch software development from in-house to an IT contractor model.',
    ],
    process: {
      title: 'Project transfer interaction process',
      steps: [
        {
          title: 'Step 1',
          content: [
            'A team of top-notch specialists with 10+ years of experience in the IT industry reverse engineer the way development and organizational processes are coordinated and analyse team bottlenecks.',
            'We discuss the existing problems with the customer to be sure that they cannot be solved through supervision of the current team and that project transfer is the only solution.',
          ],
        },
        {
          title: 'Step 2',
          content: [
            'We make sure that the customer is the owner of the project’s intellectual property. We help restore the code in the repository and revise the available technical and business documentation.',
            'Together with the customer, we calculate the project transfer costs, taking into account the estimated time of project takeover by the new team.',
            'We elaborate the statement of work for the new team, i.e. the main objectives to achieve.',
            'We can onboard our own team, or we can help you evaluate other candidates.',
          ],
        },
      ],
    },
  },
}

export const testimonials = [
  {
    text: 'Mad Devs have extensive experience in various industries, which allows them to solve issues quickly and efficiently.',
    author: {
      name: 'Wade Bartlett',
      position: 'Technical Consultant, Sir John Monash Centre',
      image: 'wade',
    },
  },
  {
    text: 'They fully disclose what they’re doing and why they’re doing it.',
    author: {
      name: 'Duc Nguyen',
      position: 'Former CEO, Topica Group',
      image: 'duc',
    },
  },
  {
    text: 'They work as if their own money and success are on the line.',
    author: {
      name: 'Ruslan Karabukaev',
      position: 'Co-Founder, Namba Taxi',
      image: 'ruslan',
    },
  },
  {
    text: 'Our infrastructure is much more resilient and secure.',
    author: {
      name: 'Daniel Vartanov',
      position: 'CTO, Veeqo.com',
      image: 'daniel',
    },
  },
  {
    text: 'I’m most impressed with their technical capacities.',
    author: {
      name: 'Moktar Alqaderi',
      position: 'CEO, Progressay',
      image: 'moktar',
    },
  },
]

export const deliveryModelsSeo = {
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

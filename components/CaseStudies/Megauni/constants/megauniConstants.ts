export const megauniCollab = [
  {
    icon: 'broward-vietnam',
    alt: 'Broward Vietnam',
    animationDelay: 650,
  },
  {
    icon: 'hu-xuan-university',
    alt: 'Phu Xuan University',
    animationDelay: 0,
  },
  {
    icon: 'bk-tp-hcm',
    alt: 'BK TP.HCM',
    animationDelay: 450,
  },
  {
    icon: 'cao-dang-viet-mi',
    alt: 'Cao Dang Viet My',
    animationDelay: 250,
  },
  {
    icon: 'truong-cao-dang-kinh-te',
    alt: 'Truong cao kinh te ky thuat ha noi',
    animationDelay: 850,
  },
  {
    icon: 'equest-the',
    alt: 'Equest: the quest for excellence',
    animationDelay: 1050,
  },
]

export const achievementsList = [
  'Thirty students from one university had begun a new semester by the time the MVP was launched.',
  'On May 16, the platform was implemented, and 100 students from two universities started a new semester on this platform.',
]

export const opportunitiesCards = [
  {
    title: 'Accessibility',
    descriptions: 'Using this platform, students can attend classes from anywhere. Universities, in turn, can access a more extensive network of students because geographic boundaries no longer confine them. Online learning provides students with the flexibility of time and location in their education.',
    icon: 'folder-open',
    folder: 'megauni',
    iconWidth: 53,
    iconHeight: 51,
    animationDelay: 0,
  },
  {
    title: 'Affordability',
    descriptions: 'The E-learning platform allows students to save costs. Online learning reduces student transportation, lunches, and, most significantly, housing costs. Moreover, all course materials are made available online, resulting in an environmentally and economically friendly paperless learning environment.',
    icon: 'wallet',
    folder: 'megauni',
    iconWidth: 53,
    iconHeight: 51,
    animationDelay: 250,
  },
  {
    title: 'Easy navigation',
    descriptions: 'Through the login page, students can quickly access their accounts. They can view the course content and continue their studies on their already started course. The platform allows them to keep track of their progress and assess their growth on their own.',
    icon: 'compass',
    folder: 'megauni',
    iconWidth: 53,
    iconHeight: 51,
    animationDelay: 450,
  },
]

export const mainStagesList = [
  {
    text: 'Setting up basic Open edX features according to the client\'s specification.',
    backgroundColor: 'light-coral',
    textColor: 'white',
    icon: 'users-icon',
  },
  {
    text: 'Integrating with micro-frontend service.',
    backgroundColor: 'begonia',
    textColor: 'white',
    icon: 'react-icon',
  },
  {
    text: 'Integrating Zoom live class, Richer HTML5 Content as H5P.',
    backgroundColor: 'light-carmine-pink',
    textColor: 'white',
    icon: 'zoom-icon',
  },
  {
    text: 'VNPay payment system integration.',
    backgroundColor: 'fire-opal',
    textColor: 'white',
    icon: 'credit-card-icon',
  },
  {
    text: 'Creating and implementing features: organization management, trial period for a course, notification module, favourite courses section, and user support.',
    backgroundColor: 'red-pigment',
    textColor: 'white',
    icon: 'support-icon',
  },
]

export const platformArchList = [
  'The LMS is an LTI tool consumer. Course authors can embed LTI tools to integrate other learning tools into an Open edX course.',
  'Problems can use embedded Python codes to either present the problem or assess the learner’s response. Instructor-written Python codes are executed in a secure environment called CodeJail.',
  'JS Input can be used to integrate JavaScript components.',
  'The OLX (open learning XML) format for courses can be exported and imported.',
]

export const generalProjectList = [
  'Custom notifications (mass mailing if necessary).',
  'Live class notifications (sent before live classes begin).',
  'Notifications to attract inactive users (with which staff can notify students that they have not logged into the platform for a long time).',
]

export const challengeSolutionsMegaUniCards = [
  {
    title: 'Challenge 1',
    description: 'Developing a flexible platform that can easily change over time makes it more attractive for stakeholders, as they are interested in further development. The decision was to build an interactive and modular platform on the Open edX. The Mad Devs team set up an instance of the Open edX product and customized it according to client requirements. However, a good, user-friendly educational platform requires much more. According to the plan, the platform should offer the following features: user support, live chat, notifications, H5P videos, and live classes. To implement the necessary features, the team encountered several challenges. Thus, we contributed our own code to the previously written code by the Open edX team and adapted it to the final product.',
    icon: {
      name: '',
      sizes: {
        width: 0,
        height: 0,
      },
      alt: '',
    },
    backgroundColor: 'silver',
    titleTag: 'h4',
  },
  {
    title: 'Solution',
    description: 'As the project was based on the Open edX open-source code, we understood that most features required by the client are not part of the Open edX basic setup. For this purpose, we have engaged two Open edX consultants to provide help when needed. In addition, we solve our problems with the help of the Open edX community and detailed Open edX documentation, so we find solutions and easily integrate the needed features into the platform.',
    icon: {
      name: 'openedx-icon',
      sizes: {
        width: 272,
        height: 87,
      },
      alt: 'Open edX',
    },
    backgroundColor: 'blue-light',
    titleTag: 'h5',
  },
  {
    title: 'Challenge 2',
    description: 'To make the platform fully functional and easy to use, it was necessary to connect it to an online payment system to make online purchases. To do this, we needed to use a system that works in Vietnam, so that local students can also use it to make payments.',
    icon: {
      name: 'icon-wallet',
      sizes: {
        width: 151.61,
        height: 151.61,
      },
      alt: 'Challenge 2 Icon',
    },
    backgroundColor: 'silver',
    titleTag: 'h4',
  },
  {
    title: 'Solution',
    description: 'Previously, Mad Devs worked with Vietnamese projects, where the team integrated the VNPay payment system. Therefore, Mad Devs proposed to stakeholders to integrate VNPay into the MegaUni platform and received a positive response. VNPay is a financial service company that provides electronic payment solutions in Vietnam. For students, it became possible to pay by scanning a QR code via mobile banking with domestic and international credit cards.',
    icon: {
      name: '',
      sizes: {
        width: 0,
        height: 0,
      },
      alt: '',
    },
    backgroundColor: 'blue-light',
    titleTag: 'h5',
  },
]

export const techStackMegauni = [
  {
    name: 'open-edx',
    alt: 'Open edX',
    imgAlt: 'Open edX',
  },
  {
    name: 'python',
    alt: 'Python',
    imgAlt: 'Python',
  },
  {
    name: 'django-new',
    alt: 'Django',
    imgAlt: 'Django',
  },
  {
    name: 'js',
    alt: 'JavaScript',
    imgAlt: 'JavaScript',
  },
  {
    name: 'react',
    alt: 'React',
    imgAlt: 'React',
  },
  {
    name: 'html-new',
    alt: 'HTML',
    imgAlt: 'HTML',
  },
  {
    name: 'css-new',
    alt: 'CSS',
    imgAlt: 'CSS',
  },
  {
    name: 'sentry-dark',
    alt: 'Sentry',
    imgAlt: 'Sentry',
  },
  {
    name: 'grafana-new',
    alt: 'Grafana',
    imgAlt: 'Grafana',
  },
  {
    name: 'mongo-db',
    alt: 'MongoDB',
    imgAlt: 'MongoDB',
  },
  {
    name: 'send-grid',
    alt: 'SendGrid',
    imgAlt: 'SendGrid',
  },
  {
    name: 'aws-new',
    alt: 'AWS',
    imgAlt: 'AWS',
  },
  {
    name: 'celery-new',
    alt: 'Celery',
    imgAlt: 'Celery',
  },
  {
    name: 'docker',
    alt: 'Docker',
    imgAlt: 'Docker',
  },
  {
    name: 'elastic-new',
    alt: 'Elasticsearch',
    imgAlt: 'Elasticsearch',
  },
  {
    name: 'jira-new',
    alt: 'Jira Software',
    imgAlt: 'Jira Software',
  },
  {
    name: 'enji-ai',
    alt: 'Enji.ai',
    imgAlt: 'Enji.ai',
  },
]

export const teamMDMegauni = [
  {
    name: 'Tony Fedorenko',
    position: 'Delivery Manager',
    image: {
      file: 'anatoliy-fedorenko',
    },
  },
  {
    name: 'Ruslan Kasymov',
    position: 'Project Manager',
    image: {
      file: 'kasymov',
    },
  },
  {
    name: 'Cholpon Dobulbekova',
    position: 'Project Manager',
    image: {
      file: 'cholpon-dobulbekova',
    },
  },
  {
    name: 'Tologon Omurzakov',
    position: 'Backend Developer',
    image: {
      file: 'tologon-omurzakov',
    },
  },
  {
    name: 'Belek Abylov',
    position: 'Tech Lead',
    image: {
      file: 'belek-abylov',
    },
  },
  {
    name: 'Baktybek Baiserkeev',
    position: 'Backend Developer',
    image: {
      file: 'baktybek-baiserkeev',
    },
  },
  {
    name: 'Aitmyrza Omuraliev',
    position: 'Backend Developer',
    image: {
      file: 'aitmyrza-omuraliev',
    },
  },
  {
    name: 'Emir Sabyrkulov',
    position: 'Frontend Developer',
    image: {
      file: 'emir-sabyrkulov',
    },
  },
  {
    name: 'Anton Grushkin',
    position: 'Frontend Developer',
    image: {
      file: 'anton-grushkin',
    },
  },
  {
    name: 'Vitaly Vagin',
    position: 'DevOps Engineer',
    image: {
      file: 'vitaly-vagin',
    },
  },
  {
    name: 'Sergey Shturkin',
    position: 'Tech Lead',
    image: {
      file: 'sergey-shturkin',
    },
  },
  {
    name: 'Alexander Sobolev',
    position: 'Open edX Backend Consultant',
    image: {
      file: 'alexander-sobolev',
    },
  },
  {
    name: 'Dmitrii Khalezin',
    position: 'DevOps Engineer',
    image: {
      file: 'dmitrii-khalezin',
    },
  },
]

export const teamMegauni = [
  {
    name: 'Dung Vũ Thị Thuỳ',
    position: 'Head of Product',
    image: {
      file: 'dung-vu-thi-thuy',
    },
  },
  {
    name: 'Ngọc Ngô Thái Minh',
    position: 'Business Analyst',
    image: {
      file: 'ngoc-ngo-thai-minh',
    },
  },
  {
    name: 'Lê Ngọc Ngà',
    position: 'Tech Lead',
    image: {
      file: 'le-ngoc-nga',
    },
  },
]

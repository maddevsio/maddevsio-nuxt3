export const googlePlayLogoBilim = {
  caseName: 'bilimapp',
  extension: 'svg',
  name: 'google-play-icon',
  width: 70,
  height: 70,
}

export const googlePlayBg = {
  caseName: 'bilimapp',
  extension: 'svg',
  name: 'google-play-bg',
  mobile: 'google-play-bg-mobile',
}

export const challengesBilimList = [
  {
    text: 'Needing to develop new code, documentation, infrastructure, and feature updates to set up a proper project',
    backgroundColor: 'lavender',
    textColor: 'white',
    icon: 'gear-icon',
    background: '#C07BCD',
  },
  {
    text: 'Building a roadmap to turn stakeholders’ desires into tasks, create detailed technical tasks, and plan the execution of said tasks',
    backgroundColor: 'purple-plum',
    textColor: 'white',
    icon: 'ux-road-map-icon',
    background: '#A857B7',
  },
  {
    text: 'Needing new features and updates',
    backgroundColor: 'heliotrope-magenta',
    textColor: 'white',
    icon: 'sync-icon',
    background: '#9C1BB2',
  },
]

export const turningPlanList = [
  {
    text: 'Update & upgrade the application backend. ',
    backgroundColor: 'silver',
    textColor: 'black',
    icon: 'data-backup-icon',
  },
  {
    text: 'Create opportunities for content management, storing user data, collecting end-user feedback, and recovering user data.',
    backgroundColor: 'silver',
    textColor: 'black',
    icon: 'start-icon',
  },
  {
    text: 'Improve existing features to detect and fix existing defects.',
    backgroundColor: 'silver',
    textColor: 'black',
    icon: 'wrench-hammer-icon',
  },
  {
    text: 'Develop a set of new requested features.',
    backgroundColor: 'silver',
    textColor: 'black',
    icon: 'code-optimization-icon',
  },
]

export const infrastructureList = [
  'The team separated staging and production. Therefore, it became possible to implement and test changes or updates on stage before going live. This was made possible with Firebase Test Lab.',
  'The team changed the project infrastructure from an outdated hosting provider that was no longer available to a newly created infrastructure based on Digital Ocean droplets.',
  'The team conducted load testing to ensure that the application did not slow down due to increases in simultaneous server requests and to make infrastructure costs proportional.',
]

export const backendDevList = [
  'A Python Django Framework that allows project managers to have a ready-made admin panel to manage information and statistics and configure the application’s out-of-the-box features.',
  'The anonymous storage of users’ history using the Python Django Framework. Moreover, women can recover their data from any device after authorization.',
  'An advanced content editor. Since the Bilim app contains an extensive blog and the backend did not support a number of tools for text editing, we enabled WYSIWYG (What You See Is What You Get) editors so managers can easily update the content of the blog posts and adjust styling and paragraphs.',
]

export const backendDevAfterImageList = [
  'A Postgres database system used for data storage.',
  'The setup of Google Analytics tools so admins can analyze data about users’ activity, engagement with articles and blog posts, click history, and account deletion. ',
  'Management of surveys. Admins can collect users’ opinions of the application by sending surveys. Admins can create, draft, postpone, and send surveys to users through the backend. The user receives a notification on their home screen after the admin sends the survey.',
]

export const mobileDevList = [
  'Data synchronization is enabled. The previous version of the application was already running, but all data were stored locally, meaning that, unfortunately, data could be lost. After creating a new backend, it became possible to <strong>synchronize the data</strong>. The user can use the application without logging in, and the backend data will synchronize after authorization.',
  'Users can use the application in two ways: as an authorized user or as a guest. To <strong>keep users anonymous</strong>, they can use the application without authorization. Alternatively, they can use other authorization methods without the need to fill in any personal information. Each user is assigned a unique ID.',
  'The Firebase Crashlytics tool sends crash alerts to the tech support team. This tool automatically collects, analyzes, and organizes application crash reports, allowing developers to fix bugs promptly.',
]

export const techStackBilim = [
  {
    name: 'kotlin',
    alt: 'Kotlin',
    imgAlt: 'Kotlin',
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
    name: 'firebase',
    alt: 'Google Firebase',
    imgAlt: 'Google Firebase',
  },
  {
    name: 'locust',
    alt: 'Locust',
    imgAlt: 'Locust',
  },
  {
    name: 'digital-ocean',
    alt: 'Digital Ocean',
    imgAlt: 'Digital Ocean',
  },
  {
    name: 'gitlab',
    alt: 'Gitlab',
    imgAlt: 'Gitlab',
  },
  {
    name: 'jira-new',
    alt: 'JIRA',
    imgAlt: 'JIRA',
  },
  {
    name: 'uptime-robot-new',
    alt: 'Uptime Robot',
    imgAlt: 'Uptime Robot',
  },
  {
    name: 'postgresql-new',
    alt: 'PostgreSQL',
    imgAlt: 'PostgreSQL',
  },
  {
    name: 'enji-ai-without-name',
    alt: 'Enji.ai',
    imgAlt: 'Enji.ai',
  },
  {
    name: 'google-analytics',
    alt: 'Google Analytics',
    imgAlt: 'Google Analytics',
  },
]

export const teamMDBilim = [
  {
    name: 'Tony Fedorenko',
    position: 'Head of Delivery',
    image: {
      file: 'anatoliy-fedorenko',
    },
  },
  {
    name: 'Zhazgul Zuridinova',
    position: 'Project Manager',
    image: {
      file: 'zhazgul-zuridinova',
    },
  },
  {
    name: 'Faride Bagirova',
    position: 'Android Developer',
    image: {
      file: 'faride-bagirova',
    },
  },
  {
    name: 'Ivan Karpus',
    position: 'Android Tech Lead',
    image: {
      file: 'ivan-karpus',
    },
  },
  {
    name: 'Ilya Teremasov',
    position: 'Backend Developer ',
    image: {
      file: 'ilya-teremasov',
    },
  },
  {
    name: 'Vlada Arevkova',
    position: 'UI/UX designer',
    image: {
      file: 'vlada-arevkova',
    },
  },
]

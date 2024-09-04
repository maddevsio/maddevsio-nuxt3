export const mobileBankingHeaderOverlayBackground = 'rgba(44, 56, 135, 0.6) linear-gradient(180deg, rgba(44, 56, 135, 0.46) 10.65%, rgba(45, 57, 135, 0) 52.02%, #38438D 99.53%)'
export const mobileBankingVideoLinks = {
  fallbackPath: 'images/Cases/mobile-banking/webp/banner-fallback.webp',
  videoPath: 'videos/banner-mobile-banking.mp4',
}

export const mobileBankingAchievementsCards = [
  {
    icon: {
      url: 'images/Cases/mobile-banking/svg/achievement-star.svg',
      alt: 'Achievement star',
      dimensions: {
        width: 60,
        height: 60,
      },
    },
    title: '4.9',
    description: 'Stars from users in App Markets',
    animationDelay: 0,
  },
  {
    icon: {
      url: 'images/Cases/mobile-banking/svg/achievement-forbes.svg',
      alt: 'Forbes',
      dimensions: {
        width: 115,
        height: 60,
      },
    },
    title: 'Top 10',
    description: 'Finance Apps of 2021 Rated by Forbes Kazahstan',
    animationDelay: 200,
  },
  {
    icon: {
      url: 'images/Cases/mobile-banking/svg/achievement-top.svg',
      alt: 'Top 10',
      dimensions: {
        width: 60,
        height: 60,
      },
    },
    title: 'Top 10',
    description: 'Apps of 2021 Rated by Sensortower',
    animationDelay: 400,
  },
]

export const mobileBankingAchievementsFullCard = {
  title: '1M+',
  description: 'Top 10 Finance Apps of 2021',
  marketsIcon: [
    {
      url: 'images/Cases/mobile-banking/svg/apple-store.svg',
      alt: 'Apple Store',
      dimensions: {
        width: 52,
        height: 46,
      },
    },
    {
      url: 'images/Cases/mobile-banking/svg/play-market.svg',
      alt: 'Google Play Store',
      dimensions: {
        width: 42,
        height: 46,
      },
    },
  ],
}

export const mobileBankingFeatures = [
  {
    title: 'Hassle-Free Transfers',
    descriptions: 'Transfer money between accounts only knowing the client\'s phone number. Also, money transfers between the cards of the other Kazakhstan banks using a bank account number.',
    image: {
      width: 397,
      height: 318,
      folder: 'mobile-banking',
      file: 'features-banking',
      alt: 'Hassle-Free Transfers',
    },
    colors: {
      card: 'cosmic-cobalt',
      title: 'white',
      descriptions: 'white',
    },
  },
  {
    title: 'Effortless Management of Accounts and Cards',
    descriptions: 'Block/unblock payment cards, set a PIN code, activate a payment card, and change an account for a multi-currency card in a few clicks. Review balances and blocked amounts, details, and statements.',
    colors: {
      card: 'han-blue',
      title: 'white',
      descriptions: 'white',
    },
  },
  {
    title: 'Quick Loans and Deposits',
    descriptions: 'Get a loan right in the app with the detailed payment schedule and monthly credit installment automatically. Also, clients can replenish and partial withdrawal from a deposit and accrue a return on it.',
    colors: {
      card: 'lighter-coral',
      title: 'white',
      descriptions: 'white',
    },
  },
  {
    title: 'All Bills and Payments in One Place',
    descriptions: 'Top up phone balance, pay for TV and Internet bills. Payment for security services and integration with government institutions like Ashyq to keep COVID-19 status right in the app.',
    colors: {
      card: 'cornflower-blue',
      title: 'white',
      descriptions: 'white',
    },
  },
]

export const projectIssuesCards = [
  {
    descriptions:
      'Setting up Jira and Confluence, writing tasks and onboarding documentation, helping with team communication, and resolving internal team blockers.',
    icon: 'setting-up-icon',
    folder: 'mobile-banking',
    iconWidth: 51,
    iconHeight: 51,
  },
  {
    descriptions: 'Migrating to microservices, dividing services using Golang, updating Java libraries, fixing authorization problems, and integrating with bank services.',
    icon: 'microservices-icon',
    folder: 'mobile-banking',
    iconWidth: 51,
    iconHeight: 51,
  },
  {
    descriptions: 'Improving manual testing, writing autotests, setting up CI/CD pipelines, deploying mobile development, developing a new admin panel, and adding metrics.',
    icon: 'manual-testing-icon',
    folder: 'mobile-banking',
    iconWidth: 51,
    iconHeight: 51,
  },
  {
    descriptions: 'Integrating Ashyq and Visa Alias services, helping with user story development, developing ILI and ELI functionalities, and adding an online chat feature.',
    icon: 'visa-services',
    folder: 'mobile-banking',
    iconWidth: 51,
    iconHeight: 51,
  },
  {
    descriptions:
      'Complete refactoring of the design library, developing a dark theme, updating the design in product details, and synchronizing with iOS and Android app versions.',
    icon: 'design-library',
    folder: 'mobile-banking',
    iconWidth: 51,
    iconHeight: 51,
  },
]

export const improveManagementList = [
  {
    text: 'Delivered the importance of detailed task descriptions and work logs.',
    backgroundColor: 'violet-blue',
    textColor: 'white',
    icon: 'delivered-icon',
    background: '#7380D1',
  },
  {
    text: 'Choosed the right types of tasks, added tasks acceptance points.',
    backgroundColor: 'toolbox-blue',
    textColor: 'white',
    icon: 'types-of-tasks-icon',
    background: '#6571C0',
  },
  {
    text: 'Deleted unused and added necessary labels and additional fields in tasks.',
    backgroundColor: 'liberty-blue',
    textColor: 'white',
    icon: 'fields-tasks-icon',
    background: '#5864B4',
  },
  {
    text: 'Attached screenshots of errors and described the steps to reproduce errors.',
    backgroundColor: 'chinese-blue',
    textColor: 'white',
    icon: 'errors',
    background: '#4450A0',
  },
  {
    text: 'Registered incidents in the form of tasks, collected statistics on fixed errors.',
    backgroundColor: 'chinese-blue-darker',
    textColor: 'white',
    icon: 'bugs-icon',
    background: '#3D499A',
  },
  {
    text: 'Set task priorities and distribution between team members and different teams.',
    backgroundColor: 'blue-pigment',
    textColor: 'white',
    icon: 'set-task-icon',
    background: '#354298',
  },
]

export const devOpsAndQAList = [
  {
    text: 'Implemented remote work for DevOps specialists and supported their workflow.',
    backgroundColor: 'tulip',
    textColor: 'white',
    icon: 'devops-workflow-icon',
    background: '#FF898E',
  },
  {
    text: 'Scheduled their tasks, created, displayed, and managed them in Jira.',
    backgroundColor: 'begonia-darker',
    textColor: 'white',
    icon: 'scheduled-tasks-icon',
    background: '#FF7177',
  },
  {
    text: 'Conducted DevOps daily links and weekly meetings for workflow transparency.',
    backgroundColor: 'pastel-red',
    textColor: 'white',
    icon: 'devops-daily-links-icon',
    background: '#FF5D64',
  },
  {
    text: 'Delivered the need for an architect and helped with sourcing and onboarding.',
    backgroundColor: 'sunburnt-cyclops',
    textColor: 'white',
    icon: 'delivered-architect-icon',
    background: '#FF4A52',
  },
  {
    text: 'Implemented technical onboarding process for other newcomers and mentored new QA specialists.',
    backgroundColor: 'coral-red',
    textColor: 'white',
    icon: 'onboarding-icon',
    background: '#FF343D',
  },
]

export const bankLoansData = {
  mainTitle: 'Bank Loans & Other Services',
  mainTitleBig: false,
  mainTitleTag: 'h4',
  mainTitleDescriptions: [
    'Going to a bank branch is often necessary to become a client. And even as a client, it is still necessary for many operations, such as applying for a loan. A bank agent does many operations manually, communicating with potential clients, checking their documents, and processing applications from current clients. So we helped improve the existing functionality allowing potential clients to access the bank\'s products directly from the application, and making interaction with this functionality more effective for bank employees.',
  ],

  solutionDescriptions: [
    'Our team improved the features, including phone authorization, scoring procedures, document uploading, automatic creation of PDF print forms, and digital signature. Also, we developed an interface for bank employees to analyze and display client data to approve and reject an application or send it for more detailed review.',
  ],

  withResultsBlock: true,
  quoteText: 'Now people can become bank customers and even apply for a loan right in the app. This has significantly reduced the bank\'s employees\' workload and continues attracting many new customers. The improvement and launch of this feature brought us a 15% increase in new customers.',
  quoteAuthor: 'Mobile Banking Product Owner',
}

export const visaAliasData = {
  mainTitle: 'Visa Alias',
  mainTitleDescriptions: [
    'Sharing your bank card information that must be avoided even if the bank has the highest degree of security. However, if you can avoid it when paying using Apple Pay, Google Pay, or paying for many services directly from the bank app, how about not sharing the bank card details to get a direct transfer of funds from another person? We did one more thing for that.',
  ],

  solutionDescriptions: [
    'We added a new type of transfer, which allows sending money from one Visa card to another, knowing only the phone number. To make it possible, we integrated the service Visa Alias and implemented the binding of Visa cards. Also, the user can choose which card the funds come to when using the given phone number and change it in a few clicks. So bank clients got an easier and faster way to transfer funds between visa cards and ultimately better security and card information protection.',
  ],
}

export const vipVisaData = {
  mainTitle: 'VIP Visa',
  mainTitleDescriptions: [
    'Visa is one of the most popular and advanced payment systems, providing extensive opportunities for banks worldwide. This can be a great cause for encouraging clients who preferentially use it. So we developed the VIP Visa feature, which gives perks for those using Visa cards.',
  ],

  solutionDescriptions: [
    'We developed a tutorial, a screen with detailed information on exclusive perks and how to use them. Also, we implemented a screen with a rewards calendar where the clients will see if they are following the spending plan and that the perks will be active.',
  ],

  withResultsBlock: true,
  quoteText: 'This way the bank gained loyal clients who happily accepted new, more profitable opportunities from using Visa.',
  quoteAuthor: 'Gaukhar Taspolatova - Delivery Manager, Mad Devs',
}

export const storiesUserActionsData = {
  mainTitle: 'Stories on User Actions',
  mainTitleDescriptions: [
    'Promoting additional products requires interaction with already popular channels or developing your own, which takes up a lot of resources. Also, even an interested user may simply not want to make unnecessary jumps between pages, and even appropriately directed resources may not always work. Because of this, we helped to improve the promotion feature to spread info about new bank products directly in the app and take a more personalized approach to advertising.',
  ],
  solutionDescriptions: [
    'We helped improve the user stories feature based on events and allocated it in a separate module independent of application iterations. So bank got an advanced customizable feature for its product promotion right in the application, and clients got personalized advertising based on their actions.',
  ],
  haveSolutionList: true,
  solutionList: [
    'Since data is constantly updated, we developed the service that sent the necessary conditions in the JSON Logic format, allowing us to specify the show\'s logic through the service rather than through an application.',
    'The logic sent out usually contained the events that were worth responding to. The app implemented an event hook, which checked all of the user\'s actions against the required portrait.',
    'The stories shown have deep links, which makes users easier navigate to the desired product if they are interested.',
    'To prevent the repetition of stories, we started saving the data about the shows to the application\'s database. ',
    'The service also sent the data on the maximum number of impressions. It is implemented as a web page where the bank manager can set the required user profile, stories, and transitions inside the application.',
    'We wrote additional tests for this feature and implemented multiple security layers to ensure that user data is fully protected.',
  ],
}

export const ILIAndELIData = {
  mainTitle: 'ILI and ELI',
  mainTitleDescriptions: [
    'Typically, large insurance and investment services are offered by individual companies that specialize in this area and require documentation or even in-person visits. While the bank already keeps your documents, knows your income, and has all the necessary data, it may be redundant or even insecure about providing for other companies. Wouldn\'t it be great if your bank could offer similar services directly in the application without too much hassle?',
  ],
  solutionDescriptions: [
    'We developed two additional products available through the banking application, namely Investment Life Insurance and Endowment Life Insurance. They were implemented as a few additional users flows, and the data are taken from Firebase real-time database.',
    'We used quite a few scripts to speed things up. The Generamba library and a Ruby script were used to create new blank screens on the VIPER architecture, and the templates were styled in Liquid (from Shopify). This script creates, assembles, and connects VIPER components, basic tests, and necessary screens. The Phrase service was also used for the tests. A Gradle-based script, which could generate both iOS (.swift) and Android (.kt) files, was used to generate the events.',
  ],
  withResultsBlock: true,
  quoteText: 'As a result, the bank got a whole sector of new customers and part of the insurance and investment market, and users got two amazing products right in the app, with secure and seamless transactions for them. And our team was happy to see such significant bank achievements and to realize our involvement in them.',
  quoteAuthor: 'Gaukhar Taspolatova - Delivery Manager, Mad Devs',
}

export const ashyqCovidData = {
  mainTitle: 'Ashyq COVID-19 Status',
  mainTitleDescriptions: [
    'At the pandemic peaked, COVID status was needed to visit any place, from government offices to restaurants. Updating your COVID status on the official state website and downloading a confirmation document or a separate application for one function is not the best solution. So it was a high priority to close such a request as quickly as possible, which we did directly in the mobile banking app.',
  ],
  solutionDescriptions: [
    'To handle such inconvenience, we developed a feature for displaying the Covid status of the bank clients. We implemented integration with Ashyq service, the state system for monitoring the health status of individuals (sick/not sick, vaccinated/not vaccinated). And we added fixing the entrance to public places/institutions due to COVID restrictions.',
  ],
  withResultsBlock: true,
  quoteText: 'Everyone was shocked by the pandemic and the limitations it brought. The feature of receiving the certificate directly in the app maintained our clients\' confidence and helped make their lives easier and safer in such difficult times.',
  quoteAuthor: 'Mobile Banking Team',
}

export const darkThemeData = {
  mainTitle: 'Dark Theme',
  mainTitleDescriptions: [
    'A dark theme is a must-have feature for any contemporary app. But for most teams, it\'s easier to implement it in a new product iteration rather than adding it to the current one because it takes the whole interface. It was even more complex in our case because the design library required complete refactoring. Without fixing this, designers would have to manually draw layouts for each new app screen\'s light and dark theme. Developers would need to do the double work of adding a light and dark theme to the app, and QA would need to double-check functionality separately in both cases. All of these would multiply the amount of unnecessary work.',
  ],
  solutionDescriptions: [
    'In collaboration with the bank’s design department, our design and development teams completely refactored the design library, unified UI elements, and developed the dark theme for all screens and alerts.',
  ],
  haveSolutionList: true,
  solutionList: [
    'Redesigned the library of elements that are convenient for both designers and developers to work with in the future.',
    'Completely refactored colors for the light and dark theme.',
    'Developed a dark theme for the application itself and adapted the splash screen for the dark theme.',
  ],
  withResultsBlock: true,
  quoteText: 'Essentially, designers, developers, and QA have reduced their work several times, getting a usable and clear base for the design of new features. And clients got the needed feature in a quality implementation that consistently works on all screens and notifications.',
  quoteAuthor: 'Mobile Banking Product Owner',
}

export const authorizationData = {
  mainTitle: 'Authorization',
  mainTitleDescriptions: [
    'We discovered a problem with authorization, which periodically occurred with a large flow of new users. And this was not just an inconvenience but brought the risk of losing user data, which required a solution in the shortest possible time with many unknowns.',
    'That challenge was also greatly complicated because there was no documentation of this feature and no direct specialists among the bank employees. This made it difficult to simulate an error to test the theories and possible solutions. And the process was also delayed by additional communication with previously used services. We have fixed the recurring problems with the authorization in the application, making safe user data and providing the system for its monitoring.',
  ],
  solutionDescriptions: [
    'The core problem was with IAM (Identity and Access Management) because of outdated and unsupported Keycloak and Infinispan and their default settings.',
  ],
  haveSolutionList: true,
  solutionList: [
    'Studied Keycloak and Infinispan, compatibility of their versions, configs, caches and dependencies; Studied migration from current versions to new ones so we won\'t lose user data in production',
    'Launched the new versions of Keycloak and Infinispan on other servers, using older ones for developers and testers to work in a testing environment',
    'Switched between new and old versions to test the functionality of the latest versions and tested the authorization',
    'Repeated all this in production, then updated the java adapter for authorization to the new version',
    'Added monitoring of development and production systems and passed it to the hotfixes department, making authorization in one tab',
    'Writing documentation at all stages, implementing and maintaining it in Confluence',
  ],
}

export const inAppChatData = {
  mainTitle: 'InApp Chat',
  mainTitleDescriptions: [
    'Despite the quality design and rich functionality, many users still want personal advice or detailed information, not going to the FAQ section. That\'s why we developed the InApp Chat.',
  ],
  solutionDescriptions: [
    'InApp Chat is only one click away for the customers. It lets users immediately get the answers they need and contact the bank operator.',
  ],
  haveSolutionList: true,
  solutionList: [
    'The bank\'s clients do not need to call and wait in line. The operator knows everything they need about the client and their products.',
    'Chat allows clients to send screenshots and voice messages and avoid switching to other messengers.',
    'Chat can work asynchronously. The client can close and open at any moment and view the history of messages.',
  ],
}

export const infrastructureList = [
  'Helped get virtual servers up and running with VMware.',
  'Prepared the ansible playbooks to run MongoDB, RabbitMQ, and Redis.',
  'Prepared servers for the payment hub, got it up and running, and kept it running stably.',
  'Helped with configuring Keycloak + Infinispan clusters, which improved the reliability of the authentication system.',
  'Improved infrastructure monitoring system, metrics collection, and visualization for each environment with Grafana and Prometheus stack.',
  'Helped integrate, set up, and configure the APM system to get detailed information about the performance of individual applications.',
  'Participated in preparing the CI/CD for each application for quality code delivery to all environments and assisted in the CD launch with ArgoCD.',
  'Helped launch a new ticketing system for the interaction of departments and teams within the bank, thereby greatly simplifying communications and speeding up processes.',
  'In cooperation with QA, we prepared environments for launching automated tests for Android and iOS with Jenkins support.',
]

export const techStackMobileBanking = [
  {
    name: 'react',
    alt: 'React',
    imgAlt: 'React',
  },
  {
    name: 'swift',
    alt: 'Swift',
    imgAlt: 'Swift',
  },
  {
    name: 'kotlin',
    alt: 'Kotlin',
    imgAlt: 'Kotlin',
  },
  {
    name: 'go',
    alt: 'Go',
    imgAlt: 'Go',
  },
  {
    name: 'java',
    alt: 'Java',
    imgAlt: 'Java',
  },
  {
    name: 'ruby',
    alt: 'Ruby',
    imgAlt: 'Ruby',
  },
  {
    name: 'firebase',
    alt: 'Firebase',
    imgAlt: 'Firebase',
  },
  {
    name: 'jenkins',
    alt: 'Jenkins',
    imgAlt: 'Jenkins',
  },
  {
    name: 'mssql',
    alt: 'MSSQL',
    imgAlt: 'MSSQL',
  },
  {
    name: 'phrase',
    alt: 'Phrase',
    imgAlt: 'Phrase',
  },
  {
    name: 'generamba',
    alt: 'Generamba',
    imgAlt: 'Generamba',
  },
  {
    name: 'nginx',
    alt: 'NGINX',
    imgAlt: 'NGINX',
  },
  {
    name: 'keycloak',
    alt: 'Keycloak',
    imgAlt: 'Keycloak',
  },
  {
    name: 'infinispan',
    alt: 'Infinispan',
    imgAlt: 'Infinispan',
  },
  {
    name: 'rabbit-mq',
    alt: 'RabbitMQ',
    imgAlt: 'RabbitMQ',
  },
  {
    name: 'redis',
    alt: 'Redis',
    imgAlt: 'Redis',
  },
]

export const teamMobileBanking = [
  {
    name: 'Gaukhar Taspolatova',
    position: 'Delivery Manager',
    image: {
      file: 'gaukhar-taspolatova',
    },
  },
  {
    name: 'Vladimir Olessov',
    position: 'Delivery Manager',
    image: {
      file: 'vladimir-olessov',
    },
  },
  {
    name: 'Zukhra Alieva',
    position: 'Project Manager',
    image: {
      file: 'zukhra-alieva',
    },
  },
  {
    name: 'Pavel Zverev',
    position: 'Tech Architect',
    image: {
      file: 'pavel-zverev',
    },
  },
  {
    name: 'Aleksandr Krivov',
    position: 'Art Director',
    image: {
      file: 'aleksandr-krivov',
    },
  },
  {
    name: 'Aibek Nogoev',
    position: 'Mobile Developer',
    image: {
      file: 'aibek-nogoev',
    },
  },
  {
    name: 'Oleg Ten',
    position: 'iOS Developer',
    image: {
      file: 'oleg-ten',
    },
  },
  {
    name: 'Pavel Pushkarev',
    position: 'iOS Developer',
    image: {
      file: 'pavel-pushkarev',
    },
  },
  {
    name: 'Dastan Mamyrov',
    position: 'iOS Developer',
    image: {
      file: 'dastan-mamyrov',
    },
  },
  {
    name: 'Aisalkyn Tashmatova',
    position: 'Android Developer',
    image: {
      file: 'aisalkyn-tashmatova',
    },
  },
  {
    name: 'Rustom Kulbatyrov',
    position: 'Android Developer',
    image: {
      file: 'kulbatyrov',
    },
  },
  {
    name: 'Evgeniy Fedyanin',
    position: 'Frontend Developer',
    image: {
      file: 'evgeniy-fedyanin',
    },
  },
  {
    name: 'Dmitrii Khalezin',
    position: 'DevOps Engineer',
    image: {
      file: 'dmitrii-khalezin',
    },
  },
  {
    name: 'Kirill Kulikov',
    position: 'DevOps Engineer',
    image: {
      file: 'kirill-kulikov',
    },
  },
  {
    name: 'Marat Bediev',
    position: 'DevOps Engineer',
    image: {
      file: 'marat-bediev',
    },
  },
  {
    name: 'Bekmyrza Dzhekishev',
    position: 'Project Manager',
    image: {
      file: 'bekmyrza-dzhekishev',
    },
  },
  {
    name: 'Maksim Pankov',
    position: 'Project Manager',
    image: {
      file: 'maksim-pankov',
    },
  },
  {
    name: 'Bibigul Beisenova',
    position: 'Business Analytic',
    image: {
      file: 'bibigul-beisenova',
    },
  },
  {
    name: 'Alexey Krivov',
    position: 'Backend Developer',
    image: {
      file: 'alexey-krivov',
    },
  },
  {
    name: 'Belek Abylov',
    position: 'Backend Developer',
    image: {
      file: 'belek-abylov',
    },
  },
  {
    name: 'Meder Akkozov',
    position: 'Backend Developer',
    image: {
      file: 'meder-akkozov',
    },
  },
  {
    name: 'Oleg Katkov',
    position: 'Backend Developer',
    image: {
      file: 'oleg-katkov',
    },
  },
  {
    name: 'Altynay Baitulakova',
    position: 'Backend Developer',
    image: {
      file: 'altynai-baitulakova',
    },
  },
  {
    name: 'Gleb Khegay',
    position: 'Quality Assurance Engineer',
    image: {
      file: 'gleb-khegay',
    },
  },
  {
    name: 'Artem Didenko',
    position: 'Quality Assurance Engineer',
    image: {
      file: 'artem-didenko',
    },
  },
  {
    name: 'Nursultan Tagoev',
    position: 'Digital Analytic',
    image: {
      file: 'nursultan-tagoev',
    },
  },
  {
    name: 'Nikolay Ispandiyarov',
    position: 'Frontend Developer',
    image: {
      file: 'nikolay-ispandiyarov',
    },
  },
  {
    name: 'Artem Trofimenko',
    position: 'Designer',
    image: {
      file: 'artem-trofimenko',
    },
  },
  {
    name: 'Andrey Ashurov',
    position: 'Android Developer',
    image: {
      file: 'andrey-ashurov',
    },
  },
  {
    name: 'Vyacheslav Razumeenko',
    position: 'iOS Developer',
    image: {
      file: 'vyacheslav-razumeenko',
    },
  },
]

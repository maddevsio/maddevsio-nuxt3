export const statisticsRocifi = [
  {
    numberText: '22,524',
    number: 22524,
    name: 'NFCS',
    textBeforeNumber: '',
    withoutSpaceBeforeNumber: true,
    withoutSpaceAfterNumber: false,
    numberColor: '#FFFFFF',
    title: 'Minted',
    icon: {
      name: 'minted-icon',
      width: '60px',
      height: '60px',
      folder: 'rocifi',
      type: 'svg',
    },
  },
  {
    numberText: '100,331',
    number: 100331,
    name: '',
    textBeforeNumber: '$',
    withoutSpaceBeforeNumber: true,
    withoutSpaceAfterNumber: true,
    numberColor: '#FFFFFF',
    title: 'total value locked',
    icon: {
      name: 'total-value-icon',
      width: '60px',
      height: '60px',
      folder: 'rocifi',
      type: 'svg',
    },
  },
  {
    numberText: '3,446',
    number: 3466,
    name: 'LOANS',
    textBeforeNumber: '',
    withoutSpaceBeforeNumber: true,
    withoutSpaceAfterNumber: false,
    numberColor: '#FFFFFF',
    title: 'issued',
    icon: {
      name: 'issued-icon',
      width: '60px',
      height: '60px',
      folder: 'rocifi',
      type: 'svg',
    },
  },
]

export const leadersLogos = [
  {
    logo: {
      name: 'icon-arrington',
      alt: 'Arrington Capital',
      width: 110,
      height: 36,
    },
    delay: 0,
  },
  {
    logo: {
      name: 'icon-goldenTree',
      alt: 'GoldenTree asset management',
      width: 110,
      height: 25,
    },
    delay: 250,
  },
  {
    logo: {
      name: 'icon-blockVenture',
      alt: 'BlockVenture',
      width: 110,
      height: 21,
    },
    delay: 500,
  },
  {
    logo: {
      name: 'icon-nexo',
      alt: 'Nexo',
      width: 110,
      height: 27,
    },
    delay: 750,
  },
  {
    logo: {
      name: 'icon-capital',
      alt: 'LD Capital',
      width: 110,
      height: 24,
    },
    delay: 900,
  },
  {
    logo: {
      name: 'icon-signum-capital',
      alt: 'Signum Capital',
      width: 103,
      height: 42,
    },
    delay: 1050,
  },
  {
    logo: {
      name: 'icon-scc-invest',
      alt: 'SCC Investments',
      width: 75,
      height: 75,
    },
    delay: 1200,
  },
  {
    logo: {
      name: 'icon-skynet',
      alt: 'Skynet Trading',
      width: 107,
      height: 41,
    },
    delay: 1450,
  },
]

export const opportunitiesList = [
  {
    text: 'Provides appropriate anonymity.',
    background: '#F4F4F4',
  },
  {
    text: 'Does not require any clients\' personal information.',
    background: '#F4F4F4',
  },
  {
    text: 'Has a unique credit scoring mechanism.',
    background: '#F4F4F4',
  },
  {
    text: 'Allows lenders to invest in loan pools and receive high and stable annual returns.',
    background: '#F4F4F4',
  },
]

export const whyeRocifiTurnedCards = [
  {
    title: 'Goal 1:',
    icon: 'graph-icon',
    alt: 'Goal 1',
    folder: 'rocifi',
    description:
      'Testing the architecture and infrastructure. Optimization of the architecture and infrastructure to ensure their stable and secure operation.',
    delay: 0,
  },
  {
    title: 'Goal 2:',
    icon: 'docs-icon',
    alt: 'Goal 2',
    folder: 'rocifi',
    description:
      'Preparing the virtual chain infrastructure and preparing the protocol for deployment. Testing the correctness of the smart contracts and automating administrative functions.',
    delay: 450,
  },
]

export const rocifiChallengePhaseOne = [
  {
    id: 'challenge-phase-one',
    title: 'Challenge',
    descriptions: ['Initially, RociFi wanted to implement an extensive list of features into the platform, many of which were overly complex in the project architecture. In turn, this required complicating the infrastructure, which might slow down the speed and accuracy of the overall solution.', 'We needed to examine and optimize the architecture to ensure smooth implementation and efficient operation of all features required for the platform.'],
    solutionList: [],
    image: {
      name: 'challenge-phase-one',
      width: 396,
      height: 136.64,
    },
    backgroundColor: 'lavender-indigo',
    background: '#8B44E1',
    textColor: 'white',
    delay: 0,
  },
  {
    id: 'solution-phase-one',
    title: 'Solutions',
    descriptions: [],
    solutionList: [
      'Review the project, adopt new instruments, and refocus on the importance of tests and automation.',
      'Develop infrastructure around the blockchain.',
      'Build bots and set up processes that help to carry out administrative functions.',
      'Develop an automated off-chain solution to check debt due dates for expiration and help with further routines of handling liquidations.',
      'Implement different automation & CI elements to the pipelines (such as deployment scripts, protocol checklists, etc.)',
    ],
    image: {
      name: '',
      width: 0,
      height: 0,
    },
    backgroundColor: 'jungle-green',
    background: '#21A190',
    textColor: 'white',
    delay: 250,
  },
]

export const phaseOneResults = [
  'Built a knowledge base reflecting the entire architecture, infrastructure, and features of the project using Jira / Confluence, HackMD, and Miro.',
  'Developed smart contracts and defined their addresses to external sources and upgradable components for them using Solidity, Chainlink, and OpenZeppelin.',
  'Developed environments and service bots for smart contracts, and their easiest compilation, administration, and CI/CD automation using JavaScript / TypeScript and HardHat.',
]

export const rocifiChallengePhaseTwo = [
  {
    id: 'challenge-phase-two',
    title: 'Challenge',
    descriptions: ['Tests were not configured and automated properly, so they did not fully cover the testing of smart contracts.'],
    solutionList: [],
    image: {
      name: 'challenge-phase-two',
      width: 396,
      height: 136.64,
    },
    backgroundColor: 'lavender-indigo',
    background: '#8B44E1',
    textColor: 'white',
    delay: 0,
  },
  {
    id: 'solution-phase-two',
    title: 'Solutions',
    descriptions: [],
    solutionList: [
      'Help with test automation.',
      'Cover code base with unit & integration tests.',
      'Fix bugs & implement needed enhancements found by the tests.',
      'Check protocol for vulnerabilities and security problems.',
    ],
    image: {
      name: '',
      width: 0,
      height: 0,
    },
    backgroundColor: 'jungle-green',
    background: '#21A190',
    textColor: 'white',
    delay: 250,
  },
]

export const phaseTwoResults = [
  'Unit & integration tests were automated and improved coverage of smart contracts to an acceptable level.',
  'Fixed bugs and vulnerabilities due to unit & integration tests using Chai.',
  'Checked protocol implementation for security issues using Slither and assisted with a bug bounty program.',
]

export const rocifiChallengePhaseThree = [
  {
    id: 'challenge-phase-three',
    title: 'Challenge',
    descriptions: ['Ensure the protocol\'s correct configuration and observability. Build the protocol infrastructure to automate its operations.'],
    solutionList: [],
    image: {
      name: 'challenge-phase-three',
      width: 396,
      height: 136.64,
    },
    backgroundColor: 'lavender-indigo',
    background: '#8B44E1',
    textColor: 'white',
    delay: 0,
  },
  {
    id: 'solution-phase-three',
    title: 'Solutions',
    descriptions: [],
    solutionList: [
      'Plan the protocol architecture, its components, their decomposition, and define areas of responsibility.',
      'Assist with protocol deployment to Ethereum testnet and Polygon mainnet.',
      'Automate the work of administrative functions, such as the liquidation of funds upon the expiration of the limitation period for debts.',
    ],
    image: {
      name: '',
      width: 0,
      height: 0,
    },
    backgroundColor: 'jungle-green',
    background: '#21A190',
    textColor: 'white',
    delay: 250,
  },
]

export const phaseThreeResults = [
  'Designed protocol architecture with Jira / Confluence, HackMD, and Miro.',
  'Ensured protocol and its components were properly adapted for Polygon instead of Ethereum.',
  'Used HardHat scripts and PolygonScan to deploy the final product and check its state.',
  'Provided means to access node APIs using Infura and Alchemy.',
  'Introduced integrations to observe contract events emitted by user interactions.',
]

export const rocifiProjectDevList = [
  {
    text: 'Architecture planning',
    backgroundColor: 'lavender-floral',
    textColor: 'white',
    icon: 'architecture-icon',
    background: '#AF6EFD',
  },
  {
    text: 'Protocol development',
    backgroundColor: 'lavender-indigo-light',
    textColor: 'white',
    icon: 'protocol-icon',
    background: '#AA6EFD',
  },
  {
    text: 'Test implementation',
    backgroundColor: 'heliotrope-approx',
    textColor: 'white',
    icon: 'test-imp-icon',
    background: '#A26FFC',
  },
  {
    text: 'Bug fixes',
    backgroundColor: 'indigo-purple',
    textColor: 'white',
    icon: 'bug-fixes-icon',
    background: '#9B62FF',
  },
  {
    text: 'Infrastructure preparation',
    backgroundColor: 'thick-purple',
    textColor: 'white',
    icon: 'infra-icon',
    background: '#8B44E1',
  },
  {
    text: 'Internal smart contract security check',
    backgroundColor: 'stargate-shimmer',
    textColor: 'white',
    icon: 'sec-check-icon',
    background: '#7373FC',
  },
  {
    text: 'External security audits and addressing auditor\'s feedback',
    backgroundColor: 'byzantine-night-blue',
    textColor: 'white',
    icon: 'feedback-icon',
    background: '#6873FB',
  },
  {
    text: 'Deployment',
    backgroundColor: 'ntsc-blue',
    textColor: 'white',
    icon: 'deployment-icon',
    background: '#4876FB',
  },
  {
    text: 'Bug bounty',
    backgroundColor: 'lightish-blue',
    textColor: 'white',
    icon: 'bug-bounty-icon',
    background: '#4071FF',
  },
  {
    text: 'Observe protocol functioning and long-term maintenance',
    backgroundColor: 'gentian-flower',
    textColor: 'white',
    icon: 'observe-icon',
    background: '#396CFF',
  },
]

export const techStackRocifi = [
  {
    name: 'jira-new',
    alt: 'Jira',
    imgAlt: 'Jira',
  },
  {
    name: 'confluence',
    alt: 'Confluence',
    imgAlt: 'Confluence',
  },
  {
    name: 'hackmd',
    alt: 'HackMD',
    imgAlt: 'HackMD',
  },
  {
    name: 'miro',
    alt: 'Miro',
    imgAlt: 'Miro',
  },
  {
    name: 'hardhat',
    alt: 'HardHat',
    imgAlt: 'HardHat',
  },
  {
    name: 'solidity',
    alt: 'Solidity',
    imgAlt: 'Solidity',
  },
  {
    name: 'open-zeppelin',
    alt: 'OpenZeppelin',
    imgAlt: 'OpenZeppelin',
  },
  {
    name: 'chainlink',
    alt: 'ChainLink',
    imgAlt: 'ChainLink',
  },
  {
    name: 'js',
    alt: 'JavaScript',
    imgAlt: 'JavaScript',
  },
  {
    name: 'typescript',
    alt: 'TypeScript',
    imgAlt: 'TypeScript',
  },
  {
    name: 'infura',
    alt: 'Infura',
    imgAlt: 'Infura',
  },
  {
    name: 'alchemy',
    alt: 'Alchemy',
    imgAlt: 'Alchemy',
  },
  {
    name: 'polygon',
    alt: 'Polygon',
    imgAlt: 'Polygon',
  },
  {
    name: 'etherscan',
    alt: 'EtherScan',
    imgAlt: 'EtherScan',
  },
]

export const teamMDRocifi = [
  {
    name: 'Tony Fedorenko',
    position: 'Delivery Manager',
    image: {
      file: 'anatoliy-fedorenko',
    },
  },
  {
    name: 'Pavel Zverev',
    position: 'Tech Lead and Advisor',
    image: {
      file: 'pavel-zverev',
    },
  },
  {
    name: 'Anton Kozlov',
    position: 'Blockchain Developer',
    image: {
      file: 'anton-kozlov',
    },
  },
  {
    name: 'Zukhra Alieva',
    position: 'Delivery Manager',
    image: {
      file: 'zukhra-alieva',
    },
  },
  {
    name: 'Alexey Dementiev',
    position: 'Support Infrastructure Developer',
    image: {
      file: 'alexey-dementiev',
    },
  },
]

export const teamRocifi = [
  {
    name: 'Pavel Emdin (Filippov)',
    position: 'CTO',
    image: {
      file: 'pavel-emdin',
    },
  },
  {
    name: 'Konstantin Zagaynov',
    position: 'CPO',
    image: {
      file: 'konstantin-zagaynov',
    },
  },
  {
    name: 'Denis Gareev',
    position: 'Quality Assurance Engineer',
    image: {
      file: 'denis-gareev',
    },
  },
  {
    name: 'Carson Case',
    position: 'Lead Blockchain Developer (v1)',
    image: {
      file: 'carson-case',
    },
  },
  {
    name: 'Konstantin Samarin',
    position: 'Blockchain Developer',
    image: {
      file: 'konstantin-samarin',
    },
  },
  {
    name: 'Alexander Belokon',
    position: 'Frontend Developer',
    image: {
      file: 'alexander-belokon',
    },
  },
]

export const rocifiGlossary = [
  '<strong>Annual percentage yield (APY)</strong> is the real rate of return earned on an investment, taking into account the effect of compounding interest.',
  '<strong>Automated market makers (AMM)</strong> are smart contracts in DeFi that let anyone create a market by depositing cryptocurrency into a liquidity pool.',
  '<strong>Zero-collateral loans</strong> are similar to a revolving line of credit where the borrower only has to pay a liquidity fee on unused capital in their own liquidity pool.',
  '<strong>Undercollateralized</strong> loans enable borrowers to access crypto or fiat assets by providing collateral smaller than the loan\'s value.',
]

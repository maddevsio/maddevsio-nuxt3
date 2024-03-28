import type { Ref } from 'vue'
import axios from 'axios'
import type {
  Industry,
  IWeCreateProjectsForWithMap, WeCreateProjectsForWithMapProps,
} from '~/components/PageBlocks/WeCreateProjectsFor/interfaces/IWeCreateProjectsForWithMap'

export class WeCreateProjectsForWithMap implements IWeCreateProjectsForWithMap {
  screenBreakpoints = {
    tabletMax: 1024,
    mobileMax: 692,
  }

  industries: Industry[] = [
    {
      iconID: 'blockchain-and-crypto',
      text: 'Blockchain and Crypto',
    },
    {
      iconID: 'ecommerce',
      text: 'Ecommerce',
    },
    {
      iconID: 'serverless',
      text: 'Serverless',
    },
    {
      iconID: '',
      text: '',
    },
    {
      iconID: 'transportation',
      text: 'Transportation',
    },
    {
      iconID: 'digital-transformation',
      text: 'Digital transformation',
    },
    {
      iconID: 'cloud-tech',
      text: 'CloudTech',
    },
    {
      iconID: 'ad-tech',
      text: 'AdTech',
    },
    {
      iconID: 'e-learning',
      text: 'E-learning',
    },
    {
      iconID: 'content-streaming',
      text: 'Content Streaming',
    },
    {
      iconID: 'health-tech',
      text: 'HealthTech',
    },
    {
      iconID: 'ed-tech',
      text: 'EdTech',
    },
    {
      iconID: 'iots',
      text: 'IoTs',
    },
    {
      iconID: 'fintech',
      text: 'Fintech',
    },
    {
      iconID: 'byod',
      text: 'BYOD',
    },
    {
      iconID: '',
      text: '',
    },
  ]

  s3MapRoute = '/images/custom/homepage/map.svg'
  s3IconsRoute = 'https://d6xkme6dcvajw.cloudfront.net/images/custom/homepage/we-created-projects-for-icons-sprite.svg'
  currentScreenType = ''
  industriesList: Ref<Industry[][]>
  background: string | null
  svgIconsSprite: Ref<string>

  constructor(props: WeCreateProjectsForWithMapProps) {
    this.industriesList = ref([])
    this.background = setSliceBackground(props.primary.background || 'black')
    this.svgIconsSprite = ref('')
    this.getSVGSprite = this.getSVGSprite.bind(this)
    this.getScreenType = this.getScreenType.bind(this)
    this.prepareList = this.prepareList.bind(this)
    this.spliceIndustryList = this.spliceIndustryList.bind(this)
  }

  async getSVGSprite() {
    const { data } = await axios.create({
      timeout: 10000,
    }).get(this.s3IconsRoute)
    this.svgIconsSprite.value = data
  }

  getScreenType() {
    const currentScreenSize = window.innerWidth
    let newScreenSize = ''
    if (currentScreenSize && currentScreenSize > this.screenBreakpoints.tabletMax) {
      newScreenSize = 'desktop'
    }
    if (currentScreenSize &&
      currentScreenSize <= this.screenBreakpoints.tabletMax &&
      currentScreenSize > this.screenBreakpoints.mobileMax) {
      newScreenSize = 'tablet'
    }
    if (currentScreenSize &&
      currentScreenSize < this.screenBreakpoints.mobileMax) {
      newScreenSize = 'mobile'
    }
    if (newScreenSize !== this.currentScreenType) {
      this.currentScreenType = newScreenSize
      this.prepareList()
    }
  }

  prepareList() {
    switch (this.currentScreenType) {
    case 'desktop':
      this.industriesList.value = this.spliceIndustryList(this.industries, 4) // columns count
      break
    case 'tablet':
      this.industriesList.value = this.spliceIndustryList(this.industries.filter(item => (item.text !== '')), 3) // columns count
      break
    case 'mobile':
      this.industriesList.value = this.spliceIndustryList(this.industries.filter(item => (item.text !== '')), 2) // columns count
      break
    default:
      // eslint-disable-next-line no-console
      console.error('Unable to set count of columns')
    }
  }

  spliceIndustryList(array: Industry[], chunkSize: number) {
    const industry = [...array]
    const result = []
    for (let i = chunkSize; i > 0; i -= 1) {
      result.push(industry.splice(0, Math.ceil(industry.length / i)))
    }
    return result
  }
}

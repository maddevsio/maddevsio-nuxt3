<script setup lang="ts">
import type { PropType } from 'vue'
import type { AnimationItem } from 'lottie-web'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

interface Button {
  label: string
  lottieFrame: number
}

interface GetLinkProps {
  softwareDevelopmentLink: string
  hrPracticesLink: string
  transparentStaffingLink: string
  technicalAuditLink: string
  technicalInfrastructureLink: string
  techMarketingLink: string
  projectDiscoveryLink: string
  customSoftwareLink: string
}

interface ButtonsGroup {
  firstGroupButtonText: string
  secondGroupButtonText: string
  thirdGroupButtonText: string
}

interface CollectedData extends ButtonsGroup, GetLinkProps {
  icons: string[]
  buttons: Button[]
}

const props = defineProps({
  collectedData: {
    type: Object as PropType<CollectedData>,
    default: () => ({}),
  },
})

const lottieTextElemIds = [
  '#optimization_hoverarea',
  '#transfer_hoverarea',
  '#customsoftdev_hoverarea',
  '#techaudit_hoverarea',
  '#softdevproc_hoverarea',
  '#techmarketing_hoverarea',
  '#hr_hoverarea',
  '#projectdiscovery_hoverarea',
  '#Technical_Infrastructure_Optimization',
  '#Build-Operate-Transfer',
  '#Custom_Software_Development',
  '#Technical_Aud_t',
  '#Software_Development_Process_Consulting',
  '#Tech_Marketing_Consulting_',
  '#HR_Practices_in_Tech_Companies_Consulting',
  '#Project_Discovery',
]

const lottieElemGroups = {
  techAndMarketing: [
    'Custom_Software_Development',
    'Build-Operate-Transfer',
    'Technical_Infrastructure_Optimization',
    'customsoftdev_hoverarea',
    'transfer_hoverarea',
    'optimization_hoverarea',
  ],
  managementAndConsulting: [
    'Software_Development_Process_Consulting',
    'Technical_Aud_t',
    'Project_Discovery',
    'softdevproc_hoverarea',
    'techaudit_hoverarea',
    'projectdiscovery_hoverarea',
  ],
  hrAndMarketing: [
    'HR_Practices_in_Tech_Companies_Consulting',
    'Tech_Marketing_Consulting_',
    'hr_hoverarea',
    'techmarketing_hoverarea',
  ],
}

const intervalDelay = 1300
const timeOutDelay = 3000
const waitingTimeToLoadLottie = 1500

const { $getMediaFromS3 } = useMediaFromS3()
const router = useRouter()

const buttons = props.collectedData.buttons
const icons = props.collectedData.icons
const observerRef = ref<IntersectionObserverInstance | null>(null)
const serviceSliceRef = ref<HTMLElement | null>(null)
const intervalId = ref<ReturnType<typeof setInterval> | undefined>()
const timeOutId = ref<ReturnType<typeof setTimeout> | undefined>()
const activeButton = ref<string>(props.collectedData.firstGroupButtonText)
const currentActiveButton = ref(0)
const lottieInstance = ref<AnimationItem | null>(null)
const links = [
  {
    link: props.collectedData.softwareDevelopmentLink || '/',
    label: 'Software Development Process Consulting',
    lottieId: 'softdevproc_hoverarea',
    lottieTextId: 'Software_Development_Process_Consulting',
    haveLink: Boolean(props.collectedData.softwareDevelopmentLink),
  },
  {
    link: props.collectedData.hrPracticesLink || '/',
    label: 'HR Practices in Tech Companies Consulting',
    lottieId: 'hr_hoverarea',
    lottieTextId: 'HR_Practices_in_Tech_Companies_Consulting',
    haveLink: Boolean(props.collectedData.hrPracticesLink),
  },
  {
    link: props.collectedData.transparentStaffingLink || '/',
    label: 'Build-Operate-Transfer',
    lottieId: 'transfer_hoverarea',
    lottieTextId: 'Build-Operate-Transfer',
    haveLink: Boolean(props.collectedData.transparentStaffingLink),
  },
  {
    link: props.collectedData.technicalAuditLink || '/',
    label: 'Technical Audit',
    lottieId: 'techaudit_hoverarea',
    lottieTextId: 'Technical_Aud_t',
    haveLink: Boolean(props.collectedData.technicalAuditLink),
  },
  {
    link: props.collectedData.technicalInfrastructureLink || '/',
    label: 'Technical Infrastructure Optimization',
    lottieId: 'optimization_hoverarea',
    lottieTextId: 'Technical_Infrastructure_Optimization',
    haveLink: Boolean(props.collectedData.technicalInfrastructureLink),
  },
  {
    link: props.collectedData.techMarketingLink || '/',
    label: 'Tech Marketing Consulting & Support',
    lottieId: 'techmarketing_hoverarea',
    lottieTextId: 'Tech_Marketing_Consulting_',
    haveLink: Boolean(props.collectedData.techMarketingLink),
  },
  {
    link: props.collectedData.projectDiscoveryLink || '/',
    label: 'Project Discovery',
    lottieId: 'projectdiscovery_hoverarea',
    lottieTextId: 'Project_Discovery',
    haveLink: Boolean(props.collectedData.projectDiscoveryLink),
  },
  {
    link: props.collectedData.customSoftwareLink || '/',
    label: 'Custom Software Development',
    lottieId: 'customsoftdev_hoverarea',
    lottieTextId: 'Custom_Software_Development',
    haveLink: Boolean(props.collectedData.customSoftwareLink),
  },
]

const setActiveClass = () => {
  timeOutId.value = setTimeout(() => {
    intervalId.value = setInterval(() => {
      if (currentActiveButton.value < (buttons.length - 1)) {
        currentActiveButton.value += 1
      } else {
        currentActiveButton.value = 0
        clearInterval(intervalId.value)
      }
      activeButton.value = buttons[currentActiveButton.value].label
    }, intervalDelay)
  }, timeOutDelay)
}

const getIcon = (buttonIndex: number) => {
  return icons[buttonIndex]
}

const changeActiveButton = (buttonIndex: number, frame: number) => {
  clearInterval(intervalId.value)
  clearTimeout(timeOutId.value)
  activeButton.value = buttons[buttonIndex].label
  if (lottieInstance.value) { lottieInstance.value!.goToAndStop(frame, true) }
}

const animHandler = (lottie: AnimationItem) => {
  lottieInstance.value = lottie
}

const activateFocusLottieLinks = (event: Event) => {
  const target = event.target as HTMLElement
  const parentNode = target.parentNode!.parentNode as HTMLElement
  const link = links.find(findLink => findLink.lottieId === parentNode.id ||
    findLink.lottieTextId === parentNode.id)
  // eslint-disable-next-line no-console
  if (link && link.haveLink) { router.push(link.link).catch(console.error) }
}

const goToLinkPath = (event: Event) => {
  activateFocusLottieLinks(event)
}

const changeFrameOnHoverTech = () => {
  changeActiveButton(0, 200)
}

const changeFrameOnHoverManagement = () => {
  changeActiveButton(1, 250)
}

const changeFrameOnHoverHr = () => {
  changeActiveButton(2, 330)
}

const getLottieElements = async () => {
  await delay(waitingTimeToLoadLottie) // Waiting time to load lottie
  if (!serviceSliceRef.value) { return }
  lottieTextElemIds.forEach(elem => {
    const lottieElem = serviceSliceRef.value!.querySelector(elem) as HTMLElement
    if (lottieElem) {
      const link = links.find(findLink => lottieElem.id === findLink.lottieId || lottieElem.id === findLink.lottieTextId)
      if (link?.haveLink) {
        lottieElem.style.cursor = 'pointer'
        lottieElem.addEventListener('click', goToLinkPath)
      } else {
        lottieElem.style.cursor = 'not-allowed'
      }
      if (lottieElemGroups.techAndMarketing.includes(lottieElem.id)) {
        lottieElem.addEventListener('mouseover', changeFrameOnHoverTech)
      }

      if (lottieElemGroups.managementAndConsulting.includes(lottieElem.id)) {
        lottieElem.addEventListener('mouseover', changeFrameOnHoverManagement)
      }

      if (lottieElemGroups.hrAndMarketing.includes(lottieElem.id)) {
        lottieElem.addEventListener('mouseover', changeFrameOnHoverHr)
      }
    }
  })
}

const removeListeners = () => {
  if (!serviceSliceRef.value) { return }
  lottieTextElemIds.forEach(elem => {
    const lottieElem = serviceSliceRef.value?.querySelector(elem)
    if (lottieElem) {
      lottieElem.removeEventListener('click', goToLinkPath)
      if (lottieElemGroups.techAndMarketing.includes(lottieElem.id)) {
        lottieElem.removeEventListener('mouseover', changeFrameOnHoverTech)
      }

      if (lottieElemGroups.managementAndConsulting.includes(lottieElem.id)) {
        lottieElem.removeEventListener('mouseover', changeFrameOnHoverManagement)
      }

      if (lottieElemGroups.hrAndMarketing.includes(lottieElem.id)) {
        lottieElem.removeEventListener('mouseover', changeFrameOnHoverHr)
      }
    }
  })
}

const initIntersectionObserver = () => {
  if (serviceSliceRef.value) {
    observerRef.value = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveClass()
          // eslint-disable-next-line
          getLottieElements().catch(console.log)
          if (serviceSliceRef.value) {
            observer.unobserve(serviceSliceRef.value)
          }
        }
      })
    })
    observerRef.value.observe(serviceSliceRef.value)
  }
}

onMounted(() => {
  initIntersectionObserver()
})

onUnmounted(() => {
  clearInterval(intervalId.value)
  clearTimeout(timeOutId.value)
  removeListeners()
})
</script>
<template>
  <div
    ref="serviceSliceRef"
    class="container services-slice-desktop"
  >
    <div class="service-slice__buttons">
      <button
        v-for="(button, buttonIndex) in buttons"
        :key="`${button.label.split(' ').join('-')}-${buttonIndex}`"
        class="service-slice__button"
        :class="{ 'service-slice__button--active': activeButton === button.label }"
        @click="changeActiveButton(buttonIndex, button.lottieFrame)"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/custom/about/${getIcon(buttonIndex)}`)"
          :alt="button.label || 'Button group icon'"
          width="22.5"
          height="22.5"
          class="service-slice__button-icon"
        >
        {{ button.label }}
      </button>
    </div>
    <SharedLottieMad
      class="case_lottie"
      height="509px"
      :lottie-link="$getMediaFromS3(`/images/custom/about/final-main-page-lottie.json`)"
      :autoplay="true"
      @anim-created="animHandler"
    />
    <div
      v-for="(link, linkIndex) in links"
      :key="`${link.link}-${linkIndex}`"
    >
      <NuxtLink
        v-if="link.haveLink"
        :class="`service-slice__link ${link.lottieId}`"
        :to="link.link"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
.services-slice-desktop {
  @media screen and (max-width: 875px) {
    display: none;
    visibility: hidden;
  }
}

.service-slice {
  &__buttons {
    display: flex;
    justify-content: center;
    column-gap: 60px;
    margin-bottom: 48px;
  }

  &__button {
    display: flex;
    align-items: center;
    column-gap: 11.75px;
    background: transparent;
    @include font('Inter', 18px, 600);
    line-height: 26px;
    color: $text-color--white-primary;
    border: none;
    cursor: pointer;
    opacity: 0.2;
    transition: 0.3s ease-in-out;
    will-change: opacity;
    padding: 0;

    &--active {
      opacity: 1;
    }
  }

  &__link {
    position: absolute;
    top: -1000000px;
    left: -1000000px;
    transform: scale(0);
    z-index: -1;
    opacity: 0;
  }

  @media screen and (max-width: 1008px) {
    &__button {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 875px) {
    display: none;
    visibility: hidden;
  }
}
</style>

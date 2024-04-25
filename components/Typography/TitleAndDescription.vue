<script setup lang="ts">
import { computed, h, type PropType, ref } from 'vue'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

interface TitleAndDescriptionPropTypes {
  primary: {
    sectionIdForToc: string
    title: string
    titleTag: string
    titleFontSize: string
    titleFontSizeLaptop: string
    titleFontSizeTablet: string
    titleFontSizeMobile: string
    titleLineHeight: string
    titleTextColor: string
    description: string
    descriptionColor: string
    descriptionLocation: string
    backgroundColor: string
    textPosition: string
  }
}

const props = defineProps({
  slice: {
    type: Object as PropType<TitleAndDescriptionPropTypes>,
    default: () => ({}),
  },
})

const classNames = {
  contentCenter: 'title-and-description__content--center',
  contentDirection: {
    column: 'title-and-description__content--column',
    row: 'title-and-description__content--row',
  },
}

const defaultOptions = {
  titleTag: 'h2',
  fontSizes: {
    desktop: '60px',
    laptop: '45px',
    tablet: '31px',
    mobile: '31px',
  },
  lineHeight: '117%',
  titleTextColor: 'white',
  descriptionColor: 'white',
  descriptionLocation: {
    column: 'column',
    row: 'row',
  },
  backgroundColor: 'black',
  textPosition: 'left',
}

const intersectionOptions = {
  rootMargin: '0px 0px -40%',
}

const sectionIdForToc = props.slice.primary.sectionIdForToc
const titleTag = props.slice.primary.titleTag || defaultOptions.titleTag
const titleFontSize = props.slice.primary.titleFontSize || defaultOptions.fontSizes.desktop
const titleFontSizeLaptop = props.slice.primary.titleFontSizeLaptop || defaultOptions.fontSizes.laptop
const titleFontSizeTablet = props.slice.primary.titleFontSizeTablet || defaultOptions.fontSizes.tablet
const titleFontSizeMobile = props.slice.primary.titleFontSizeMobile || defaultOptions.fontSizes.mobile
const titleLineHeight = props.slice.primary.titleLineHeight || defaultOptions.lineHeight
const titleTextColor = props.slice.primary.titleTextColor || defaultOptions.titleTextColor
const descriptionColor = props.slice.primary.descriptionColor || defaultOptions.descriptionColor
const descriptionLocation = props.slice.primary.descriptionLocation
  ? defaultOptions.descriptionLocation.column
  : defaultOptions.descriptionLocation.row
const backgroundColor = props.slice.primary.backgroundColor || defaultOptions.backgroundColor
const textPosition = props.slice.primary.textPosition || defaultOptions.textPosition
const fontsLoaded = ref(false)
const sectionRef = ref<Element | null>(null)
const observer = ref<IntersectionObserverInstance | null>(null)

const horizontalToCStore = useHorizontalToCStore()
const { activeAnchor } = storeToRefs(horizontalToCStore)
const cssVars = computed(() => ({
  '--titleFontSize': `${ titleFontSize }`,
  '--titleFontSizeLaptop': `${ titleFontSizeLaptop }`,
  '--titleFontSizeTablet': `${ titleFontSizeTablet }`,
  '--titleFontSizeMobile': `${ titleFontSizeMobile }`,
  '--titleLineHeight': `${ titleLineHeight }`,
}))

const reformatToHtml = (text: string, type = 'title') => {
  if (type === 'title' && text) { return text.replace(/\n/g, '<br />') }
  if (type === 'desc' && text) { return text.split(/\n/g) }
  return text
}

const reformattedTitle = reformatToHtml(props.slice.primary.title, 'title')
const reformattedDescription = reformatToHtml(props.slice.primary.description, 'desc')

const getContentClassNames = ({ textPosition = 'left', descriptionLocation = 'row' }) =>
  computed(() =>
    [
      textPosition === 'center' && descriptionLocation !== 'row' && classNames.contentCenter,
      descriptionLocation === defaultOptions.descriptionLocation.column
        ? classNames.contentDirection.column
        : classNames.contentDirection.row,
    ].filter(Boolean),
  )

const contentClassNames = getContentClassNames({
  textPosition,
  descriptionLocation,
})

const initIntersectionObserverForSections = (updateActiveAnchor: (anchor: string) => void, activeAnchor: any) => {
  observer.value = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id ? entry.target.id.split('_')[0].toLowerCase() : ''
        if (targetId && activeAnchor.value !== targetId) {
          updateActiveAnchor(targetId)
        }
      }
    })
  }, intersectionOptions)
  if (sectionRef.value) {
    observer.value.observe(sectionRef.value)
  }
}

onMounted(() => {
  fontsLoaded.value = true
  initIntersectionObserverForSections(horizontalToCStore.updateActiveAnchor, activeAnchor)
})

onUnmounted(() => {
  if (observer.value && sectionRef.value) {
    observer.value.unobserve(sectionRef.value)
  }
})

const VNodeTitle = () => h(titleTag, { innerHTML: reformattedTitle })
</script>
<template>
  <section
    :id="sectionIdForToc"
    ref="sectionRef"
    class="title-and-description"
    :class="`title-and-description--${backgroundColor}`"
    :style="cssVars"
  >
    <div class="container">
      <div class="title-and-description__content" :class="contentClassNames">
        <VNodeTitle
          v-if="reformattedTitle"
          class="title-and-description__title"
          :class="[
            `title-and-description__title--${titleTextColor} title-and-description__title--${descriptionLocation}`,
            { 'title-and-description__title--default-font-size': !fontsLoaded },
          ]"
        />
        <div
          v-if="reformattedDescription"
          class="title-and-description__desc-wrapper"
          :class="`title-and-description__desc-wrapper--${descriptionLocation}`"
        >
          <p
            v-for="(description, descriptionIndex) in reformattedDescription"
            :key="`${description.split(' ').join('-')}-${descriptionIndex}`"
            class="title-and-description__description"
            :class="`title-and-description__description--${descriptionColor}`"
            v-html="description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.title-and-description {
  scroll-margin-top: 160px;

  &--white {
    background-color: $bgcolor--white-primary;
  }

  &--black {
    background-color: $bgcolor--black;
  }

  &__content {
    display: flex;
    gap: 40px 125px;

    &--row {
      flex-direction: row;
      justify-content: space-between;
    }

    &--column {
      flex-direction: column;
    }

    &--left {
      text-align: left;
    }

    &--center {
      text-align: center;
      align-items: center;
    }
  }

  &__title {
    @include font('Inter', var(--titleFontSize), 700);
    line-height: var(--titleLineHeight);

    &--default-font-size {
      font-size: 60px;
      line-height: 117%;
    }

    &--row {
      max-width: 660px;
    }

    &--column {
      max-width: 950px;
    }

    &--white {
      color: $text-color--white-primary;
    }

    &--black {
      color: $text-color--chinese-black;
    }

    &--blue-gradient {
      background: linear-gradient(to bottom, #4ca0f5 7.33%, #2e6ff9 85.42%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--purple-gradient {
      background: linear-gradient(to bottom, #c598ff 0.47%, #9a4bff 99.16%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--orange-gradient {
      background: linear-gradient(to bottom, #f7c744 0%, #ff7a00 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--green-gradient {
      background: linear-gradient(to bottom, #4cc866 -2.34%, #099fbc 79.81%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__desc-wrapper {
    &--row {
      width: 40%;
    }

    &--column {
      width: 100%;
      max-width: 950px;
      align-self: unset;
    }
  }

  &__description {
    @include font('Inter', 21px, 400);
    line-height: 148%;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &--white {
      color: $text-color--white-primary;
    }

    &--black {
      color: $text-color--chinese-black;
    }

    &--white-with-opacity {
      color: $text-color--white07-opacity;
    }

    &--black-with-opacity {
      color: $text-color--chinese-black07-opacity;
    }
  }

  @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    &__content {
      display: flex;
      flex-wrap: wrap;
      gap: 32px 125px;

      &--row {
        flex-direction: column;
      }
    }

    &__title {
      font-size: var(--titleFontSizeLaptop);

      &--default-font-size {
        font-size: 45px;
      }
    }

    &__desc-wrapper {
      &--row {
        width: 100%;
        max-width: 950px;
        align-self: unset;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: var(--titleFontSizeTablet);

      &--default-font-size {
        font-size: 31px;
      }
    }

    &__description {
      font-size: 18px;
      line-height: 166%;
    }
  }

  @media screen and (max-width: 450px) {
    &__content {
      gap: 24px 125px;
    }

    &__title {
      font-size: var(--titleFontSizeMobile);

      &--default-font-size {
        font-size: 31px;
      }
    }
  }
}
</style>

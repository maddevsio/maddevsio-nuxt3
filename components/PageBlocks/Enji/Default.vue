<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField, LinkField } from '@prismicio/types'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'
interface EnjiProps {
  primary: {
    mainTitle: string
    mainDescription: string
    enjiDescription: string
    linkText: string
    link: LinkField
    buttonText: string
    buttonLink: LinkField
    image: ImageField
  }
}

const { slice } = defineProps({
  slice: {
    type: Object as PropType<EnjiProps>,
    default: () => ({}),
  },
})

const intersectionOptions = {
  threshold: 0.4,
}
const mainTitle = reformatToHtml(slice.primary.mainTitle, 'string') || ''
const mainDescription = reformatToHtml(slice.primary.mainDescription, 'string') || ''
const enjiDescription = slice.primary.enjiDescription
const linkText = slice.primary.linkText || 'We provide Enji.ai to our clients for FREE'
const link = slice.primary.link?.url || ''
const buttonText = slice.primary.buttonText || 'Learn More'
const buttonLink = slice.primary.buttonLink?.url || ''
const image = slice.primary.image || {}
const enjiSectionRef = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserverInstance | null>(null)

const initIntersectionObserverForSections = () => {
  observer.value = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateActiveAnchor(entry.target.id)
      }
    })
  }, intersectionOptions)
  if (!enjiSectionRef.value) { return }
  observer.value.observe(enjiSectionRef.value)
}

const { headerHeight } = storeToRefs(useHeaderStore())
const { updateActiveAnchor } = useHorizontalToCStore()
const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  initIntersectionObserverForSections()
})

onUnmounted(() => {
  if (enjiSectionRef.value && observer.value) {
    observer.value!.unobserve(enjiSectionRef.value)
  }
})
</script>

<template>
  <section
    id="enji-section"
    ref="enjiSectionRef"
    class="enji-slice"
    :style="`scroll-margin-top: ${headerHeight}px`"
  >
    <div class="container">
      <div class="enji-slice__wrapper">
        <img
          loading="lazy"
          :src="$getMediaFromS3('images/custom/enji-slice/enji-slice-background-image.svg')"
          width="446px"
          height="417px"
          alt="Enji logo"
          class="enji-slice__background-image"
        >
        <div class="enji-slice__content-wrapper">
          <h2
            v-if="mainTitle"
            class="enji-slice__main-title"
            v-html="mainTitle"
          />
          <p
            v-if="mainDescription"
            class="enji-slice__main-description"
            v-html="mainDescription"
          />
          <div class="enji-slice__cards">
            <div class="enji-slice__text-content">
              <div
                v-if="enjiDescription"
                class="enji-slice__descriptions"
                v-html="$prismic.asHTML(enjiDescription)"
              />
              <Component
                :is="link ? 'a' : 'p'"
                :href="link"
                class="enji-slice__content-link"
              >
                {{ linkText }}
              </Component>
              <div
                v-if="buttonLink"
                class="enji-slice__content-button-link"
              >
                <SharedUIButtonPowerCustom
                  :label="buttonText"
                  have-border
                  is-outlined
                  hover-background-color="#fff"
                  border-color="#A0A0A1"
                  label-color="#111111"
                  show-arrow
                  hover-label-color="#111111"
                  is-link
                  is-external-link
                  :link-to-page="buttonLink"
                />
              </div>
            </div>
            <div
              v-if="image.url"
              class="enji-slice__image-wrapper"
            >
              <img
                loading="lazy"
                :src="image.url.replace('compress,', '')"
                :alt="image.alt || 'Enji screenshots'"
                width="610"
                height="412"
                class="enji-slice__image"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.enji-slice {
  background-color: $bgcolor--cultured;
  padding: 72px 0 72px;

  &__wrapper {
    position: relative;
  }

  &__content-wrapper {
    position: relative;
    z-index: 1;
  }

  &__main-title {
    @include font('Inter', 60px, 700);
    line-height: 105%;
    color: rgba(81, 89, 246, 0.8);
    max-width: 821px;

    @media screen and (max-width: 768px) {
      font-size: 31px;
      line-height: 117%;
      max-width: 394px;
    }

    @media screen and (max-width: 450px) {
      max-width: unset;
    }
  }

  &__main-description {
    @include font('Inter', 21px, 400);
    line-height: 148%;
    color: $text-color--chinese-black;
    margin-top: 24px;
    max-width: 950px;
    opacity: 0.7;

    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 140%;
      max-width: 100%;
    }

    @media screen and (max-width: 450px) {
      margin-top: 8px;
    }
  }

  &__cards {
    display: flex;
    justify-content: space-between;
    margin-top: 76px;

    * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 1100px) {
      flex-direction: column-reverse;
      row-gap: 48px;
      margin-top: 48px;
    }

    @media screen and (max-width: 450px) {
      row-gap: 45px;
    }
  }

  &__text-content {
    width: 40.5%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  &__descriptions {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    :deep(p),
    :deep(a) {
      @include font('Inter', 21px, 400);
      line-height: 148%;
      color: $text-color--chinese-black;
    }

    :deep(a) {
      text-decoration: underline;
    }

    @media screen and (max-width: 450px) {
      row-gap: 12px;

      :deep(p),
      :deep(a) {
        font-size: 18px;
        line-height: 140%;
      }
    }
  }

  &__content-link {
    @include font('Inter', 21px, 700);
    line-height: 148%;
    text-decoration-line: underline;
    color: #7A77FF;
    margin-top: 16px;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }

    @media screen and (max-width: 450px) {
      font-size: 18px;
      line-height: 140%;
    }
  }

  &__content-button-link {
    max-width: 295px;
    margin-top: 48px;

    :deep(.button-power-custom) {
      font-size: 16px;
      line-height: 26px;
    }

    :deep(.button-power-custom__arrow) {
      width: 13px;
      height: 13px;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      max-width: unset;
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      margin-top: 35px;
    }

    @media screen and (max-width: 450px) {
      margin-top: 30px;
    }
  }

  &__image-wrapper {
    width: 49.2%;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  &__background-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 446px;
    height: 417px;
    display: block;

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
}
</style>

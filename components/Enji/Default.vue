<script setup lang="ts">
import type { PropType } from 'vue'
import { Enji } from '~/components/Enji/classes/Enji'
import type { EnjiProps } from '~/components/Enji/interfaces/IEnji'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<EnjiProps>,
    default: () => ({}),
  },
})
const enji = new Enji(slice)
const { updateActiveAnchor } = useHorizontalToCStore()
const enjiSectionRef = enji.enjiSectionRef
const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  enji.initIntersectionObserverForSections(updateActiveAnchor)
})

onUnmounted(() => {
  if (enjiSectionRef.value && enji.observer.value) {
    enji.observer.value!.unobserve(enjiSectionRef.value)
  }
})
</script>
<template>
  <section
    id="enji-section"
    ref="enjiSectionRef"
    class="enji-slice"
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
            v-if="enji.mainTitle"
            class="enji-slice__main-title"
            v-html="enji.mainTitle"
          />
          <p
            v-if="enji.mainDescription"
            class="enji-slice__main-description"
            v-html="enji.mainDescription"
          />
          <div class="enji-slice__cards">
            <div class="enji-slice__text-content">
              <div
                v-if="enji.enjiDescription"
                class="enji-slice__descriptions"
                v-html="$prismic.asHTML(enji.enjiDescription)"
              />
              <Component
                :is="enji.link ? 'a' : 'p'"
                :href="enji.link"
                class="enji-slice__content-link"
              >
                {{ enji.linkText }}
              </Component>
              <div
                v-if="enji.buttonLink"
                class="enji-slice__content-button-link"
              >
                <SharedUIButtonPowerCustom
                  :label="enji.buttonText"
                  have-border
                  is-outlined
                  hover-background-color="#fff"
                  border-color="#A0A0A1"
                  label-color="#111111"
                  show-arrow
                  hover-label-color="#111111"
                  is-link
                  is-external-link
                  :link-to-page="enji.buttonLink"
                />
              </div>
            </div>
            <div
              v-if="enji.image.url"
              class="enji-slice__image-wrapper"
            >
              <img
                loading="lazy"
                :src="enji.image.url.replace('compress,', '')"
                :alt="enji.image.alt || 'Enji screenshots'"
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

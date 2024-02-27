<script setup lang="ts">
import type { PropType } from 'vue'
import { PressCenter } from '~/components/PageBlocks/PressCenter/classes/PressCenter'
import type { PressCenterProps } from '~/components/PageBlocks/PressCenter/interfaces/IPressCenter'

const props = defineProps({
  slice: {
    type: Object as PropType<PressCenterProps>,
    default: () => ({}),
  },
})

const { swiperOptions, cards, colorClassesNames } = new PressCenter(props.slice)
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section :class="`press-center-slice ${colorClassesNames.backgroundColorClass}`">
    <div class="container">
      <Swiper
        v-bind="swiperOptions"
        class="press-center-slice__cards"
      >
        <SwiperSlide
          v-for="card in cards"
          :key="`press-center-${card.title}`"
        >
          <NuxtLink
            v-if="card.link.url"
            :to="card.link.url"
            :external="card.external"
            :no-rel="card.external"
            :target="card.target"
            :class="`press-center-slice__card ${colorClassesNames.cardBackgroundColorClass}`"
          >
            <div
              v-if="card.image && card.image.url"
              class="press-center-slice__card-header"
            >
              <NuxtImg
                provider="prismic"
                loading="lazy"
                :src="card.image.url.replace(/\?.*/, '?auto=format')"
                :alt="card.image.alt || 'Card image'"
                :width="294.96"
                :height="166.04"
                class="press-center-slice__card-header-image"
              />
              <img
                v-if="card.linkedCompanyLogo && card.linkedCompanyLogo.url"
                loading="lazy"
                :src="card.linkedCompanyLogo.url"
                :alt="card.linkedCompanyLogo.alt || 'Card logo'"
                :width="card.linkedCompanyLogo.dimensions.width"
                :height="card.linkedCompanyLogo.dimensions.height"
                class="press-center-slice__card-header-logo"
              >
            </div>
            <div class="press-center-slice__card-body">
              <span
                v-if="card.date"
                class="press-center-slice__card-body-date"
              >
                {{ formatDate(card.date) }}
              </span>
              <h3
                v-if="card.title"
                :class="`press-center-slice__card-body-title ${colorClassesNames.titleColorClass}`"
              >
                {{ card.title }}
              </h3>
              <p
                v-if="card.description"
                :class="`press-center-slice__card-body-description ${colorClassesNames.descriptionColorClass}`"
              >
                {{ card.description }}
              </p>
            </div>
            <div
              v-if="card.link.url"
              class="press-center-slice__card-footer"
            >
              <button
                class="press-center-slice__card-footer-link"
              >
                <img
                  loading="lazy"
                  :src="$getMediaFromS3('images/custom/about/arrow-right.svg')"
                  alt="'Arrow right icon'"
                  width="10"
                  height="10"
                  class="press-center-slice__card-footer-link-arrow"
                >
                {{ card.linkLabel }}
              </button>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <div
          class="press-center-slice__navigation-buttons"
        >
          <SharedNavigationButtons
            prev-label="Prev"
          />
        </div>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';

.press-center-slice {

  &__cards {
    :deep(.swiper-slide) {
      height: initial;
    }
  }

  &__card {
    border-radius: 9px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    height: 100%;
    padding-bottom: 40px;
    box-sizing: border-box;

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding-bottom: 24px;
    }

    * {
      box-sizing: border-box;
    }

    &-header {
      position: relative;
      overflow: hidden;

      &-image {
        width: 100%;
        max-height: 166.036px;
        display: block;
        object-fit: cover;
      }

      &-logo {
        position: absolute;
        bottom: 16px;
        right: 16px;
        max-width: 100px;
      }

      @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
        &-image {
          max-height: 150px;
        }
      }
    }

    &-body,
    &-footer {
      padding: 0 20px;
    }

    &-body {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      &-date {
        @include font('Inter', 10px, 400);
        color: $text-color--grey-opacity-40-percent;
      }

      &-title {
        @include font('Inter', 18px, 700);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 130%;
        margin: 11px 0 16px;
        &--black {
          color: $text-color--white-primary;
        }

        &--white {
          color: $text-color--chinese-black;
        }
      }

      &-description {
        @include font('Inter', 14px, 400);
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 22.836px;
        margin-top: auto;
        &--black {
          color: $text-color--grey-20-percent;
        }

        &--white {
          color: $text-color--black-lighter;
        }
      }

      @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
        &-date {
          font-size: 8px;
        }

        &-title {
          font-size: 15px;
          margin: 10px 0;
        }

        &-description {
          font-size: 12px;
          line-height: 20px;
        }
      }

      @media screen and (max-width: 550px) {
        &-description {
          margin-top: 6px;
        }
      }
    }

    &-footer {
      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        border: 1px solid $border-color--grey-selected;
        font-size: 0;
        text-indent: -99999px;
        background: transparent;
        cursor: pointer;

        @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
          @supports not (translate: 0) { /* Проверка на версию Safari */
            padding-left: 27.5px;
          }
        }

        &-arrow {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  &__navigation-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px auto 0;

    :deep(.digest-footer__navigations-divider) {
      height: 15px;
      background-color: $border-color--grey-20-percent;
    }

    :deep(.digest-footer__navigations-buttons-wrapper) {
      width: auto;
      min-width: unset;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      margin-top: 32px;
    }

    @media screen and (max-width: 670px) {
      :deep(.digest-footer__navigations-buttons-wrapper) {
        width: 100%;
      }

      :deep(.digest-footer__navigations-buttons) {
        gap: 18px;
      }
    }

    @media screen and (max-width: 550px) {
      margin-top: 24px;
      width: 100%;
    }
  }
}
</style>

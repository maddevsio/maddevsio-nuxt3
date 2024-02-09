<script setup lang="ts">
import type { ServiceCardsProps } from '~/components/ServiceCards/interfaces/IServiceCards'
import { ServiceCards } from '~/components/ServiceCards/classes/ServiceCards'

interface Props {
  slice: ServiceCardsProps
}
const { slice } = defineProps<Props>()
const {
  backgroundColor,
  cards,
  animHandler,
  onHoverCard,
  onUnHoverCard,
} = new ServiceCards(slice)
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section :class="`service-cards ${backgroundColor}`">
    <div class="container service-cards__wrapper">
      <div
        v-for="(card) in cards"
        :key="card.id"
        :class="`service-cards__card ${card.cardBackgroundColor}`"
        @mouseenter="onHoverCard(card.iconName)"
        @mouseleave="onUnHoverCard()"
      >
        <Component
          :is="card.titleTag"
          v-if="card.title"
          :class="`service-cards__card-title ${card.textColor}`"
        >
          <span
            v-html="card.title"
          />
        </Component>
        <PrismicRichText
          v-if="$prismic.asText(card.description)"
          :field="card.description"
          :class="`service-cards__card-description ${card.textColor}`"
          :html-serializer="prismicHtmlSerializer"
        />
        <div
          v-if="card.iconName"
          class="service-cards__card-icon-wrapper"
        >
          <LazySharedLottieMad
            height="150px"
            :autoplay="false"
            :loop="false"
            :set-min-height="false"
            :lottie-link="$getMediaFromS3(`/images/prismic/lottie/${card.iconName}`)"
            class="service-cards__card-icon"
            @anim-created="animHandler"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.service-cards {
  &__wrapper {
    @include grid(repeat(2, 1fr), auto, 24px, 20px);
  }

  &__card {
    padding: 36px 26px 100px 39px;
    border-radius: 5px;
    position: relative;

    &-title {
      @include font('Inter', 24px, 700);
      line-height: 130%;
      margin-bottom: 13px;
    }

    &-description {
      padding-right: 246px;
      :deep(p) {
        @include font('Inter', 18px, 400);
        line-height: 130%;
      }
    }

    &-icon-wrapper {
      position: absolute;
      bottom: 20px;
      right: 35px;
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (   min--moz-device-pixel-ratio: 2) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (     -o-min-device-pixel-ratio: 2/1) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (        min-device-pixel-ratio: 2) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (                min-resolution: 192dpi) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (                min-resolution: 2dppx) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (min-width: 1027px) and (max-width: 1280px) {
    &__card {
      padding: 31px 26px 86px 34px;

      &-title {
        font-size: 20px;
        margin-bottom: 9px;
      }

      &-description {
        padding-right: 197px;

        :deep(p) {
          font-size: 16px;
        }
      }

      &-icon-wrapper {
        width: 132.228px;
        height: 131.991px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    &__wrapper {
      @include grid(repeat(1, 1fr), auto, 24px, 20px);
    }
  }

  @media screen and (max-width: 1026px) {
    &__card {
      &-description {
        padding-right: 230px;
      }

      &-icon-wrapper {
        right: 8px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    &__card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 15px 20px 36px;

      &-title {
        font-size: 20px;
        width: 70%;
        margin-bottom: 0;
      }

      &-description {
        display: none;
      }

      &-icon-wrapper {
        position: relative;
        inset: unset;
        width: 59px;
        height: 60px;
      }
    }
  }
}
</style>

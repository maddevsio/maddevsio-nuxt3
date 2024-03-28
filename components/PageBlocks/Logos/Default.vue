<script setup lang="ts">
import type { LogosProps } from '~/components/PageBlocks/Logos/interfaces/ILogos'
import { Logos } from '~/components/PageBlocks/Logos/classes/Logos'

interface Props {
  slice: LogosProps
}

const { slice } = defineProps<Props>()
const {
  cards,
  backgroundColor,
} = new Logos(slice)
</script>
<template>
  <section :class="`logo-slice ${backgroundColor}`">
    <div class="container logo-slice__wrapper">
      <div
        v-for="(card, cardIdx) in cards"
        :key="cardIdx"
        :class="`logo-slice__card ${card.cardBackgroundColor} ${card.link.url ? 'logo-slice__card--with-link' : ''}`"
      >
        <img
          v-if="card.image && card.image.url"
          loading="lazy"
          :src="card.image.url"
          :alt="card.image.alt || 'Logo'"
          :width="card.image.dimensions.width"
          :height="card.image.dimensions.height"
          class="logo-slice__card-image"
        >
        <NuxtLink
          v-if="card.link.url && card.link.ourDomain"
          :to="card.link.url"
          class="logo-slice__card-link"
        >
          {{ card.link.url }}
        </NuxtLink>
        <a
          v-if="card.link.url && !card.link.ourDomain"
          :href="card.link.url"
          target="_blank"
          rel="noopener"
          class="logo-slice__card-link"
        >
          {{ card.link.url }}
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';
.logo-slice {
  &__wrapper {
    @include grid(repeat(4, 1fr), auto, 20px, 20px);
  }

  &__card {
    padding: 68px 85px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;

    &--with-link {
      transition: 0.3s ease-in-out;

      &.bg--white {
        &:hover {
          background-color: #f0f0f0 !important;
        }
      }

      &.bg--black {
        &:hover {
          background-color: #212123 !important;
        }
      }
    }

    &-image {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      max-width: 124px;
      max-height: 124px;
    }

    &-link {
      display: block;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      font-size: 0;
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
      padding: 53px 69px;
    }
  }

  @media screen and (max-width: 1026px) {
    &__wrapper {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    &__card {
      padding: 30px 50px;
      min-height: 230px;

      &-image {
        width: unset;
        height: auto;
        max-width: unset;
        max-height: unset;
      }
    }
  }

  @media screen and (max-width: 650px) {
    &__wrapper {
      gap: 10.58px;
    }

    &__card {
      padding: 15px 34px;
      min-height: 121.677px;

      &-image {
        width: 100%;
        height: auto;
        max-width: 65.6px;
        max-height: 65.6px;
      }
    }
  }
}
</style>

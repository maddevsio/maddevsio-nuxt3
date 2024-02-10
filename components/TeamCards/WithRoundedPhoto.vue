<script setup lang="ts">
import type { TeamCardsWithRoundedPhotoProps } from '~/components/TeamCards/interfaces/ITeamCardsWithRoundedPhoto'
import { TeamCardsWithRoundedPhoto } from '~/components/TeamCards/classes/TeamCardsWithRoundedPhoto'

interface Props {
  slice: TeamCardsWithRoundedPhotoProps
}
const { slice } = defineProps<Props>()
const {
  cards,
  backgroundColor,
  containerColor,
} = new TeamCardsWithRoundedPhoto(slice)
</script>
<template>
  <div :class="`team-cards-rounded ${backgroundColor}`">
    <div class="container">
      <div :class="`team-cards-rounded__cards ${containerColor}`">
        <div
          v-for="(card, cardIdx) in cards"
          :key="cardIdx"
          class="team-cards-rounded__card"
        >
          <div class="team-cards-rounded__card-image-wrapper">
            <NuxtImg
              v-if="card.image && card.image.url"
              provider="prismic"
              loading="lazy"
              :src="card.image.url"
              :alt="card.image.alt || 'Photo'"
              :width="card.image.dimensions.width"
              :height="card.image.dimensions.height"
              class="team-cards-rounded__card-image"
            />
          </div>
          <div class="team-cards-rounded__card-text-content">
            <h3
              :class="`team-cards-rounded__card-title team-cards-rounded__card-title--${card.textColor}`"
            >
              {{ card.name }}
            </h3>
            <p
              :class="`team-cards-rounded__card-position team-cards-rounded__card-position--${card.textColor}`"
            >
              {{ card.position }}
            </p>
            <NuxtLink
              v-if="card.link.url && card.link.ourDomain"
              :to="card.link.url"
              :external="!card.link.ourDomain"
              :target="card.link.ourDomain ? '' : '_blank'"
              class="team-cards-rounded__card-link"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.team-cards-rounded {
  &__cards {
    @include grid(repeat(3, 1fr), auto, 75px, 22px);
    border-radius: 5px;
    padding: 45px 10px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-image-wrapper {
      overflow: hidden;
    }

    &-image {
      width: 229px;
      height: auto;
      object-fit: cover;
      object-position: center;
      display: block;
      margin: 0 auto;
    }

    &-text-content {
      text-align: center;
      margin-top: 19px;
    }

    &-title {
      @include font('Inter', 24px, 600);
      line-height: 148%;

      &--black {
        color: $text-color--white-primary;
      }

      &--white {
        color: $text-color--chinese-black;
      }
    }

    &-position,
    &-link {
      @include font('Inter', 16px, 400);
      line-height: 148%;
    }

    &-position {
      &--black {
        color: $text-color--white-primary;
      }

      &--white {
        color: $text-color--quote-box;
      }
    }

    &-link {
      color: $text-color--red;
      text-decoration: underline;
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
      &-image {
        width: 206px;
      }
    }
  }

  @media screen and (max-width: 1026px) {
    &__cards {
      @include grid(repeat(2, 1fr), auto, 22px, 60px);
      padding: 65px 5px;
    }

    &__card {
      &-image {
        width: 202px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    &__cards {
      @include grid(repeat(1, 1fr), auto, 22px, 40px);
      padding: 51px 20px;
    }

    &__card {
      flex-direction: row;
      gap: 20px;

      &-text-content {
        text-align: left;
        margin-top: 0;
      }

      &-image {
        width: 100%;
        max-width: 100px;
      }

      &-title {
        font-size: 16px;
      }
    }
  }
}
</style>

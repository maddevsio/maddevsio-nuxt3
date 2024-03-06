<script setup lang="ts">
import {
  ourPrinciplesData,
  ourPrinciplesEventsData,
  ourPrinciplesImages,
} from '~/components/Philosophy/constants/philosophyConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="our-principles">
    <div class="container our-principles__container">
      <h2
        class="our-principles__main-title"
      >
        Principles
      </h2>
      <div class="our-principles__content-sections">
        <div class="our-principles__text-content">
          <LazyPhilosophyUITextCard
            v-for="(textCardData, i) in ourPrinciplesData"
            :key="`${textCardData.title}-${i}`"
            :text-card-data="textCardData"
          />
        </div>
        <div class="our-principles__images-content">
          <div class="our-principles__images">
            <picture
              v-for="(image, i) in ourPrinciplesImages"
              :key="`${image.name}-${i}`"
            >
              <source
                :srcset="[$getMediaFromS3(`images/OurPhilosophy/webp/${image.name}.webp`) + ' ', $getMediaFromS3(`images/OurPhilosophy/webp/${image.name}@2x.webp 2x`)].join(', ')"
                type="image/webp"
                class="our-mission__image"
              >
              <img
                :src="$getMediaFromS3(`images/OurPhilosophy/png/${image.name}@2x.png`)"
                :width="image.sizes.width"
                :height="image.sizes.height"
                class="our-principles__image"
                :alt="image.name"
              >
            </picture>
          </div>
          <div class="our-principles__events">
            <LazyPhilosophyUIEventCard
              v-for="(event, i) in ourPrinciplesEventsData"
              :key="`${event.title}-${i}`"
              :event-card-data="event"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.our-principles {
  padding-bottom: 103.57px;

  @media screen and (max-width: 768px) {
    padding-bottom: 38px;
  }

  &__main-title {
    @include font('Poppins', 60px, 700);
    line-height: 125%;
    color: $text-color--black-lighter;
    margin-bottom: 55px;

    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 130%;
      margin-bottom: 32px;
    }
  }

  &__content-sections {
    display: flex;
    justify-content: space-between;
    column-gap: 125px;

    @media screen and (max-width: 1100px) {
      column-gap: 80px;
    }

    @media screen and (max-width: 978px) {
      flex-direction: column;
    }
  }

  &__text-content {
    width: 49%;

    @media screen and (max-width: 978px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 48px 36px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 32px;
    }
  }

  &__images-content {
    width: 41%;

    @media screen and (max-width: 978px) {
      width: 100%;
    }
  }

  &__images {
    display: flex;
    flex-direction: column;
    row-gap: 42px;
    margin-bottom: 86px;

    @media screen and (max-width: 1100px) {
      row-gap: 30px;
    }

    @media screen and (max-width: 978px) {
      display: none;
    }
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__events {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>

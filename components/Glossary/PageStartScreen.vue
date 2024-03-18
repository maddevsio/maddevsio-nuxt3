<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  GlossaryPageStartScreenProps,
} from '~/components/Glossary/interfaces/IGlossaryPageStartScreen'
import { GlossaryPageStartScreen } from '~/components/Glossary/classes/GlossaryPageStartScreen'

const { startScreenData } = defineProps({
  startScreenData: {
    type: Object as PropType<GlossaryPageStartScreenProps>,
    default: () => ({}),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
const { uid, backgroundImage, subtitleText, titleText, titleTag, description } = new GlossaryPageStartScreen(startScreenData, $getMediaFromS3)
</script>

<template>
  <section class="glossary-head-start-screen">
    <div class="glossary-head-start-screen__background">
      <img
        :src="backgroundImage.url"
        :alt="backgroundImage.alt || 'Glossary Background Image'"
        :width="backgroundImage.dimensions && backgroundImage.dimensions.width"
        :height="backgroundImage.dimensions && backgroundImage.dimensions.height"
        class="glossary-head-start-screen__background-image"
      >
    </div>
    <div class="glossary-head-start-screen__container container">
      <p
        v-if="uid !== 'glossary'"
        class="glossary-head-start-screen__subtitle"
      >
        {{ subtitleText }}
      </p>
      <Component
        :is="titleTag"
        class="glossary-head-start-screen__title"
      >
        {{ titleText }}
      </Component>
      <p
        v-if="description"
        class="glossary-head-start-screen__description"
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.glossary-head-start-screen {
  position: relative;
  padding: 188px 0 128px;
  box-sizing: border-box;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(17, 17, 17, 0.3) -16.95%, #111111 71.37%);
      z-index: 0;
    }

    &-image {
      display: block;
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title, &__description, &__subtitle {
    color: $text-color--white-primary;
  }

  &__title {
    @include font('Inter', 100px, 700);
    max-width: 63%;
    margin-bottom: 24px;
  }

  &__subtitle {
    @include font('Inter', 32px, 500);
    opacity: 0.8;
  }

  &__title, &__subtitle {
    line-height: 109%;
  }

  &__description {
    @include font('Inter', 24px, 600);
    max-width: 75%;
    line-height: 130%;
  }

  @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 167px 0 72px;
    &__title {
      font-size: 64px;
      margin-bottom: 32px;
    }

    &__subtitle {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    &__title {
      max-width: 80%;
    }

    &__description {
      max-width: 100%;
    }

  }

  @media screen and (max-width: 820px) {
    padding: 180px 0 48px;

    &__title {
      font-size: 60px;
      line-height: 125%;
      margin-bottom: 24px;
      max-width: 100%;
    }

    &__subtitle {
      font-size: 20px;
      margin-bottom: 5px;
    }

    &__description {
      font-size: 20px;
    }

  }

  @media screen and (max-width: 600px) {
    padding: 125px 0 72px;

    &__title {
      font-size: 31px;
      line-height: 130%;
    }

    &__subtitle {
      font-size: 16px;
      margin-bottom: 0;
    }

    &__description {
      font-size: 20px;
    }
  }

  &__container {
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

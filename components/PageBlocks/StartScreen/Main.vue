<script setup lang="ts">
import type { PropType } from 'vue'
import { MainStartScreen } from '~/components/PageBlocks/StartScreen/classes/MainStartScreen'
import type { IMainStartScreenPropTypes } from '~/components/PageBlocks/StartScreen/interfaces/IMainStartScreen'

const props = defineProps({
  slice: {
    type: Object as PropType<IMainStartScreenPropTypes>,
    default: () => ({}),
  },
})

const mainStartScreen = new MainStartScreen(props.slice)

const showModal = () => mainStartScreen.showModal()
const {
  reformattedDescription,
  reformattedSubtitle,
  buttonText,
  reformattedTitle,
  image,
  modalContactMeRef,
} = mainStartScreen

const sectionText = ref<HTMLElement | null>(null)
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
</script>

<template>
  <section id="transparent-header-area" class="main-start-screen">
    <SharedUIPictureFullScreen
      :src="image.url"
      :height="639"
      :width="1800"
      :alt="image.alt || 'Start Screen Background'"
      :lazy="false"
      class="main-start-screen__image"
    />
    <div
      ref="sectionText"
      class="container"
      :style="{ opacity: sectionTextOpacity }"
    >
      <div class="main-start-screen__text-content">
        <h1 class="main-start-screen__title" v-html="reformattedTitle" />
        <h2
          v-if="reformattedSubtitle"
          class="main-start-screen__subtitle"
          v-html="reformattedSubtitle"
        />
        <p
          v-if="reformattedDescription"
          class="main-start-screen__description"
          v-html="reformattedDescription"
        />
        <LazySharedUIAnimatedButton @click-emit="showModal">
          <span class="button-text">
            {{ buttonText }}
          </span>
        </LazySharedUIAnimatedButton>
      </div>
    </div>
    <LazyClientOnly>
      <Teleport to="body">
        <WidgetsModalContactMe
          ref="modalContactMeRef"
          :location="'\'Let`s talk\' button, main start screen component'"
          email-subject="Placeholder"
        />
      </Teleport>
    </LazyClientOnly>
  </section>
</template>
<style scoped lang="scss">
@mixin setFont($fontSize, $fontWeight, $lh) {
  @include font('Inter', $fontSize, $fontWeight);
  color: $text-color--white;
  line-height: $lh;
}

.main-start-screen {
  position: relative;
  height: max-content;
  min-height: 568px;
  padding: 268px 0 128px;
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 51.57%, #111213 88.94%);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    width: 100%;
    height: 100%;
    display: block;
  }

  &__text-content {
    position: relative;
    z-index: 2;

    :deep(.ui-button) {
      padding: 15px 113px;
    }
  }

  &__title {
    @include setFont(100px, 700, 109%);
  }

  &__subtitle {
    @include setFont(60px, 700, 125%);
  }

  &__description {
    @include setFont(24px, 600, 130%);
    margin-bottom: 75px;
    max-width: 1031px;
  }

  &__title,
  &__subtitle {
    margin-bottom: 22px;
  }

  &__image {
    position: absolute;
    z-index: -1;
    inset: 0;
    top: -1px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background-color: $bgcolor--black;
  }

  @media screen and (max-width: 1280px),
  (max-height: 872px),
  screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 128px 0 96px;

    &__description {
      margin-bottom: 40px;
      max-width: 815px;
    }
  }

  @media screen and (max-width: 950px) {
    height: max-content;
    min-height: max-content;
    padding: 128px 0 72px;
    &__text-content {
      :deep(.ui-button) {
        padding: 12px 96px;

        .button-text {
          font-size: 14px;
          line-height: 150%;
        }
      }
    }

    &__title {
      font-size: 60px;
      line-height: 125%;
      margin-bottom: 0;
    }

    &__subtitle {
      font-size: 45px;
      line-height: 130%;
    }

    &__description {
      font-size: 20px;
      line-height: 130%;
    }
  }

  @media screen and (max-width: 768px) {
    background: linear-gradient(180deg, rgba(17, 18, 19, 0) 46.57%, #111213 70.94%);

    &__text-content {
      :deep(.ui-button) {
        padding: 12px 96px;
        width: 100%;
      }
    }

    &__title {
      font-size: 48px;
      line-height: 130%;
    }

    &__subtitle {
      font-size: 31px;
      line-height: 130%;
    }
  }
}
</style>

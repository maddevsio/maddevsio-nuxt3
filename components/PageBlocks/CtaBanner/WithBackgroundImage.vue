<script setup lang="ts">
import { h, type PropType } from 'vue'
import { CtaBannerWithBackgroundImage } from '~/components/PageBlocks/CtaBanner/classes/CtaBannerWithBackgroundImage'
import type {
  CtaBannerWithBackgroundImageProps,
} from '~/components/PageBlocks/CtaBanner/interfaces/ICtaBannerWithBackgroundImage'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CtaBannerWithBackgroundImageProps>,
    default: () => ({}),
  },
})
const ctaBanner = new CtaBannerWithBackgroundImage(slice)
const {
  title,
  titleTag,
  description,
  showButton,
  buttonText,
  showModal,
  backgroundColor,
  backgroundImage,
  enableImageOverlay,
  // modalContactMeRef,
  linkToPage,
} = ctaBanner

const VNodeTitle = () => h(titleTag, { innerHTML: title })
</script>
<template>
  <div
    class="cta-banner-slice-with-background-image"
    :style="{ 'backgroundColor': backgroundColor }"
  >
    <div class="container">
      <div class="cta-banner-slice-with-background-image__container">
        <div
          v-if="enableImageOverlay"
          class="cta-banner-slice-with-background-image__overlay"
        />
        <div class="cta-banner-slice-with-background-image__text-content">
          <VNodeTitle
            v-if="title"
            class="cta-banner-slice-with-background-image__title"
          />
          <p
            v-if="description"
            class="cta-banner-slice-with-background-image__description"
            v-html="description"
          />
          <div
            class="cta-banner-slice-with-background-image__button-wrapper"
          >
            <SharedUIButtonPowerCustom
              v-if="showButton"
              :label="buttonText"
              background-color="#EC1C24"
              hover-background-color="#EC1C24"
              :show-arrow="true"
              :is-outlined="false"
              border-color="#EC1C24"
              label-color="#fff"
              hover-label-color="#fff"
              :click-handler="showModal"
              :is-link="Boolean(linkToPage.url)"
              :is-external-link="!linkToPage.ourDomain"
              :link-to-page="linkToPage.url"
            />
          </div>
        </div>
        <img
          v-if="backgroundImage.url"
          loading="lazy"
          :src="backgroundImage.url"
          :alt="backgroundImage.alt || 'cta banner image'"
          :width="backgroundImage.dimensions.width"
          :height="backgroundImage.dimensions.height"
          class="cta-banner-slice-with-background-image__image"
        >
      </div>
    </div>
    <!--    <ContactMeModal-->
    <!--      ref="modalContactMeRef"-->
    <!--      :location="'\'Let`s talk\' button, main start screen component'"-->
    <!--      :email-subject="emailSubjectGlobal"-->
    <!--    />-->
  </div>
</template>
<style scoped lang="scss">
.cta-banner-slice-with-background-image {
  &__container {
    position: relative;
    padding: 70px 51px;
    border-radius: 9px;
    overflow: hidden;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(90.13deg, rgba(0, 0, 0, 0) 0.1%, rgba(0, 0, 0, 0.6) 32.85%, rgba(0, 0, 0, 0.6) 66.63%, rgba(0, 0, 0, 0) 99.89%);
    mix-blend-mode: multiply;
    filter: blur(2px);
  }

  &__text-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 24px;
  }

  &__title,
  &__description {
    @include font('Inter', 45px, 700);
    line-height: 130%;
    color: $text-color--white-primary;
  }

  &__description {
    font-size: 21px;
    line-height: 148%;
    font-weight: 400;
  }

  &__button-wrapper {
    width: 20%;
    max-width: 240px;
    min-width: 167px;
    margin-top: 18px;
  }

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 0;
  }

  @media screen and (max-width: 870px) {
    &__container {
      padding: 31px 51px;
    }

    &__text-content {
      row-gap: 12px;
    }

    &__title {
      font-size: 31px;
    }

    &__description {
      font-size: 18px;
    }

    &__button-wrapper {
      margin-top: 9px;
    }
  }

  @media screen and (max-width: 550px) {
    &__container {
      padding: 35px 13px;
    }

    &__text-content {
      row-gap: 6px;
    }

    &__title {
      font-size: 25px;
      width: 85%;
    }

    &__description {
      font-size: 14px;
      line-height: 150%;
    }

    &__button-wrapper {
      margin-top: 18px;
    }
  }
}
</style>

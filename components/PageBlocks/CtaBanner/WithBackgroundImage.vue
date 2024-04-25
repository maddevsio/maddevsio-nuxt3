<script setup lang="ts">
import { h, type PropType, type VNodeRef } from 'vue'
import { transformLineSeparator } from '~/utils/transformLineSeparator'
import { contactMeClickEvent } from '~/analytics/events'
interface CtaBannerWithBackgroundImageProps {
  primary: {
    title: string
    titleTag: string
    description: string
    showButton: boolean
    buttonText: string
    backgroundImage: {
      url: string
      alt: string
      dimensions: {
        width: number
        height: number
      }
    }
    backgroundColor: string | null
    enableImageOverlay: boolean
    linkToPage: {
      url: string
    }
  }
}

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CtaBannerWithBackgroundImageProps>,
    default: () => ({}),
  },
})

const title = transformLineSeparator(slice.primary.title, 'string') || ''
const titleTag = slice.primary.titleTag || 'h2'
const description = transformLineSeparator(slice.primary.description, 'string') || ''
const showButton = slice.primary.showButton === null ? true : slice.primary.showButton
const buttonText = slice.primary.buttonText || 'Contact us'
const backgroundImage = slice.primary.backgroundImage || {
  url: '',
  alt: '',
  dimensions: {
    width: 0,
    height: 0,
  },
}

const backgroundColor = setSliceBackground(slice.primary.backgroundColor || 'black')
const enableImageOverlay = slice.primary.enableImageOverlay === null ? true : slice.primary.enableImageOverlay
const linkToPage = slice.primary.linkToPage.url ? checkAndExtractDomain(slice.primary.linkToPage.url) : { ourDomain: false, url: '' }

const modalContactMeRef = ref<VNodeRef | null>(null)
const isShowModal = ref(false)
const showModal = async () => {
  isShowModal.value = true
  await delay(200)
  if (!modalContactMeRef.value?.show) { return }
  modalContactMeRef.value.show()
  contactMeClickEvent.send('CTA Banner with background image component')
}

const VNodeTitle = () => h(titleTag, { innerHTML: title })
const { emailSubject } = storeToRefs(useEmailSubjectStore())
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
    <LazyClientOnly>
      <Teleport to="body">
        <NuxtLazyHydrate :on-interaction="isShowModal">
          <LazyWidgetsModalContactMe
            v-if="isShowModal"
            ref="modalContactMeRef"
            :location="'CtaBanner button'"
            :email-subject="emailSubject"
          />
        </NuxtLazyHydrate>
      </Teleport>
    </LazyClientOnly>
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

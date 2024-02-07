<script setup lang="ts">
import type {
  StartScreenImageRightAndButtonProps,
} from '~/components/StartScreen/interfaces/IStartScreenImageRightAndButton'
import { StartScreenImageRightAndButton } from '~/components/StartScreen/classes/StartScreenImageRightAndButton'

interface Props {
  slice: StartScreenImageRightAndButtonProps
}

const { slice } = defineProps<Props>()
const {
  btnText,
  imageOpacity,
  sliceBackground,
  sliceGradient,
  title,
  subtitle,
  image,
  rightImage,
  // ebookImage,
  // ebookName,
  // ebookPath,
  modal,
  // btnLink,
  // sendPulseTemplateId,
} = new StartScreenImageRightAndButton(slice)

const sectionText = ref(null)
// const modalEbook = ref(null)
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
const showModalEbook = () => { // TODO: Needs finishing ebook modal form
  console.log('Click to show modal ebook')
  // if (!modalEbook.value.show) return
  // modalEbook.value.show()
}
</script>
<template>
  <section
    id="transparent-header-area"
    data-testid="start-screen-slice-with-image"
    class="start-screen-slice start-screen-slice-with-image"
    :style="{ background: sliceGradient }"
  >
    <SharedUIPictureFullScreen
      :src="image.url"
      :height="639"
      :width="1680"
      :alt="image.alt || 'Background image'"
      :lazy="false"
      :style="{
        opacity: imageOpacity,
        backgroundColor: sliceBackground,
      }"
      class="start-screen-slice__image"
    />
    <div class="container">
      <div
        ref="sectionText"
        :style="{ opacity: sectionTextOpacity }"
        class="start-screen-slice__flex-wrapper"
      >
        <div class="start-screen-slice__content">
          <div class="start-screen-slice__titles-wrapper">
            <PrismicRichText
              v-if="$prismic.asText(title)"
              :field="title"
              data-testid="start-screen-slice__title"
              class="start-screen-slice__title"
              :html-serializer="prismicHtmlSerializer"
            />
          </div>
          <PrismicRichText
            v-if="$prismic.asText(subtitle)"
            data-testid="start-screen-slice__subtitle"
            class="start-screen-slice__subtitle"
            :field="subtitle"
            :html-serializer="prismicHtmlSerializer"
          />
          <div class="start-screen-slice__btn-box">
            <LazySharedUIButton
              v-if="modal === 'download-pdf'"
              class="start-screen-slice__btn"
              @click="showModalEbook"
            >
              {{ btnText }}
              <img
                width="20"
                height="20"
                src="@/assets/img/common/arrow-up-right.svg"
                alt="Arrow"
              >
            </LazySharedUIButton>
          </div>
        </div>
        <div class="start-screen-slice__img-box">
          <img
            :src="rightImage && rightImage.url"
            :alt="(rightImage && rightImage.alt) || 'Image'"
            width="259.69"
            height="380.25"
            class="start-screen-slice__img-box-image"
            data-testid="right-image"
          >
        </div>
      </div>
    </div>
    <!--    <ModalEbook-->
    <!--      id="sent-ebook"-->
    <!--      ref="modalEbook"-->
    <!--      :ebook-sub-title="title"-->
    <!--      :ebook-path="ebookPath"-->
    <!--      :ebook-name="ebookName"-->
    <!--      :ebook-image="ebookImage"-->
    <!--      :send-pulse-template-id="sendPulseTemplateId"-->
    <!--    />-->
  </section>
</template>
<style lang="scss" scoped>
.start-screen-slice {
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213);
  overflow: hidden;
  padding-top: 268px;
  height: auto;
  min-height: 568px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding-top: 147px;
  }

  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    background-color: $bgcolor--black;
  }

  &__title {
    color: $text-color--white-primary;
    margin-bottom: 70px;
    max-width: 650px;
    @media screen and (max-width: 580px) {
      margin-bottom: 32px;
    }

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font("Inter", 64px, 700);
      line-height: 72px;
      letter-spacing: -2px;
      @media screen and (max-width: 580px) {
        @include font("Inter", 42px, 600);
        line-height: 48px;
      }
    }
  }

  &__subtitle {
    @include font("Inter", 32px, 600);
    line-height: 44px;
    letter-spacing: -1px;
    color: $text-color--white-primary;
    max-width: 704px;
    margin-bottom: 50px;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 44px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 35px;
    }

    @media screen and (max-width: 580px) {
      font-size: 24px;
      line-height: 35px;
    }
  }

  :deep(br) {
    @media only screen and (max-width: 520px) {
      display: none;
    }
  }

  &__flex-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  &__content {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &__img-box {
    width: 25%;
    position: relative;
    top: -60px;
    @media screen and (min-width: 1025px) {
      margin-right: 75px;
    }
    @media screen and (max-width: 1024px) {
      width: 45%;
    }
    @media screen and (max-width: 768px) {
      width: 211px;
      margin-bottom: 83px;
    }
    @media screen and (max-width: 580px) {
      margin-bottom: 47px;
    }
  }

  &__img-box-image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__btn-box {
    width: 100%;
    display: flex;

    a,
    button {
      @include font("Inter", 16px, 600);
      letter-spacing: -0.4px;
      line-height: 20px;
      color: $text-color--white-primary;
      margin-right: auto;
    }

    button {
      display: flex;
      align-items: center;
      padding: 14px 132.5px;
      margin-right: 32px;
      @media screen and (max-width: 580px) {
        padding: 14px 24px;
      }

      @media screen and (max-width: 880px) {
        padding: 14px 100px;
      }

      img {
        margin-left: 7px;
      }
    }

    a {
      text-decoration-line: underline;
      text-underline-offset: 2px;
    }
  }
}
</style>

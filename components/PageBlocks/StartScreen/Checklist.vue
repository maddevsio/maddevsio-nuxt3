<script setup lang="ts">
import type { StartScreenChecklistProps } from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenChecklist'
import { StartScreenChecklist } from '~/components/PageBlocks/StartScreen/classes/StartScreenChecklist'

interface Props {
  slice: StartScreenChecklistProps
}

const { slice } = defineProps<Props>()
const {
  image,
  checklistImage,
  title,
  buttonText,
  // checklistPdfPath,
  // sendpulseTemplateID,
  // checklistName,
  // checklistFormUID,
} = new StartScreenChecklist(slice)

const { isMobile } = useDevice()
const { $getMediaFromS3 } = useMediaFromS3()
const sectionText = ref<HTMLElement | null>(null)
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
// const modalChecklistRef = ref(null)
const showModal = () => { // TODO: Needs finishing checklist modal
  console.log('Slick show modal')
  // if (!modalChecklistRef?.value?.show) return
  // modalChecklistRef?.value?.show()
}
</script>
<template>
  <section
    id="transparent-header-area"
    class="checklist-start-screen"
  >
    <SharedUIPictureFullScreen
      v-if="image.url"
      :src="image.url.replace(/\?.*/, '?auto=compress,format')"
      :height="680"
      :width="1728"
      :alt="image.alt || 'Start Screen Background'"
      :lazy="false"
      class="checklist-start-screen__background-image"
    />
    <div
      ref="sectionText"
      :style="{ opacity: sectionTextOpacity }"
      class="container checklist-start-screen__wrapper"
    >
      <h1
        v-if="title"
        class="checklist-start-screen__title"
        v-html="title"
      />
      <LazySharedUIButton
        class="checklist-start-screen__btn"
        @click="showModal"
      >
        {{ buttonText || 'Download the checklist' }}
        <img
          width="20"
          height="20"
          :src="$getMediaFromS3('images/core/common/arrow-up-right.svg')"
          alt="Arrow"
        >
      </LazySharedUIButton>
      <NuxtImg
        v-if="checklistImage.url"
        provider="prismic"
        :src="checklistImage.url.replace(/\?.*/, '?auto=compress,format')"
        :alt="(checklistImage && checklistImage.alt) || 'Checklist Image'"
        :width="isMobile ? 420.38 : 849"
        :height="isMobile ? 332.63 : 671"
        sizes="mobile:420px tablet:512px desktop:849px"
        :style="{ opacity: sectionTextOpacity }"
        class="checklist-start-screen__checklist-image"
      />
    </div>
    <!--    <client-only>-->
    <!--      <ChecklistModal-->
    <!--        ref="modalChecklistRef"-->
    <!--        :location="`Form in '${title}' page`"-->
    <!--        :sendpulse-template-i-d="sendpulseTemplateID"-->
    <!--        :checklist-path-on-s3="checklistPdfPath"-->
    <!--        :checklist-name="checklistName"-->
    <!--        :form-uid="checklistFormUID"-->
    <!--        :email-subject="`${checklistName} by Mad Devs`"-->
    <!--        :image="checklistImage"-->
    <!--      />-->
    <!--    </client-only>-->
  </section>
</template>
<style scoped lang="scss">
.checklist-start-screen {
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  padding-top: 236px;
  height: auto;
  min-height: 711px;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    padding-top: 190px;
    min-height: 350px;
  }

  @media screen and (max-width: 1200px) {
    padding-top: 150px;
  }

  @media screen and (max-width: 1090px) {
    padding-top: 100px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }

  @media screen and (max-width: 500px) {
    padding-top: 65px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 18, 19, 0) 70%, #111213);
    z-index: 1;
  }

  &__background-image {
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

  &__checklist-image {
    display: block;
    z-index: 0;
    position: absolute;
    top: -190px;
    right: -149px;

    @media screen and (max-width: 1440px) {
      top: -135px;
      right: 41px;
      width: 42%;
      height: auto;
    }

    @media screen and (max-width: 1200px) {
      width: 539.39px;
    }

    @media screen and (max-width: 1090px) {
      top: -80px;
      width: 420.39px;
    }

    @media screen and (max-width: 990px) {
      order: 1;
      position: relative;
      left: -75px;
      top: 5px;
      right: unset;
      bottom: unset;
    }

    @media screen and (max-width: 500px) {
      width: 380.39px;
      left: -60px;
      top: 0;
    }
  }

  &__wrapper {
    position: relative;
    z-index: 2;
    min-height: 338px;

    @media screen and (max-width: 990px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__title {
    @include font('Inter', 68px, 700);
    line-height: 72px;
    letter-spacing: -2px;
    color: $text-color--white-primary;
    max-width: 735px;
    margin-bottom: 72px;

    @media screen and (max-width: 1440px) {
      font-size: 60px;
      max-width: 680px;
    }

    @media screen and (max-width: 1200px) {
      font-size: 45px;
      line-height: 109%;
      margin-bottom: 32px;
      max-width: 600px;
      margin-top: 50px;
      letter-spacing: unset;
    }

    @media screen and (max-width: 990px) {
      order: 2;
    }

    @media screen and (max-width: 768px) {
      margin-top: 32px;
      font-size: 31px;
      line-height: 130%;
    }

    @media screen and (max-width: 500px) {
      max-width: 100%;
      margin-top: 14px;
    }
  }

  :deep(button) {
    @include font("Inter", 16px, 600);
    letter-spacing: -0.4px;
    line-height: 20px;
    color: $text-color--white-primary;
    display: flex;
    align-items: center;
    padding: 14px 39.5px;
    margin-right: 32px;

    @media screen and (max-width: 1200px) {
      max-width: 295px;
      padding-inline: 15px;
    }

    @media screen and (max-width: 990px) {
      order: 3;
    }

    @media screen and (max-width: 500px) {
      padding: 14px 24px;
      box-sizing: border-box;
      max-width: 100%;
      width: 100%;
    }

    :deep(img) {
      margin-left: 7px;
    }
  }
}
</style>

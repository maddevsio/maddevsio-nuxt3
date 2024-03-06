<script setup lang="ts">
import type { PropType } from 'vue'
import type { ChecklistFormBannerProps } from '~/components/PageBlocks/Form/interfaces/IChecklistFormBanner'
import { ChecklistFormBanner } from '~/components/PageBlocks/Form/classes/ChecklistFormBanner'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ChecklistFormBannerProps>,
    default: () => ({}),
  },
})

const {
  title,
  checklistImage,
  checklistName,
  checklistPdfPath,
  sendpulseTemplateID,
} = new ChecklistFormBanner(slice)
</script>
<template>
  <section class="checklist-form-banner">
    <div class="container">
      <div class="checklist-form-banner__wrapper">
        <div class="checklist-form-banner__form">
          <h3
            v-if="title"
            class="checklist-form-banner__title"
            v-html="title"
          />
          <LazyWidgetsFormChecklist
            form-location="Checklist Banner Slice"
            form-uid="checklist-banner"
            :email-subject="`${checklistName} Checklist by Mad Devs`"
            :checklist-name="checklistName"
            :checklist-path-on-s3="checklistPdfPath"
            :sendpulse-template-i-d="sendpulseTemplateID"
          />
        </div>
        <div class="checklist-form-banner__image-wrapper">
          <img
            v-if="checklistImage.url"
            loading="lazy"
            :src="checklistImage.url"
            :alt="checklistImage.alt || 'Image'"
            :width="checklistImage.dimensions.width"
            :height="checklistImage.dimensions.height"
            class="checklist-form-banner__image"
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.checklist-form-banner {
  background: $bgcolor--white-primary;

  &__wrapper {
    position: relative;
    background: $bgcolor--cultured;
    border-radius: 4px;
    padding-left: 80px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    max-height: 400px;

    @media screen and (max-width: 940px) {
      flex-direction: column-reverse;
      padding-left: 0;
      max-height: unset;
    }
  }

  &__form {
    width: 31%;
    max-width: 349px;
    min-width: 349px;
    padding: 29px 0 8px;

    * > * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 940px) {
      width: 100%;
      max-width: 100%;
      padding-inline: 80px;
      box-sizing: border-box;
    }

    @media screen and (max-width: 640px) {
      padding: 17px 24px 0;
      min-width: unset;
    }
  }

  &__title {
    @include font('Inter', 24px, 700);
    line-height: 130%;
    letter-spacing: -1.3px;
    color: $text-color--black-pale;
    margin-bottom: 32px;
  }

  &__image-wrapper {
    width: 63%;
    min-width: 731px;

    @media screen and (max-width: 940px) {
      display: none;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
}
</style>

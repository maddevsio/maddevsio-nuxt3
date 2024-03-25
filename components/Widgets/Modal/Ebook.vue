<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

defineProps({
  location: {
    type: String,
    default: '',
  },

  ebookSubTitle: {
    type: [Array, String],
    default: () => [],
  },

  ebookPath: {
    type: String,
    default: '',
  },

  ebookName: {
    type: String,
    default: '',
  },

  ebookImage: {
    type: Object as PropType<ImageField>,
    required: true,
  },

  sendPulseTemplateId: {
    type: Number,
    default: null,
  },
})

const getRandomTitle = (sendPulseTemplateId: number) => {
  const titles = [
    'How to negotiate with an IT vendor?',
    'Are you looking for software development services?',
    'Are an aspiring IT company searching for useful information?',
    'Are you interested in pricing information for custom software development?',
  ]

  if (sendPulseTemplateId === 791537) {
    return 'Are you wondering what processes and principles Mad Devs follow when developing software?'
  }
  if (sendPulseTemplateId === 837968) { // Engineering’s Handbook sendpulse template ID
    return 'Are you interested in top tips for improving communication in development teams and with clients?'
  }

  if (sendPulseTemplateId === 938536) {
    const transparentTitles = [
      'What is the difference between internal and external stakeholders?',
      'Who are the most important stakeholders?',
      'How to communicate with stakeholders?',
    ]

    return transparentTitles[Math.floor(Math.random() * transparentTitles.length)]
  }
  const randomIndex = Math.floor(Math.random() * titles.length)
  return titles[randomIndex]
}

const {
  show,
  styles,
  modalWindow,
  isShowModal,
} = useModalData()

defineExpose({
  show,
  isShowModal,
})
</script>

<template>
  <LazyWidgetsModalBase
    ref="modalWindow"
    :class="styles['ebook-form-modal']"
    where-is-called="ebook"
    :ebook-sendpulse-template-id="sendPulseTemplateId"
  >
    <div
      :class="styles['ebook-form-modal__content']"
    >
      <img
        loading="lazy"
        :class="styles['ebook-form-modal__ebook-image']"
        width="110"
        height="155"
        :src="ebookImage.url"
        :alt="ebookImage.alt || 'Image'"
      >
      <LazyWidgetsFormEbookFormInModal
        form-uid="ebook-modal"
        :ebook-name="ebookName"
        :ebook-path="ebookPath"
        :ebook-title="getRandomTitle(sendPulseTemplateId)"
        :send-pulse-template-id="sendPulseTemplateId"
        :ebook-sub-title="ebookSubTitle"
      />
    </div>
  </LazyWidgetsModalBase>
</template>
<style module lang="scss">
@import './styles/ebookModal.module';
</style>

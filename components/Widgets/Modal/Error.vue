<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: '',
  },

  formUid: {
    type: [String, Number],
    default: 'modal',
  },
})

const {
  show,
  styles,
  modalWindow,
} = useModalData()
const config = useRuntimeConfig()
const { $getMediaFromS3 } = useMediaFromS3()
const mailCV = config.public.emailCV

defineExpose({
  show,
})
</script>
<template>
  <LazyWidgetsModalBase
    ref="modalWindow"
    :class="styles['error-modal']"
  >
    <div
      :class="styles['error-modal__body']"
    >
      <img
        :src="$getMediaFromS3('images/core/error-modal-icon.svg')"
        alt="Something went wrong"
        width="132"
        height="132"
        :class="styles['error-modal__icon']"
      >
      <p
        :class="styles['error-modal__title']"
      >
        Oops, something went wrong
      </p>
      <p
        :class="styles['error-modal__description']"
      >
        There were problems submitting the form. We have already informed our developers about this and will fix everything soon.
      </p>
      <p
        :class="styles['error-modal__contact-description']"
      >
        In the meantime, please write to us by email
        <a
          :href="`mailto:${mailCV}`"
          :class="styles['error-modal__link']"
        >
          {{ mailCV }}
        </a> Our recruiters will contact you soon.
      </p>
    </div>
  </LazyWidgetsModalBase>
</template>
<style module lang="scss">
@import "./styles/errorModal.module";
</style>

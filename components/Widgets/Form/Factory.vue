<script setup lang="ts">
import type { PropType } from 'vue'
import { VueRecaptcha } from 'vue-recaptcha'
import type { FormTypes } from '~/components/Widgets/Form/interfaces/forms/FormTypes'

const {
  formId,
  form,
} = defineProps({
  formId: {
    type: String,
    required: true,
  },

  styles: {
    type: Object,
    default: () => ({}),
  },

  form: {
    type: Object as PropType<FormTypes>,
    required: true,
  },

  customError: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
const route = useRoute()
const { $eventBus } = useNuxtApp()
const requestRecaptcha = () => form.requestRecaptcha()
const onSubmitVerifiedForm = (token: string) => {
  form.onSubmitVerifiedForm({
    token,
    router,
    route,
    $eventBus,
  })
}
const onError = (err: string) => form.onError(err)
const onExpired = () => form.onExpired()
const {
  successMessage,
  recaptchaRef,
  reCaptchaSiteKey,
  error,
} = form

const showSuccessMessage = successMessage.show
const showSuccessFullMessage = successMessage.showSuccessfulMessage
</script>
<template>
  <form
    :id="formId"
    @submit.prevent="requestRecaptcha"
  >
    <slot v-if="!showSuccessMessage && !error" />
    <LazyWidgetsFormUISuccessMessage
      v-if="showSuccessMessage && showSuccessFullMessage && !error"
      :success-message="successMessage"
    />
    <LazySharedUIError
      v-if="error && !customError"
      :error="error.toString()"
    />
    <VueRecaptcha
      ref="recaptchaRef"
      :sitekey="reCaptchaSiteKey"
      size="invisible"
      badge="bottomleft"
      @verify="onSubmitVerifiedForm"
      @expired="onExpired"
      @error="onError"
    />
  </form>
</template>

<script setup lang="ts">
import type { IFeedbackForm } from '~/components/Widgets/Form/interfaces/forms/IFeedbackForm'

const props = defineProps({
  formUid: {
    type: [String, Number],
    required: true,
  },

  formLocation: {
    type: String,
    required: true,
  },

  emailSubject: {
    type: String,
    default: '',
  },

  successMessageTitle: {
    type: String,
    default: '',
  },

  successMessageDescription: {
    type: String,
    default: '',
  },
})

const { form, styles } = useForm({
  methodName: 'makeFeedbackForm',
  options: {
    formUid: props.formUid,
    formLocation: props.formLocation,
    emailSubject: props.emailSubject,
    successMessageTitle: props.successMessageTitle,
    successMessageDescription: props.successMessageDescription,
  },
})
const {
  fields: inputFields,
  textarea,
  buttons,
  formID: uid,
} = form as IFeedbackForm
</script>

<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="uid"
    :class="styles['feedback-form']"
  >
    <div
      :class="styles['feedback-form__input-group']"
    >
      <LazyWidgetsFormUIInputField
        :form-field-instance="inputFields!.fullName"
        :class="styles['feedback-form__input-field--full-width']"
      />
      <LazyWidgetsFormUIInputField
        :form-field-instance="inputFields!.email"
        :class="styles['feedback-form__input-field--full-width']"
      />
      <LazyWidgetsFormUITextareaField
        :form-field-instance="textarea!.feedback"
        :rows-count="5"
        :class="styles['feedback-form__input-field--full-width']"
      />
    </div>
    <div
      :class="styles['feedback-form__footer']"
    >
      <LazyWidgetsFormUIButtonField
        :button-instance="buttons.submitButton"
      />
    </div>
  </LazyWidgetsFormFactory>
</template>

<style module lang="scss">
@import "./FeedbackForm.module";
</style>
<style scoped lang="scss">
:deep(.success-message) {
  h5, p {
    color: $text-color--white-primary;
  }

  h5 {
    margin-top: 15px;
  }
}
</style>

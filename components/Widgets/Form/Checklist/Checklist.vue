<script setup lang="ts">
import type { IChecklistForm } from '~/components/Widgets/Form/interfaces/forms/IChecklistForm'

const props = defineProps({
  formUid: {
    type: String,
    default: 'checklist',
  },

  checklistName: {
    type: String,
    default: '',
  },

  sendpulseTemplateID: {
    type: [String, Number],
    default: '',
  },

  checklistPathOnS3: {
    type: String,
    default: '',
  },

  isModalChecklist: {
    type: Boolean,
    default: false,
  },

  buttonText: {
    type: String,
    default: 'Send me the checklist',
  },
})

const { form, styles } = useForm({
  methodName: 'makeChecklistForm',
  options: {
    formUid: props.formUid,
    formLocation: props.checklistName,
    sendpulseTemplateID: props.sendpulseTemplateID,
    checklistPathOnS3: props.checklistPathOnS3,
    checklistName: props.checklistName,
    isModalChecklist: props.isModalChecklist,
    buttonText: props.buttonText,
  },
})

const {
  formID,
  fields,
  buttons,
} = form as IChecklistForm
</script>
<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="formID"
    :class="styles['checklist-form']"
  >
    <div :class="styles['checklist-form__input-group']">
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.fullName"
        :form-field-instance="fields.fullName"
      />
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.email"
        :form-field-instance="fields.email"
      />
    </div>
    <LazyWidgetsFormUIButtonField
      v-if="buttons && buttons.submitButton"
      :button-instance="buttons.submitButton"
    />
    <LazyWidgetsFormUIPrivacyPolicyNotice
      :privacy-text="'By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the checklist.'"
      :class="styles['checklist-form__privacy-policy']"
    />
    <div
      v-if="form.error.value"
      :class="styles['checklist-form__error']"
    >
      {{ form.error.value }}
    </div>
  </LazyWidgetsFormFactory>
</template>
<style module lang="scss">
@import "checklistForm.module";
</style>

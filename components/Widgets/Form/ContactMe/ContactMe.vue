<script setup lang="ts">
import type { IContactMeForm } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

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
})

const { form, styles } = useForm({
  methodName: 'makeContactMeForm',
  options: {
    formUid: props.formUid,
    formLocation: props.formLocation,
    emailSubject: props.emailSubject,
  },
})
const {
  formTitle,
  fields: inputFields,
  textarea,
  buttons,
  checkBoxes,
  formID: uid,
} = form as IContactMeForm
</script>
<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="uid"
    :class="styles['contact-me-form']"
  >
    <h5
      :class="styles['contact-me-form__title']"
    >
      {{ formTitle }}
    </h5>
    <div
      :class="styles['contact-me-form__input-group']"
    >
      <LazyWidgetsFormUIInputField
        :form-field-instance="inputFields!.fullName"
        :class="styles['contact-me-form__input-field--full-width']"
      />
      <LazyWidgetsFormUIInputField
        v-for="(field, fieldIndex) in Object.keys(inputFields).slice(1)"
        :key="`${inputFields[field].elementId}-${fieldIndex}`"
        :form-field-instance="inputFields[field]"
        :class="styles['contact-me-form__input-field']"
      />
      <LazyWidgetsFormUITextareaField
        :form-field-instance="textarea!.description"
        :class="styles['contact-me-form__input-field--full-width']"
      />
    </div>
    <div
      :class="styles['contact-me-form__footer']"
    >
      <div
        :class="styles['contact-me-form__agreement']"
      >
        <LazyWidgetsFormUIPrivacyPolicyNotice />
        <LazyWidgetsFormUICheckboxField
          :checkbox-instance="checkBoxes!.newsLetter"
        />
      </div>
      <LazyWidgetsFormUIButtonField
        :button-instance="buttons.submitButton"
      />
    </div>
  </LazyWidgetsFormFactory>
</template>
<style module lang="scss">
@import './contactMeForm.module';
</style>

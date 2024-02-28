<script setup lang="ts">
const props = defineProps({
  formUid: {
    type: [String, Number],
    required: true,
  },

  formLocation: {
    type: String,
    required: true,
  },

  formTitle: {
    type: String,
    default: 'Tell Us About Your Project',
  },

  formButtonText: {
    type: String,
    default: 'Order a project now',
  },
})

const { form, styles } = useForm({
  methodName: 'makeContactUsFooterForm',
  options: {
    formTitle: props.formTitle,
    formUid: props.formUid,
    formLocation: props.formLocation,
  },
})

const {
  fields: inputFields,
  textarea,
  buttons,
  checkBoxes,
  formID: uid,
} = form
</script>

<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="uid"
    :class="styles['contact-us-footer-form']"
  >
    <h3
      :class="styles['contact-us-footer-form__title']"
    >
      {{ formTitle }}
    </h3>
    <div
      :class="styles['contact-us-footer-form__input-group']"
    >
      <LazyWidgetsFormUIInputField
        v-for="(field, fieldIndex) in Object.keys(inputFields)"
        :key="`${inputFields[field].elementId}-${fieldIndex}`"
        :form-field-instance="inputFields[field]"
        :class="styles['contact-us-footer-form__input-field']"
      />
      <LazyWidgetsFormUITextareaField
        :form-field-instance="textarea!.description"
        :class="styles['contact-us-footer-form__input-field']"
        :rows-count="5"
      />
    </div>
    <div
      :class="styles['contact-us-footer-form__footer']"
    >
      <div
        :class="styles['contact-us-footer-form__agreement']"
      >
        <LazyWidgetsFormUIPrivacyPolicyNotice />
        <LazyWidgetsFormUICheckboxField
          :checkbox-instance="checkBoxes!.newsLetter"
        />
      </div>
      <LazyWidgetsFormUIButtonField
        :button-instance="buttons.submitButton"
      >
        <span>{{ formButtonText }}</span>
      </LazyWidgetsFormUIButtonField>
    </div>
  </LazyWidgetsFormFactory>
</template>

<style module lang="scss">
@import './contactUsFooterForm.module';
</style>

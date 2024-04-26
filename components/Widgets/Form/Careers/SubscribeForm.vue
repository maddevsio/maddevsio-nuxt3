<script setup lang="ts">
const props = defineProps({
  formUid: {
    type: [String, Number],
    required: true,
    default: 'careers-subscribe',
  },

  formTitle: {
    type: String,
    default: 'Didn\'t find a suitable position?',
  },

  formDescription: {
    type: String,
    default: 'Leave your contact information and select a position from the list. We will send you a message as soon as we receive it.',
  },
})

const { form, styles } = useForm({
  methodName: 'makeCareersSubscribeForm',
  options: {
    formUid: props.formUid,
    formTitle: props.formTitle,
    formDescription: props.formDescription,
  },
})

const {
  formID,
  fields,
  buttons,
  checkBoxes,
} = form
</script>

<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="formID"
    :class="styles['careers-subscribe-form']"
  >
    <h4
      :class="styles['careers-subscribe-form__title']"
    >
      {{ formTitle }}
    </h4>
    <p :class="styles['careers-subscribe-form__description']">
      {{ formDescription }}
    </p>
    <div :class="styles['careers-subscribe-form__input-group']">
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.fullName"
        :form-field-instance="fields.fullName"
        :class="styles['careers-subscribe-form__input']"
      />
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.email"
        :form-field-instance="fields.email"
        :class="styles['careers-subscribe-form__input']"
      />
    </div>
    <LazyWidgetsFormUIPrivacyPolicyNotice
      :class="styles['careers-subscribe-form__privacy-policy']"
    />
    <LazyWidgetsFormUICheckboxField
      v-if="checkBoxes && checkBoxes.newsLetter"
      :checkbox-instance="checkBoxes.newsLetter"
    />
    <LazyWidgetsFormUIButtonField
      v-if="buttons && buttons.submitButton"
      :button-instance="buttons.submitButton"
    />
  </LazyWidgetsFormFactory>
</template>

<style module lang="scss">
@import "careersSubscribeForm.module";
</style>

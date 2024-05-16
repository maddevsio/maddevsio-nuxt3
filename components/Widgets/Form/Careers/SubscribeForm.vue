<script setup lang="ts">
import type { PropType } from 'vue'
import type { SelectOption } from '~/interfaces/common/commonInterfaces'
import type { ICareersSubscribeForm } from '~/components/Widgets/Form/interfaces/forms/ICareersSubscribeForm'

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

  selectOptions: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
})

const { form, styles } = useForm({
  methodName: 'makeCareersSubscribeForm',
  options: {
    formUid: props.formUid,
    formTitle: props.formTitle,
    formDescription: props.formDescription,
    selectOptions: props.selectOptions,
  },
})

const {
  formID,
  fields,
  buttons,
  selects,
  checkBoxes,
} = form as ICareersSubscribeForm
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
    <LazyWidgetsFormUISelectField
      v-if="selects && selects.vacancyCategorySubscription"
      :select-field-instance="selects.vacancyCategorySubscription"
      :class="styles['careers-subscribe-form__select']"
    />
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

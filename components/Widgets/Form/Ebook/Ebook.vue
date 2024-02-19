<script setup lang="ts">
import type { PropType } from 'vue'
import { EbookTemplateIDs, type IEbookForm } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'

const props = defineProps({
  formUid: {
    type: [String, Number],
    required: true,
    default: 'ebook',
  },

  ebookPath: {
    type: String,
    default: '',
  },

  ebookName: {
    type: String,
    default: '',
  },

  location: {
    type: String,
    default: '',
  },

  sendPulseTemplateId: {
    type: Number as PropType<EbookTemplateIDs>,
    default: EbookTemplateIDs.PRICING_STRATEGIES, // default value is a template ID of  "Ebooks - Pricing Strategies"
  },
})

const { form, styles } = useForm({
  methodName: 'makeEbookForm',
  options: {
    formUid: props.formUid,
    formLocation: props.ebookName,
    sendPulseTemplateId: Number(props.sendPulseTemplateId),
    ebookPath: props.ebookPath,
    ebookName: props.ebookName,
  },
})

const {
  formID,
  fields,
  buttons,
  checkBoxes,
} = form as IEbookForm
</script>
<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="formID"
    :class="styles['ebook-form']"
  >
    <div :class="styles['ebook-form__input-group']">
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.fullName"
        :form-field-instance="fields.fullName"
      />
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.email"
        :form-field-instance="fields.email"
      />
    </div>
    <LazyWidgetsFormUIPrivacyPolicyNotice
      :privacy-text="'By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.'"
      :class="styles['ebook-form__privacy-policy']"
    />
    <LazyWidgetsFormUICheckboxField
      v-if="checkBoxes && checkBoxes.newsLetterCheckbox"
      :checkbox-instance="checkBoxes.newsLetterCheckbox"
    />
    <LazyWidgetsFormUIButtonField
      v-if="buttons && buttons.submitButton"
      :button-instance="buttons.submitButton"
    />
  </LazyWidgetsFormFactory>
</template>
<style module lang="scss">
@import "ebookForm.module";
</style>

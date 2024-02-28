<script setup lang="ts">
import type { PropType } from 'vue'
import { EbookTemplateIDs, type IEbookForm } from '~/components/Widgets/Form/interfaces/forms/IEbookForm'

const props = defineProps({
  fullsizeButton: {
    type: Boolean,
    default: false,
  },

  ebookPath: {
    type: String,
    default: '',
  },

  ebookName: {
    type: String,
    default: '',
  },

  ebookTitle: {
    type: String,
    default: '',
  },

  ebookSubTitle: {
    type: [Array, String],
    default: () => [],
  },

  formUid: {
    type: String,
    required: true,
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
    <h2
      v-if="ebookTitle"
      :class="styles['ebook-form__title']"
    >
      {{ ebookTitle }}
    </h2>
    <p
      v-if="ebookSubTitle || (Array.isArray(ebookSubTitle) && $prismic.asText(ebookSubTitle))"
      :class="styles['ebook-form__subtitle']"
    >
      Get your copy of “ {{ Array.isArray(ebookSubTitle) ? $prismic.asText(ebookSubTitle) : ebookSubTitle }}”
    </p>
    <div :class="styles['ebook-form__input-group']">
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.fullName"
        :form-field-instance="fields.fullName"
        :class="styles['ebook-form__input-root-wrapper']"
      />
      <LazyWidgetsFormUIInputField
        v-if="fields && fields.email"
        :form-field-instance="fields.email"
        :class="styles['ebook-form__input-root-wrapper']"
      />
    </div>
    <LazyWidgetsFormUICheckboxField
      v-if="checkBoxes && checkBoxes.newsLetter"
      :checkbox-instance="checkBoxes.newsLetter"
      :class="styles['ebook-form__checkbox']"
    />
    <LazyWidgetsFormUIButtonField
      v-if="buttons && buttons.submitButton"
      :button-instance="buttons.submitButton"
    />
    <LazyWidgetsFormUIPrivacyPolicyNotice
      :privacy-text="'By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.'"
      :class="styles['ebook-form__privacy-policy']"
    />
  </LazyWidgetsFormFactory>
</template>
<style module lang="scss">
@import "ebookFormInModal.module";
</style>

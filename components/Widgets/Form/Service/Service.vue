<script setup lang="ts">
import type { IServiceForm } from '~/components/Widgets/Form/interfaces/forms/IServiceForm'

const props = defineProps({
  formUid: {
    type: [String, Number],
    required: true,
  },

  slice: {
    type: Object,
    default: () => ({}),
  },
})
const $prismic = usePrismic()
const { form, styles } = useForm({
  methodName: 'makeServiceFormWithPrismic',
  options: {
    formUid: props.formUid,
    slice: props.slice,
    $prismic,
  },
})

const {
  formID,
  formTitle,
  formDescription,
  fields,
  radioButtonGroups,
  checkBoxes,
  buttons,
} = form as IServiceForm
</script>
<template>
  <LazyWidgetsFormFactory
    :form-id="formID"
    :form="form"
    :class="styles['service-form']"
  >
    <h5
      :class="styles['service-form__title']"
    >
      {{ formTitle }}
    </h5>
    <PrismicRichText
      v-if="$prismic.asText(formDescription)"
      :field="formDescription"
      :html-serializer="prismicHtmlSerializer"
      :class="styles['service-form__description']"
    />
    <LazyWidgetsFormUIInputField
      v-for="(field, fieldIndex) in Object.keys(fields)"
      :key="`${field}-${fieldIndex}-${formUid}`"
      :form-field-instance="fields[field]"
      :class="styles['service-form__field']"
    />
    <LazyWidgetsFormUIRadioButtonGroup
      :radio-button-group-instance="radioButtonGroups!.serviceFormRadioGroup"
    />
    <LazyWidgetsFormUIPrivacyPolicyNotice />
    <LazyWidgetsFormUICheckboxField
      :checkbox-instance="checkBoxes!.newsLetter"
    />
    <LazyWidgetsFormUIButtonField
      :button-instance="buttons.submitButton"
    />
  </LazyWidgetsFormFactory>
</template>
<style lang="scss" module>
@import "serviceForm.module";
</style>

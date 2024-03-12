<script setup lang="ts">
import type { ICareersForm } from '~/components/Widgets/Form/interfaces/forms/ICareersForm'

const props = defineProps({
  formUid: {
    type: [String, Number],
    required: true,
  },
})
const { $eventBus } = useNuxtApp()
const { form, styles } = useForm({
  methodName: 'makeCareersForm',
  options: {
    formUid: props.formUid,
    vacancyPosition: props.formUid,
    $eventBus,
  },
})

const {
  formID,
  formTitle,
  fields,
  radioButtonGroups,
  buttons,
  errorModal,
} = form as ICareersForm
</script>
<template>
  <LazyWidgetsFormFactory
    :form-id="formID"
    :form="form"
    custom-error
    :class="styles['careers-form']"
  >
    <h5
      :class="styles['careers-form__title']"
    >
      {{ formTitle }}
    </h5>
    <div
      :class="styles['careers-form__field-group']"
    >
      <LazyWidgetsFormUIInputField
        v-if="fields"
        :form-field-instance="fields.fullName"
        :class="styles['careers-form__field']"
      />
      <LazyWidgetsFormUIInputField
        v-if="fields"
        :form-field-instance="fields.phoneNumber"
        :class="styles['careers-form__field']"
      />
      <LazyWidgetsFormUIInputField
        v-if="fields"
        :form-field-instance="fields.email"
        :class="styles['careers-form__field']"
      />
    </div>
    <LazyWidgetsFormUIRadioButtonGroup
      :radio-button-group-instance="radioButtonGroups!.careersRadioGroup"
      :class="styles['careers-form__resume-types']"
    />
    <LazyWidgetsFormUIFileInputField
      v-if="fields && radioButtonGroups!.careersRadioGroup.radioButtonValue.value === 'File containing resume'"
      :form-field-instance="fields.cvFile"
      :class="styles['careers-form__field']"
    />
    <LazyWidgetsFormUIInputField
      v-if="fields && radioButtonGroups!.careersRadioGroup.radioButtonValue.value === 'Link to LinkedIn'"
      :form-field-instance="fields.linkedin"
      :class="[styles['careers-form__field'], styles['careers-form__field-linkedin']]"
    />
    <p
      :class="styles['careers-form__description']"
    >
      <span>*</span> By submitting your application, you consent to the storage of your CV in our database of
      candidates.
      If we have another vacancy that suits you, we may contact you.
    </p>
    <LazyWidgetsFormUIButtonField
      :button-instance="buttons.submitButton"
    />
  </LazyWidgetsFormFactory>
  <ClientOnly>
    <Teleport to="body">
      <LazyWidgetsModalError
        ref="errorModal"
      />
    </Teleport>
  </ClientOnly>
</template>
<style lang="scss" module>
@import "./careersForm.module";
</style>

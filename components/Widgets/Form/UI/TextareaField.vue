<script setup lang="ts">
import type { PropType } from 'vue'
import type { IField } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  formFieldInstance: {
    type: Object as PropType<IField>,
    required: true,
  },
  rowsCount: {
    type: Number,
    default: 2,
  },
})
const {
  onChangeValue,
  wrapperClasses,
  formField,
  focusField,
  onFocusField,
  onBlurField,
  styles,
  elementId,
  name,
  value,
  required,
  placeholder,
  error,
  verifiedSuccess,
  showCheckMark,
  formSends,
  formUid,
} = useFormField(props)
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div>
    <div
      :class="[...wrapperClasses, styles['form-field-textarea']]"
      @click="focusField"
    >
      <div
        :data-replicated-value="value"
        :class="styles['form-field-textarea__field-wrapper']"
      >
        <textarea
          :id="`${elementId}-${formUid}`"
          ref="formField"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :rows="rowsCount"
          :disabled="formSends"
          :class="[styles['form-field'], styles['form-field-textarea__field']]"
          @input="onChangeValue"
          @blur="onBlurField"
          @focus="onFocusField"
        />
        <label
          :class="styles['form-field__label']"
          :for="`${elementId}-${formUid}`"
        >
          {{ placeholder }}
          <span
            v-if="!required"
            :class="styles['form-field__label-not-required']"
          >
            (optional)
          </span>
        </label>
      </div>
      <img
        v-if="showCheckMark"
        loading="lazy"
        :src="$getMediaFromS3(`images/core/forms/${verifiedSuccess ? 'success' : 'error'}-checkmark.svg`)"
        width="14"
        height="14"
        alt="Form checkmark"
        :class="styles['form-field__checkmark']"
      >
    </div>
    <span
      v-if="error"
      :class="styles['form-field--error']"
    >
      {{ error }}
    </span>
  </div>
</template>
<style module lang="scss">
@import "./styles/textarea.module";
</style>

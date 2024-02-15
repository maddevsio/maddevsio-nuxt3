<script setup lang="ts">
import type { PropType } from 'vue'
import type { IField } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  formFieldInstance: {
    type: Object as PropType<IField>,
    required: true,
  },
})
const {
  onChangeValue,
  wrapperClasses,
  formField,
  formUid,
  focusField,
  onFocusField,
  onBlurField,
  styles,
  elementId,
  type,
  name,
  value,
  required,
  placeholder,
  error,
  verifiedSuccess,
  showCheckMark,
  formSends,
} = useFormField(props)
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div>
    <div
      :class="wrapperClasses"
      class="form-field__wrapper"
      @click="focusField"
    >
      <input
        :id="`${elementId}-${formUid}`"
        ref="formField"
        :type="type"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        :disabled="formSends"
        :class="styles['form-field']"
        @input="onChangeValue"
        @blur="onBlurField"
        @focus="onFocusField"
      >
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
<style lang="scss" module>
@import "./styles/formInput.module";
</style>

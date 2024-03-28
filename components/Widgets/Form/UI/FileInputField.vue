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
  wrapperClasses,
  formField,
  formUid,
  focusField,
  elementId,
  name,
  value,
  required,
  placeholder,
  error,
  verifiedSuccess,
  showCheckMark,
  formSends,
  handleFile,
} = useFormField(props)
const acceptedExtensions = '.pdf,.doc,.docx'
const { $getMediaFromS3 } = useMediaFromS3()
const selectedFilename = computed(() => {
  if (!value.value) {
    return placeholder
  } else {
    const { name } = value.value as any
    if (!name) { return '' }
    if (name.length > 25) { return `${ name.substring(0, 25) }...` }
    return name
  }
})

onUnmounted(() => {
  value.value = ''
  error.value = ''
  showCheckMark.value = false
})
</script>
<template>
  <div>
    <div
      :class="wrapperClasses"
      class="form-field-file__wrapper"
      @click="focusField"
    >
      <input
        :id="`${elementId}-${formUid}`"
        ref="formField"
        type="file"
        :name="name"
        :placeholder="placeholder"
        :disabled="formSends"
        :accept="acceptedExtensions"
        class="form-field-file"
        @change="handleFile"
      >
      <label
        class="form-field-file__label"
        :for="`${elementId}-${formUid}`"
      >
        {{ selectedFilename }}
        <span
          v-if="!required"
          class="form-field-file__label-not-required"
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
        class="form-field-file__checkmark"
      >
    </div>
    <span
      v-if="error"
      class="form-field-file--error"
    >
      {{ error }}
    </span>
  </div>
</template>
<style lang="scss" scoped>
.form-field-file {
  @include font('Inter', 13px, 500);
  width: 100%;
  border: none;
  outline: 0;
  padding: 0;
  margin-top: 5px;
  background: transparent;
  display: none;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &__label-not-required {
    @include font('Inter', 10px, 400);
    color: $text-color--grey-opacity-40-percent;
  }

  &__label {
    @include font('Inter', 13px, 400);
    color: $text-color--grey-pale;
    cursor: text;
    top: 10px;
    left: 10px;
    position: absolute;
    transition: 0.2s ease-in-out;
  }

  &.form-field-file__label-not-required {
    font-size: 8px;
  }

  &__wrapper {
    width: 48.5%;
    position: relative;
    border: 1px solid #CFCFD0;
    border-radius: 4px;
    padding: 11px 33px 5px 10px;
    transition: 0.2s ease-in-out;
    cursor: text;
    height: 39.5px;

    &:focus-within {
      border-color: #5159F6;
    }

    &--error {
      border-color: #EC1C24;
    }

    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }

  &__checkmark {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 1;
  }

  &--error {
    @include font('Inter', 9px, 400);
    line-height: 18px;
    letter-spacing: -0.02em;
    color: $text-color--red;
  }
}

</style>
<style lang="scss" module>
@import './styles/formInputFile.module';
</style>

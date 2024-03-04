<script setup lang="ts">
import type { ISubscribeForm } from '~/components/Widgets/Form/interfaces/forms/ISubscribeForm'

const props = defineProps({
  formLocation: {
    type: String,
    default: 'Unknown',
  },

  sliceVariation: {
    type: String,
    default: 'default-slice',
  },

  colorTheme: {
    type: String,
    default: 'white',
  },

  lineBreakForSuccess: {
    type: Boolean,
    default: false,
  },

  formUid: {
    type: String,
    default: '',
  },
})

const sliceType = computed(() => (props.sliceVariation === 'subscribeFormDigest' ? 'digest' : 'default'))
const config = useRuntimeConfig()
const { $getMediaFromS3 } = useMediaFromS3()

const { form, styles } = useForm({
  methodName: 'makeSubscribeForm',
  options: {
    formUid: props.formUid,
    elementId: props.formUid,
    formLocation: props.formLocation,
    lineBreakForSuccess: props.lineBreakForSuccess,
    templateId: Number(config.public.sendPulseAddressBooksId),
  },
})

const {
  fields,
  buttons,
} = form as ISubscribeForm
</script>
<template>
  <LazyWidgetsFormFactory
    :form="form"
    :form-id="formUid"
    :class="[styles['subscribe-form'], `subscribe-form subscribe-form--${colorTheme}`, `subscribe-form subscribe-form--${sliceType}`]"
  >
    <div :class="styles['subscribe-form__wrapper']">
      <LazyWidgetsFormUIInputField
        v-if="fields"
        :form-field-instance="fields.email"
        :class="['subscribe-form__input', styles['subscribe-form__input'], styles[`subscribe-form__input--${colorTheme}`], styles[`subscribe-form__input--${sliceType}`]]"
      />
      <LazyWidgetsFormUIButtonField
        v-if="buttons"
        :button-instance="buttons.submitButton"
        :class="['subscribe-form__btn', styles['subscribe-form__btn'], styles[`subscribe-form__btn--${sliceType}`]]"
      >
        <span
          v-if="sliceVariation === 'subscribeFormDigest'"
          :class="styles['subscribe-form__btn-content']"
        >
          <span>Subscribe</span>
          <img
            loading="lazy"
            :src="$getMediaFromS3('images/Blog/svg/subscribe-btn-icon.svg')"
            alt="Subscribe icon"
            :class="styles['subscribe-form__btn-icon']"
            height="14"
            width="14"
          >
        </span>
        <svg
          v-else
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.81494 1.24805L10.9816 5.41471L6.81494 9.58138"
            stroke="white"
          />
          <path
            d="M0.981445 5.41504H10.7037"
            stroke="white"
          />
        </svg>
      </LazyWidgetsFormUIButtonField>
    </div>
  </LazyWidgetsFormFactory>
</template>
<style lang="scss" module>
@import "subscribeForm.module";
</style>
<style lang="scss" scoped>
.subscribe-form {

  &--default {
    :deep(p) {
      font-size: 10px;
      line-height: 18px;
    }
  }

  :deep(.form-field__wrapper) {
    max-height: 38px;
  }

  &--digest {
    :deep(p) {
      font-size: 12px;
      line-height: 24px;
    }

    :deep(input),
    :deep(.form-field__wrapper) {
      background-color: $bgcolor--white-primary;
    }
  }

  :deep(input) {
    color: inherit;
    font-size: 11px;
  }

  &--black {
    :deep(p) {
      color: $text-color--white-primary;
    }

    :deep(input:-webkit-autofill),
    :deep(input:-webkit-autofill:hover),
    :deep(input:-webkit-autofill:focus) {
      -webkit-text-fill-color: $text-color--white-primary;
      -webkit-box-shadow: 0 0 0 1000px $bgcolor--black inset;
      transition: background-color 5000s ease-in-out 0s;
      caret-color: $text-color--white-primary;
    }
  }

  &--white {
    :deep(p) {
      color: $text-color--quote-box;
    }

    :deep(input:-webkit-autofill),
    :deep(input:-webkit-autofill:hover),
    :deep(input:-webkit-autofill:focus) {
      -webkit-text-fill-color: $text-color--quote-box;
      -webkit-box-shadow: 0 0 0 1000px $bgcolor--white-primary inset;
      transition: background-color 5000s ease-in-out 0s;
      caret-color: $text-color--quote-box;
    }
  }

  &--digest.subscribe-form--black {
    :deep(input),
    :deep(.form-field__wrapper) {
      background-color: $bgcolor--black;
    }
  }
}
</style>

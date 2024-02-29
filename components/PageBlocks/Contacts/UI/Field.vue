<script setup lang="ts">
import type { ImageField, SelectField } from '@prismicio/types'
import type { ComputedRef, PropType } from 'vue'

const { $getMediaFromS3 } = useMediaFromS3()

defineProps({
  icon: {
    type: Object as PropType<ImageField>,
    required: true,
    default: () => ({}),
  },

  label: {
    type: String,
    required: true,
    default: '',
  },

  content: {
    type: String,
    required: true,
    default: '',
  },

  type: {
    type: String as PropType<SelectField>,
    required: true,
    default: '',
  },

  href: {
    type: Object as PropType<ComputedRef<string>>,
    required: true,
    default: () => ({}),
  },
})

const emit = defineEmits(['clickContact'])

const clickContact = (type: SelectField, content: string) => {
  emit('clickContact', { type, content })
}
</script>

<template>
  <div
    class="contacts-slice-field"
  >
    <img
      v-if="icon && icon.url"
      loading="lazy"
      :src="icon.url"
      :alt="icon.alt"
      class="contacts-slice-field__icon"
      width="40"
      height="40"
    >
    <div class="contacts-slice-field__content">
      <p class="contacts-slice-field__label">
        <img
          v-if="type === 'phone'"
          loading="lazy"
          :src="$getMediaFromS3('images/custom/contacts-slice/flag-uk-icon.svg')"
          alt="UK flag"
          class="contacts-slice-field__label-icon"
          width="18"
          height="14"
        >
        {{ label }}
      </p>
      <Component
        :is="type === 'address' ? 'p' : 'a'"
        :href="href.value"
        class="contacts-slice-field__value"
        @click="clickContact(type, content)"
      >
        {{ content }}
      </Component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts-slice-field {
  display: flex;
  align-items: flex-end;
  flex: 1 1 48%;
  &__icon {
    display: block;
    width: 40px;
    min-width: 40px;
    margin-right: 26px;
    user-select: none;
  }

  &__label {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.02em;
    color: $text-color--white;
    display: flex;
    align-items: center;
    margin-bottom: 6px;

    &-icon {
      margin-right: 8px;
      user-select: none;
    }
  }

  &__value {
    @include font('Poppins', 34px, 600);
    line-height: 100%;
    letter-spacing: -1px;
    display: block;
    text-decoration: none;
    color: $text-color--white;
    border-bottom: 1px solid $text-color--red-opacity;
  }

  @media screen and (max-width: 1160px) {
    flex: 1 1 100%;

    &__label {
      font-size: 14px;
    }

    &__value {
      font-size: 28px;
      line-height: 128%;
    }
  }

  @media screen and (max-width: 500px) {
    &__value {
      font-size: 20px;
      line-height: 100%;
    }
  }

  @media screen and (max-width: 350px) {
    &__value {
      font-size: 18px;
    }
  }
}
</style>

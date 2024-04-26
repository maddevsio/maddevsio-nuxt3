<script setup lang="ts">
import type { PropType } from 'vue'
import type { ISelect } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  selectFieldInstance: {
    type: Object as PropType<ISelect>,
    required: true,
  },
})

const {
  elementId,
  label,
  colorTheme,
  options,
  error,
  setSelectedOption,
} = props.selectFieldInstance
</script>

<template>
  <div class="select-field" :class="{'select-field--error': error}">
    <LazySharedDropdownSelector
      :select-title="label"
      :color-theme="colorTheme"
      :options="options"
      :ordered-list="false"
      class="select-field__component"
      @option:selected="setSelectedOption"
    />
    <span
      v-if="error"
      class="select-field__error"
    >
      {{ error }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.select-field {
  &--error {
    .select-field__component {
      border: 1px solid $border-color--venetian-red;
    }
  }

  &__component {
    :deep(.dropdown-selector__selected), :deep(.dropdown-selector__option) {
      font-size: 13px;
      padding: 12px 20px 12px 10px;
      color: $text-color--grey-pale;
    }
  }

  &__error {
    @include font('Inter', 9px, 400);
    line-height: 18px;
    letter-spacing: -0.02em;
    color: $text-color--red;
  }
}
</style>

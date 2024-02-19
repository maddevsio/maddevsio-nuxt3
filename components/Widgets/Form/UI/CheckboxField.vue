<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICheckbox } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  checkboxInstance: {
    type: Object as PropType<ICheckbox>,
    required: true,
  },
})

const { styles } = useStyleFormElement()
const formUid = inject('formUid')
const checkmarkStyles = computed(() => [
  // @ts-ignore
  styles['form-checkbox-component__checkmark'],
  props.checkboxInstance.required &&
  // @ts-ignore
  props.checkboxInstance.error.value && styles['form-checkbox-component__checkmark--error'],
].filter(Boolean))

const {
  elementId,
  type,
  label,
  name,
  checkboxValue,
  error,
} = props.checkboxInstance
</script>
<template>
  <div :class="styles['form-checkbox-component']">
    <div
      :class="styles['form-checkbox-component__input-wrapper']"
    >
      <input
        :id="`${elementId}-${formUid}`"
        v-model="checkboxValue"
        :type="type"
        :name="name"
        :value="label"
        :class="styles[`form-checkbox-component__input`]"
      >
      <label
        :for="`${elementId}-${formUid}`"
        :class="styles['form-checkbox-component__label']"
      >
        <span :class="checkmarkStyles" />
        {{ label }}
      </label>
    </div>
    <span
      v-if="error"
      :class="styles['form-checkbox-component--error']"
    >
      {{ error }}
    </span>
  </div>
</template>
<style lang="scss" module>
@import "./styles/checkbox.module";
</style>

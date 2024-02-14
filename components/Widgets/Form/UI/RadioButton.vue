<script setup lang="ts">
import type { PropType } from 'vue'
import type { IRadioButton } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  radioButtonInstance: {
    type: Object as PropType<IRadioButton>,
    required: true,
  },

  error: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['changeRadioState'])
const onChangeState = (event: InputEvent) => props.radioButtonInstance.onChangeState(event, emit)
const { styles } = useStyleFormElement()
const formUid = inject('formUid')
const checkmarkStyles = computed(() => [
  // @ts-ignore
  styles['form-radio-component__checkmark'],
  props.radioButtonInstance.required &&
  // @ts-ignore
  props.error && styles['form-radio-component__checkmark--error'],
].filter(Boolean))
const {
  elementId,
  radioValue,
  type,
  label,
  name,
  required,
} = props.radioButtonInstance
</script>
<template>
  <div>
    <input
      :id="`${elementId}-${formUid}`"
      v-model="radioValue"
      :type="type"
      :name="name"
      :value="label"
      :class="styles[`form-radio-component__input`]"
      @change="onChangeState($event)"
    >
    <label
      :for="`${elementId}-${formUid}`"
      :class="styles['form-radio-component__label']"
    >
      <span :class="checkmarkStyles" />
      {{ label }}
    </label>
  </div>
</template>
<style lang="scss" module>
@import "./styles/radioButton.module";
</style>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IRadioButtonGroup } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  radioButtonGroupInstance: {
    type: Object as PropType<IRadioButtonGroup>,
    required: true,
  },
})

const { $eventBus } = useNuxtApp()
const onChangeRadioState = (value: string) => props.radioButtonGroupInstance.onChangeRadioState(value, $eventBus)
const { styles } = useStyleFormElement()
const formUid = inject('formUid')
const {
  radioButtons,
  description,
  elementId,
  error,
  checkPrechekedRadioButtons,
} = props.radioButtonGroupInstance

onMounted(() => {
  checkPrechekedRadioButtons(radioButtons, $eventBus)
})
</script>
<template>
  <div
    v-if="radioButtons.length"
    :id="`${elementId}-${formUid}`"
    :class="styles['form-radio-component']"
  >
    <p
      v-if="description"
      :class="styles['form-radio-component__description']"
    >
      {{ description }}
    </p>
    <LazyWidgetsFormUIRadioButton
      v-for="(radioButton, radioButtonIndex) in radioButtons"
      :key="`${radioButton.elementId}-${radioButtonIndex}-${formUid}`"
      :radio-button-instance="radioButton"
      :error="error"
      @change-radio-state="onChangeRadioState"
    />
    <span
      v-if="error"
      :class="styles['form-radio-component--error']"
    >
      {{ error }}
    </span>
  </div>
</template>
<style lang="scss" module>
@import "./styles/radioButton.module";
</style>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IButton } from '~/components/Widgets/Form/interfaces/formElements'

const props = defineProps({
  buttonInstance: {
    type: Object as PropType<IButton>,
    required: true,
  },
})
const { styles } = useStyleFormElement()
const formUid = inject('formUid')
const formSends = inject('formSends')
const {
  label,
  elementId,
  type,
} = props.buttonInstance
</script>
<template>
  <button
    :id="`${elementId}-${formUid}`"
    :type="type"
    :class="styles['form-button']"
    :disabled="formSends"
  >
    <span v-if="label">
      {{ formSends ? 'Waiting...' : label }}
    </span>
    <slot v-else />
  </button>
</template>
<style lang="scss" module>
@import "./styles/formButton.module";
</style>

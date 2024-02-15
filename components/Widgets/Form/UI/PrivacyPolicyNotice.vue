<script setup lang="ts">
const { privacyText } = defineProps({
  privacyText: {
    type: String,
    default: '',
  },
})
const { styles } = useStyleFormElement()
</script>
<template>
  <p
    :class="styles['form-privacy-notice']"
  >
    {{ privacyText || 'By sending this form I confirm that I have read and accept' }}
    <NuxtLink
      v-if="!privacyText"
      to="/privacy/"
      target="_blank"
      :class="styles['form-privacy-notice__link']"
    >
      Privacy Policy
    </NuxtLink>
  </p>
</template>
<style lang="scss" module>
@import "./styles/privacyPolicyNotice.module";
</style>

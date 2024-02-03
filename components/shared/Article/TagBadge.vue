<script setup lang="ts">
interface Props {
  tag: string
  disabled: boolean
  theme: string
}

const { tag } = withDefaults(defineProps<Props>(), {
  tag: '',
  disabled: false,
  theme: 'light',
})

const link = linkResolver({ type: 'tag', uid: convertStringToSlug(tag) })
</script>
<template>
  <NuxtLink
    v-if="tag"
    :tag="disabled ? 'div' : 'a'"
    :event="disabled ? '' : 'click'"
    :to="link"
    class="post-tag"
    :class="`post-tag--${theme}-theme`"
    data-testid="test-tag"
  >
    {{ tag }}
  </NuxtLink>
</template>
<style scoped lang="scss">
.post-tag {
  white-space: nowrap;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.4px;
  padding: 8px 16px;
  border-radius: 2px;
  transition: 0.2s;
  &--white-theme {
    background-color: $bgcolor--white-primary !important;
    color: $text-color--black !important;
  }
  &--light-theme {
    background-color: $bgcolor--silver !important;
    color: $text-color--black !important;
  }
  &--dark-theme {
    background-color: $text-color--quote-box !important;
    color: $text-color--white-primary !important;
  }
}
</style>

<script setup lang="ts">
import { checkTagPageExists } from '~/utils/checkTagPageExists'

defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="glossary-post-tags">
    <NuxtLink
      v-for="tag in tags"
      :key="tag.name"
      :to="tag.link"
      class="glossary-post-tags__tag"
      :class="{'glossary-post-tags__tag--not-active': !checkTagPageExists(tag.name)}"
    >
      {{ tag.name }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.glossary-post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  &__tag {
    display: inline-flex;
    justify-content: center;
    align-self: center;
    background-color: $bgcolor--quote-box;
    color: $text-color--white-primary;
    font-size: 14px;
    line-height: 128%;
    letter-spacing: -0.02em;
    padding: 8px 11px;
    border-radius: 5px;
    &--not-active {
      pointer-events: none;
      background-color: $bgcolor--grey-selected;
    }
  }
}
</style>

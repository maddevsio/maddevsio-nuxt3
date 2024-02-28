<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostTableOfContentsItem } from '~/components/Blog/interfaces/Post/IPostTableOfContentsItem'

const props = defineProps({
  postTableOfContentsItemInstance: {
    type: Object as PropType<IPostTableOfContentsItem>,
    default: () => ({}),
  },
})

const {
  isActiveLink,
  label,
  link,
  linkColorClass,
  index,
} = props.postTableOfContentsItemInstance
</script>
<template>
  <NuxtLink
    :to="link"
    :data-id="link"
    class="table-of-contents__links-link"
    :class="[{ 'table-of-contents__links-link--active': isActiveLink }, linkColorClass]"
  >
    <span class="table-of-contents__links-link-order-number">{{ index + 1 }}.</span> {{ label }}
  </NuxtLink>
</template>
<style lang="scss" scoped>
.table-of-contents__links-link {
  width: 100%;
  display: flex;
  text-decoration: none;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.1px;
  margin-bottom: 6px;
  padding: 10px 8px;
  box-sizing: border-box;
  border-radius: 8px;

  &--white {
    color: $text-color--black-oil;
    &:hover {
      background-color: rgba(247, 199, 68, 0.1);
    }
  }

  &--black {
    color: $text-color--white-primary;
    &:hover {
      background-color: $bgcolor--quote-box;
    }
  }

  &--active.table-of-contents__links-link--white {
    background-color: rgba(204, 160, 40, 0.2);
  }

  &--active.table-of-contents__links-link--black {
    background-color: $bgcolor--black-pale;
  }

  &-order-number {
    margin-right: 6px;
  }
}
</style>

<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: '',
  },
  updatedDate: {
    type: String,
    default: '',
  },
  readTime: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <ul class="cu-post-author-dates">
    <li
      v-if="date && !updatedDate"
      class="cu-post-author-dates__date"
    >
      Date created: {{ date }} <span v-if="readTime" /> {{ readTime || '' }}
    </li>
    <li
      v-if="updatedDate"
      class="cu-post-author-dates__date"
    >
      Date updated: {{ updatedDate }} <span v-if="readTime" /> {{ readTime || '' }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.cu-post-author-dates {
  &__date {
    color: $text-color--grey-pale;
    font-size: 12px;
    line-height: 166%;
    display: flex;
    gap: 12px;
    align-items: center;

    span {
      width: 4px;
      height: 4px;
      display: inline-block;
      border-radius: 50%;
      background: $bgcolor--grey-selected;
    }
  }
}
</style>

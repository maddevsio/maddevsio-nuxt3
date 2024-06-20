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
  <ul class="post-meta-info__dates-list">
    <li
      v-if="updatedDate"
      class="post-meta-info__dates-item"
    >
      <span class="post-meta-info__dates-item-time-event">Updated:</span> {{ updatedDate }}
    </li>
    <li
      v-if="date"
      class="post-meta-info__dates-item"
    >
      <span class="post-meta-info__dates-item-time-event">Created:</span> {{ date }}
    </li>
    <li
      v-if="readTime"
      class="post-meta-info__dates-item"
    >
      {{ readTime }}
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.post-meta-info__dates {
  &-list {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &-item {
    @include font('Inter', 12px, 400);
    line-height: 150%;
    color: $text-color--grey-pale;
    display: flex;
    align-items: center;

    &-time-event {
      color: $text-color--quote-box;
      margin-right: 5px;
    }

    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 18px;
      margin-left: 12px;
      background-color: $bgcolor--quote-box;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  @media screen and (max-width: 580px) {
    &-list {
      gap: 6px;
    }

    &-item {
      font-size: 10px;

      &::after {
        margin-left: 6px;
      }
    }
  }
}
</style>

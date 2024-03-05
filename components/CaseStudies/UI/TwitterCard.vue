<script setup lang="ts">
import Tweet from 'vue-tweet'

defineProps({
  id: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="twitter-card">
    <Tweet
      :tweet-id="id"
      class="twitter-card__tweet"
    />
  </div>
</template>
<style lang="scss" scoped>
.twitter-card {
  &__tweet {
    display: flex;
    justify-content: center;
  }
}
</style>

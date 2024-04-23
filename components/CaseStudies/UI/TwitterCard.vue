<script setup lang="ts">
import Tweet from 'vue-tweet'

defineProps({
  tweetId: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="twitter-card">
    <ClientOnly>
      <Tweet
        v-if="tweetId"
        :tweet-id="tweetId"
        class="twitter-card__tweet"
      />
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.twitter-card {
  :deep(.twitter-tweet) {
    justify-content: center;

    iframe {
      flex-grow: unset !important;
    }
  }
}
</style>

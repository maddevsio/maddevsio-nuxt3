<script setup lang="ts">
defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="search-panel__result-cards">
    <LazyWidgetsSearchPanelCard
      v-for="post in posts.slice(0, 5)"
      :key="$prismic.asText(post.data.title)"
      :featured-image="post.data.featured_image"
      :post-title="$prismic.asText(post.data.title)"
      :post-created-date="post.data.date"
      :author-photo="post.data.post_author.data.image.thumbnail"
      :author-name="post.data.post_author.data.name"
      :author-position="post.data.post_author.data.position"
      :author-uid="post.data.post_author.data.uid"
      :uid="post.uid"
      :post-type="post.type"
      :post="post"
    />
    <LazyWidgetsSearchPanelMoreArticlesCard
      v-if="posts.length > 5"
    />
  </div>
</template>
<style lang="scss" scoped>
.search-panel {
  &__result-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    box-sizing: border-box;

    @media screen and (max-width: 1405px) {
      row-gap: 24px;
    }
  }
}
</style>

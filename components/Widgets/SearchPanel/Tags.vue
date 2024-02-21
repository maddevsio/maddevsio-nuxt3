<script setup lang="ts">
const ignoreTags = ['iOS development', 'iOS', 'Featured post', 'Software features']
const $prismic = usePrismic()
const tags = ref<Array<{ tag_name: string, tag_link: string }>>([])

const getTags = async () => {
  const response = await $prismic.client.get({
    filters: [
      $prismic.filter.at('document.type', 'tags'),
    ],
    orderings: {
      field: 'my.post.date',
      direction: 'desc',
    },
    pageSize: 100,
  })
  return response.results
}

await useAsyncData(async () => {
  // @ts-ignore
  const [{ data: { tags: tagsResponse } }] = await getTags()
  tags.value = tagsResponse.filter((tag: { tag_name: string }) => !ignoreTags.includes(tag.tag_name)).map((tag: { tag_name: string }) => ({
    ...tag,
    tag_link: linkResolver({ type: 'tag', uid: convertStringToSlug(tag.tag_name) }),
  }))
})
</script>
<template>
  <div class="search-panel__tags-container">
    <h6
      class="search-panel__tags-title"
    >
      May we suggest
    </h6>
    <div class="search-panel__tags">
      <div
        v-for="tag in tags"
        :key="tag.tag_name"
        class="search-panel__tag"
      >
        <NuxtLink
          :to="tag.tag_link"
          class="search-panel__tag-link"
        >
          {{ tag.tag_name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-panel {
  &__tags-container {
    margin-top: 32px;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  &__tags-title {
    @include font('Inter', 12px, 500);
    line-height: 150%;
    letter-spacing: -0.4px;
    color: $bgcolor--black-pale;
    margin-bottom: 12px;
  }

  &__tags {
    display: flex;
    align-items: center;
    gap:12px;
    flex-wrap: wrap;
  }

  &__tag {
    background-color: $bgcolor--white-primary;
    padding: 3px 16px;
    &-link {
      @include font('Inter', 12px, 400);
      line-height: 18px;
      letter-spacing: -0.02em;
      color: $text-color--quote-box;
    }
  }
}
</style>

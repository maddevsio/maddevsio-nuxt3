<script setup lang="ts">
const {
  tags,
  activeTags,
} = storeToRefs(useTagCloudStore())
const {
  changeActiveTags,
  deleteActiveTag,
  getTagsFromPrismic,
  clearAllData,
} = useTagCloudStore()
const emit = defineEmits(['tagsChanged'])

const handleFilterChange = (e: InputEvent) => {
  const target = e.currentTarget as HTMLInputElement
  if (activeTags.value.includes(target.value)) {
    deleteActiveTag(target.value)
    emit('tagsChanged')
    return
  }
  changeActiveTags(target.value)
  emit('tagsChanged')
}

onMounted(async () => {
  await getTagsFromPrismic()
})

onUnmounted(() => {
  clearAllData()
})
</script>
<template>
  <div
    v-if="tags.length"
    class="posts-filter"
  >
    <ul class="posts-filter__list">
      <li
        v-for="(tag, i) in tags"
        :key="`posts-filter__item-${i}`"
        class="posts-filter__item-wrapper"
      >
        <div class="posts-filter__item">
          <input
            :id="tag.tagName"
            type="checkbox"
            name="Tag"
            data-testid="test-post-input"
            :value="tag.tagName"
            :checked="activeTags.includes(tag.tagName)"
            @change="handleFilterChange"
          >
          <label :for="tag.tagName">{{ tag.tagName }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.posts-filter {
  min-width: 150px;
  margin-bottom: 50px;

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 12px;
  }

  &__item {
    &-wrapper {
      &:last-child {
        margin-right: 0;
      }
    }

    input[type="checkbox"] {
      display: none;
    }

    label {
      @include font('Inter', 12px, 400);
      cursor: pointer;
      box-shadow: none;
      display: flex;
      align-items: flex-end;
      padding: 10px 16px;
      color: $text-color--black;
      background-color: $bgcolor--silver;
      border: 1px solid $border-color--grey-20-percent;
      line-height: 18px;
      border-radius: 20px;
      transition: 0.2s;
    }

    input[type="checkbox"]:checked + label {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 1024px) {
    &__item label:hover {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 991px) {
    margin-bottom: 35px;
  }

  @media screen and (max-width: 460px) {
    &__list {
      justify-content: flex-start;
    }
  }
}
</style>

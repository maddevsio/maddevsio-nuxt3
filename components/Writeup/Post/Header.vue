<script setup lang="ts">
import type { PropType } from 'vue'
import type { Author } from '~/interfaces/common/commonInterfaces'

const props = defineProps({
  author: {
    type: Object as PropType<Author['data'] & { uid: string }>,
    default: () => ({
      uid: '',
      position: '',
      name: '',
      image: () => ({}),
    }),
  },

  createdDate: {
    type: String,
    default: '',
  },

  updatedDate: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  tag: {
    type: String,
    default: '',
  },
})

console.log(props.author)
</script>

<template>
  <div class="writeup-header">
    <div class="container">
      <div class="writeup-header__author-section">
        <LazySharedArticleAuthor
          :uid="author.uid"
          :position="author.position"
          :name="author.name"
          :image="author.image"
          theme="dark"
        />
        <LazySharedArticleTagBadge
          v-if="tag"
          theme="dark"
          :tag="tag"
        />
      </div>
      <BlogUIPostMetaInfoDates
        v-if="createdDate || updatedDate"
        :date="createdDate"
        :updated-date="updatedDate"
      />
      <h1
        v-if="title"
        class="writeup-header__title"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.writeup-header {
  &__author-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    @media screen and (max-width: 690px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__title {
    @include font('Inter', 48px, 700);
    line-height: 130%;
    letter-spacing: -2px;
    color: $text-color--white-primary;
    margin-top: 48px;

    @media screen and (min-width: 691px) and (max-width: 1023px) {
      font-size: 36px;
    }

    @media screen and (max-width: 690px) {
      font-size: 32px;
      margin-top: 32px;
    }
  }

  :deep(.post-meta-info__dates-item) {
   font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.1px;
  }

  :deep(.post-meta-info__dates-item-time-event) {
    color: $text-color--light-silver;
  }
}
</style>

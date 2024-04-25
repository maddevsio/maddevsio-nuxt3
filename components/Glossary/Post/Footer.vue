<script setup lang="ts">
const { glossaryPostFooterInstance } = defineProps({
  glossaryPostFooterInstance: {
    type: Object,
    default: () => ({}),
  },
})

const {
  authorData,
  coAuthorData,
  updatedDate,
  tags,
} = glossaryPostFooterInstance
</script>

<template>
  <div class="glossary-post-footer">
    <LazyGlossaryPostUITags
      v-if="tags.length"
      :tags="tags"
      class="glossary-post-footer__tags"
    />
    <div class="glossary-post-footer__authors">
      <div
        v-if="authorData && Object.keys(authorData).length"
        class="glossary-post-footer__author"
      >
        <p class="glossary-post-footer__authors-label">
          Created by
        </p>
        <LazyGlossaryPostUIAuthor
          :author="authorData"
        />
      </div>
      <div
        v-if="coAuthorData && Object.keys(coAuthorData).length"
        class="glossary-post-footer__author"
      >
        <p class="glossary-post-footer__authors-label">
          Reviewed by
        </p>
        <LazyGlossaryPostUIAuthor
          :author="coAuthorData"
        />
      </div>
    </div>
    <p class="glossary-post-footer__date">
      {{ `Last updated in ${updatedDate}` }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.glossary-post-footer {
  margin-top: 48px;

  &__tags {
    margin-bottom: 24px;
  }

  &__authors {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-label {
      @include font('Inter', 12px, 400);
      line-height: 150%;
      color: $text-color--white-primary;
      margin-bottom: 10px;
    }
  }

  &__date {
    @include font('Inter', 16px, 400);
    color: $text-color--grey-opacity-40-percent;
    line-height: 150%;
    margin-top: 24px;
  }

  @media screen and (max-width: 1185px) {
    &__authors {
      max-width: 680px;
    }
  }

  @media screen and (max-width: 768px) {
    &__authors {
      max-width: 100%;
    }

    &__date {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 600px) {
    &__authors {
      flex-direction: column;
      align-items: flex-start;
    }

    &__author {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__date {
      font-size: 12px;
      margin-top: 20px;
    }
  }
}
</style>

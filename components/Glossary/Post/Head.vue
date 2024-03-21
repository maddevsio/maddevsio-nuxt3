<script setup lang="ts">
const { glossaryPostHeadInstance } = defineProps({
  glossaryPostHeadInstance: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="glossary-post-head">
    <h1
      v-if="glossaryPostHeadInstance.title"
      class="glossary-post-head__title"
    >
      {{ glossaryPostHeadInstance.title }}
    </h1>
    <PrismicRichText
      v-if="$prismic.asText(glossaryPostHeadInstance.description)"
      class="glossary-post-head__description"
      :field="glossaryPostHeadInstance.description"
      :html-serializer="prismicHtmlSerializer"
    />
  </div>
</template>

<style lang="scss" scoped>
.glossary-post-head {
  &__title {
    @include font('Inter', 48px, 700);
    line-height: 130%;
    color: $text-color--white-primary;
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 150%;
    color: $text-color--grey-20-percent;
    :deep(a) {
      color: $text-color--grey-20-percent;
      text-decoration: underline;
    }
  }

  &__title, &__description {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    &__title {
      font-size: 38px;
    }
  }
}
</style>

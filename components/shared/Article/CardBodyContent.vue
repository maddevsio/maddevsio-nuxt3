<script setup lang="ts">
interface Props {
  articleLink: string
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {
  articleLink: '',
  title: '',
  description: '',
})
</script>
<template>
  <NuxtLink
    :to="articleLink"
    class="article-card__body-content"
  >
    <h3
      class="article-card__title"
    >
      {{ title }}
    </h3>
    <p
      class="article-card__description"
    >
      {{ description }}
    </p>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.article-card {
  &__title,
  &__description {
    @include font('Inter', 18px, 700);
    line-height: 22px;
    letter-spacing: -0.4px;
    color: $text-color--chinese-black;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 16px;

    @media screen and (min-width: 880px) {
      font-size: 21px;
      line-height: 130%;
      letter-spacing: initial;
    }
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    -webkit-line-clamp: 3;
    margin-bottom: 0;

    @media screen and (min-width: 880px) {
      letter-spacing: initial;
    }
  }
}
</style>

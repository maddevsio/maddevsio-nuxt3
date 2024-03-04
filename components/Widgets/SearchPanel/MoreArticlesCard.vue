<script setup lang="ts">
const searchValue = inject('searchValue')
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <NuxtLink
    :to="`/blog/search-result/?searchBy=${searchValue}`"
    class="search-panel__more-articles"
  >
    <p class="search-panel__more-articles-description">
      Check out more articles on this topic
    </p>
    <button
      class="search-panel__more-articles-link"
    >
      <img
        :src="$getMediaFromS3('images/Blog/svg/arrow-right.svg')"
        alt="Arrow right"
        width="12"
        height="12"
      >
    </button>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.search-panel {
  &__more-articles {
    width: 31%;
    border-left: 1px solid $border-color--grey-20-percent;
    display: flex;
    place-items: center;
    gap: 18px;
    padding-left: 48px;
    box-sizing: border-box;

    @media screen and (max-width: 910px) {
      width: 100%;
      border-left: none;
      border-top: 1px solid $border-color--grey-20-percent;
      padding: 22px 0 22px 20px;
      place-items: flex-start;
      place-content: flex-start;
    }

    &-description {
      @include font('Inter', 14px, 400);
      line-height: 130%;
      color: $text-color--chinese-black;
      max-width: 160px;
    }

    &-link {
      width: 40px;
      min-width: 40px;
      height: 40px;
      border: 1px solid $border-color--grey-selected;
      background-color: transparent;
      border-radius: 50%;
      display: flex;
      place-items: center;
      place-content: center;
      cursor: pointer;
    }
  }
}
</style>

<script setup lang="ts">
import { featuredProjectsList } from '~/components/OpenSource/constants/openSourceConstants'
</script>
<template>
  <section>
    <ul class="featured-projects-list">
      <LazyOpenSourceUIFeaturedProjectsListItem
        v-for="item of featuredProjectsList"
        :key="item.id"
        v-bind="item"
      />
    </ul>
    <div
      class="featured-projects-list__see-more"
    >
      <LazySharedUIButton
        is-link
        to="https://github.com/maddevsio/"
      >
        70+ Open source projects on GitHub
      </LazySharedUIButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.featured-projects-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  &__see-more {
    display: block;
    margin: 50px auto 0;
    :deep(.ui-button) {
      width: 100%;
      height: 52px;
      font-weight: normal;
    }
  }

  @media screen and (max-width: 1260px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 430px) {
    gap: 24px;

    &__see-more {
      margin-top: 24px;
    }
  }
}
</style>

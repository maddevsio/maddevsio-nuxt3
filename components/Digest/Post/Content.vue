<script setup lang="ts">
defineProps({
  slices: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="digest-content">
    <div class="digest-content__container">
      <!--      <DigestPostSidebar />-->
      <LazyDigestSlicesComponents
        :slices="slices"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-content {
  background-color: $bgcolor--white-primary;

  &__container {
    max-width: 610px;
    margin: 0 auto;
    column-gap: 72px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      padding: 0 24px;
    }
  }

  &__sidebar {
    position: sticky;
    top: 130px;
    left: 0;
    align-self: flex-start;
    margin-left: -272px;
    margin-bottom: 64px;

    @media screen and (max-width: 1185px) {
      display: none;
    }
  }

  &__subscribe-form-block {
    :deep(.subscribe-form-block__link-wrapper) {
      margin-bottom: 14px;
      line-height: 19px;
    }
  }
}
</style>

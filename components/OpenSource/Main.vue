<template>
  <div class="open-source">
    <LazyOpenSourceSectionsBanner />
    <LazyOpenSourceSectionsParagraph />
    <LazyOpenSourceSectionsFeaturedProjects />
    <div class="open-source--bg-white">
      <LazyOpenSourceSectionsBoilerplates />
      <LazyOpenSourceSectionsCTABanner />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.open-source {
  color: $text-color--white-primary;
  &--bg-white {
    background-color: $bgcolor--white-primary;
    color: $text-color--black-oil;
  }
}
</style>

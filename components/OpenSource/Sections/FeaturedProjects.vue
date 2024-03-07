<template>
  <div
    class="featured-projects"
  >
    <div class="container">
      <div class="featured-projects__head">
        <LazyOpenSourceUITitleDesc
          text-color="white"
          title="Featured projects"
          description="A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies."
        />
      </div>
      <LazyOpenSourceUIFeaturedProjectsList />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.featured-projects {
  padding-bottom: 150px;
  &__head {
    margin-bottom: 85px;
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 137px;
    &__head {
      margin-bottom: 83px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 94px;
    &__head {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 430px) {
    padding-bottom: 48px;
    &__head {
      margin-bottom: 48px;
    }
  }
}
</style>

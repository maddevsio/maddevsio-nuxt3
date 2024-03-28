<template>
  <div class="our-philosophy">
    <LazyPhilosophySectionsBanner />
    <div class="our-philosophy__spacer" />
    <div class="our-philosophy-bg-white">
      <LazyPhilosophySectionsMission />
      <LazyPhilosophySectionsPrinciples />
    </div>
    <LazyPhilosophySectionsValues />
  </div>
</template>
<style lang="scss" scoped>
.our-philosophy {
  &-bg-white {
    background: $bgcolor--white-primary;
  }

  &__spacer {
    display: block;
    height: 331px;
    background-color: rgb(17, 18, 19);

    @media screen and (max-width: 1024px) {
      height: 200px;
    }

    @media screen and (max-width: 768px) {
      height: 190px;
    }

    @media screen and (max-width: 430px) {
      height: 50px;
    }
  }
}
</style>

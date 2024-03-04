<script setup lang="ts">
const customerUniversityOptions = {
  speed: 750,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: false,
  gradCursor: true,
  allowTouchMove: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.cu-posts-prev-next-buttons__button--next',
    prevEl: '.cu-posts-prev-next-buttons__button--prev',
    disabledClass: 'disabled',
  },

  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    991: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
}

defineProps({
  customerUniversityPosts: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div
    class="cluster-navigation"
  >
    <div class="container">
      <h2
        class="cluster-navigation__title"
      >
        Explore the chapters
      </h2>
      <Swiper
        ref="cuCards"
        v-bind="customerUniversityOptions"
        class="cluster-navigation__cards"
      >
        <SwiperSlide
          v-for="post in customerUniversityPosts"
          :key="post.cu_post.id"
          class="cluster-navigation__list-item"
        >
          <LazySharedArticleCard
            :uid="post.cu_post.uid"
            :article-link="post.cu_post.articleLink"
            :title="post.cu_post.title"
            :description="post.cu_post.description"
            :is-show-author="false"
            :is-show-tag="false"
            :post-length="post.length"
            :cover="post.cu_post.cover"
          />
        </SwiperSlide>
        <div
          class="cluster-navigation__navigation-buttons"
        >
          <LazySharedNavigationButtons
            prev-label="Prev"
            class-prefix-next="cu-posts"
            class-prefix-prev="cu-posts"
          />
        </div>
      </Swiper>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cluster-navigation {
  background: $bgcolor--silver;
  padding: 60px 0 71px;

  &__title {
    @include font('Inter', 32px, 600);
    text-align: center;
    line-height: 130%;
    letter-spacing: -0.04em;
    color: $text-color--tech-label-black;
    margin-bottom: 37px;

    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }

  .container {
    max-width: 924px;
  }

  &__navigation-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;

    :deep(.digest-footer__navigations-buttons) {
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 670px) {
        justify-content: space-between;
      }
    }
  }
}
</style>

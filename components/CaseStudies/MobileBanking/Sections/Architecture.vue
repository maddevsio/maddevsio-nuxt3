<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="architecture-design m-96_bottom media-m-48_top media-m-48_bottom">
    <div
      class="container_regular m-48_bottom"
    >
      <h2 class="case_title_h2 m-12_bottom">
        Architecture Design
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        We helped with the quality migration of important parts of the monolith to microservice architecture,
        allocating existing features and services into separate modules and providing their correct interoperability.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        The architect and DevOps team performed a detailed review of the existing architecture and then defined a set
        of technical recommendations for further microservices implementation. So we redesigned the architecture for
        further more convenient addition of new functionality and more stable and faster operation of
        the entire solution. Also, we allocated Go and Java services from the monolithic version
        and performed their complete refactoring.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="architecture-design__lottie background-color-silver">
      <div class="container_middle architecture-design__container">
        <LazySharedLottieMad
          class="architecture-design__lottie-desktop"
          height="519px"
          :lottie-link="$getMediaFromS3(`/images/Cases/mobile-banking/lottie/design-architecture.json`)"
          :autoplay="true"
        />
        <LazySharedLottieMad
          class="architecture-design__lottie-tablet"
          height="100%"
          :lottie-link="$getMediaFromS3(`/images/Cases/mobile-banking/lottie/architecture-mobile.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.architecture-design {
  &__lottie {
    padding: 100px 0;

    &-tablet {
      display: none;
    }
  }

  &__container {
    max-width: 1240px;
  }

  @media screen and (max-width: 768px) {
    &__lottie {
      padding: 0;

      &-tablet {
        display: block;
      }

      &-desktop {
        display: none;
      }
    }

    &__container {
      padding: 0;
    }
  }
}
</style>

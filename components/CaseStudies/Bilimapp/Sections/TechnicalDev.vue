<script setup lang="ts">
</script>
<template>
  <section class="case-bilim__technical m-48_bottom">
    <div
      class="container_regular"
    >
      <h3
        class="case_title_h2 m-24_bottom"
      >
        Technical Development
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-48_bottom media-m-24_bottom"
      >
        Mad Devs successfully met stakeholder requirements by updating the app from infrastructure development to
        backend and mobile development for their goals and purposes. The development process was as follows:
      </LazyCaseStudiesUITextParagraph>
    </div>
    <LazyCaseStudiesBilimappSectionsSubSectionInfrastructureDev />
    <LazyCaseStudiesBilimappSectionsSubSectionBackendDev />
    <LazyCaseStudiesBilimappSectionsSubSectionMobileDev />
  </section>
</template>
<style lang="scss" scoped>
.case-bilim__technical {
  &-image-wrapper {
    max-width: 443px;
    margin: auto;

    @media screen and (max-width: 768px) {
      max-width: 299px;
    }
  }
}
</style>

<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <section
      class="container_full case_infrastructure-scheme-wrapper background-color-silver m-48_bottom media-m-24_bottom"
    >
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom case_text-align-center">
          Infrastructure scheme
        </h2>
        <LazySharedLottieMad
          id="infrastructure-scheme"
          class="case_lottie"
          height="774px"
          :lottie-link="$getMediaFromS3(`/images/Cases/godee/lottie/infrastructure-scheme.json`)"
          :autoplay="true"
        />
      </section>
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        The infrastructure is hosted on the Digital Ocean developer cloud.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        Our applications send requests to the Nginx server, and then they are processed via the gRPC framework and
        each application is addressed to separate APIs. These APIs refer to Redis quick-caching Streams and the
        Georeferencing service, which allows bus drivers to be on track along their routes.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-72_bottom media-m-48_bottom">
        Then all information, collected and processed by these services, is controlled via the Web Admin panel,
        which is connected to the PostgreSQL database, OSRM, Firebase and push notification services. We use Docker
        containers throughout the development process.
      </LazyCaseStudiesUITextParagraph>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 645px;
  }
}
</style>

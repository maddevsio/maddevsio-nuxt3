<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <div class="container_regular">
      <h2
        class="case_title_h2 m-24_bottom media-m-12_bottom"
      >
        Mobile applications
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        We developed mobile applications that can handle the full range of functions a taxi service needs. Passengers,
        drivers, and operators interact through a thoroughly automated environment. Passengers order a cab with just a
        few taps, drivers can accept orders within seconds, and all journeys can be tracked in real time.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div
      class="container_full background-color-sky-blue p-48_top p-16_bottom m-48_bottom"
    >
      <div class="container_middle">
        <LazyCaseStudiesUIPicture
          :width="891"
          :height="517"
          file="phone-app"
          alt="phone-app"
          folder="nambataxi"
          extension="png"
        />
      </div>
    </div>
    <div class="container_regular">
      <h3
        class="case_title_h4 m-12_bottom "
      >
        Ariadna: Data geocoder
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Ariadna is an in-house developed, open-source geocoder based on ElasticSearch that uses OpenStreetMap. The tool
        searches for coordinates using the names of places and synonyms. It can find crossroads and addresses within a
        certain radius. It does reverse geocoding and updates automatically as it receives new data from drivers.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuoteBox
        class="m-48_bottom"
        author="Alexander Edakin, Backend Developer"
      >
        One of the most challenging things in the project was to enable human-friendly search on the map. Ariadna was a
        unique solution that handled the task.
      </LazyCaseStudiesUITextQuoteBox>
      <h3
        class="case_title_h2 m-24_bottom media-m-12_bottom"
      >
        The overall interaction scheme
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The result was a complex yet reliable system. It features six roles (Operator, Passenger, Partner, Driver,
        Manager, and Corporate Client), and here’s how interactions among apps and third-party software go:
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle background-color-silver m-96_bottom media-m-48_bottom">
      <div class="p-48_top p-48_bottom media-p-16_top media-p-16_bottom">
        <img
          loading="lazy"
          :width="969"
          :height="713"
          :src="$getMediaFromS3(`/images/Cases/nambataxi/svg/schema.svg`)"
          alt="Internal Schema"
          class="case_image-schema"
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_image-schema{
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>

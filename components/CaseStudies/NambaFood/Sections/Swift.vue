<script setup lang="ts">
import { adminPanel, swiftCards } from '~/components/CaseStudies/NambaFood/constants/nambaFoodConstants'

const isIphone = ref(false)
const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  isIphone.value = !!navigator.userAgent.match(/(iPhone)/i)
})
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top m-48_bottom media-m-48_top media-m-12_bottom">
        Swift admin panel — intelligent delivery control
      </h2>
    </section>
    <section class="container_middle">
      <LazyCaseStudiesUISwiperWithThumbs
        :components="adminPanel"
        :safari-top-bar="true"
        :box-shadow="true"
        slider-description=""
        safari-top-bar-image="swiper-frame"
        safari-top-bar-alt="Namba Food: Food and Grocery Delivery Service Website Header."
        :width="1026"
        :height="525"
      />
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-56_top media-m-24_top">
        The Swift microservice-based admin panel receives order information from the control panel and helps the
        operators to overview and manage the delivery processes. It displays orders by statuses as diagrams.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
        The Swift admin panel helps operators to stay in touch with a courier if there is an issue on the way.
      </LazyCaseStudiesUITextQuoteBox>
      <LazyCaseStudiesUIColoredCards
        :cards-data="swiftCards"
        grid-type="two-two"
        class="m-72_bottom media-m-48_bottom"
      />
      <h3 class="case_title_h3 m-12_bottom">
        Intelligent auto-assignment system for courier management
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-8_bottom">
        The intelligent auto-assignment of orders allows operators to assign couriers to orders, taking into
        consideration the following factors:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-78_bottom media-m-48_bottom">
        <LazyCaseStudiesUIListDotsItem>Location of a courier, a cafe/restaurant and the end-user address.</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>
          Courier's number of orders delivered during the current shift and in the last three hours.
        </LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>
          End-user location in relation to couriers, who are already carrying the order, and in relation to the next
          order’s pick-up point with the current order.
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <h3 class="case_title_h3 m-12_bottom">
        Auto-assignment system under the hood
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-8_bottom">
        Three open-source solutions work together as a cohesive and smart system to perform auto-assignment of orders.
        This allows you to select the most suitable courier for each order, which reduces delivery time.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-78_bottom media-m-48_bottom">
        <LazyCaseStudiesUIListDotsItem>Ariadna parses open-source map data and inserts them into ElasticSearch.</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>ElasticSearch stores couriers’ current locations.</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>OSMR is a routing engine for the shortest paths and road networks.</LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <h3 class="case_title_h3 m-12_bottom">
        Geocoder Ariadna on ElasticSearch with OpenStreetMap
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom">
        <a
          href="https://github.com/maddevsio/ariadna"
          class="case_link"
          target="_blank"
          rel="noopener"
        >Ariadna is an open-source</a>
        geocoder based on ElasticSearch with OpenStreetMap, in-house developed. The tool searches for coordinates by
        synonyms and names of places, looking for crossroads and addresses in a certain radius, and knows how to reverse
        geocoding and automatically update with new data from drivers.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_middle">
      <div
        :class="{ 'case_box-shadow': !isIphone }"
        class="case_map-video-wrapper"
      >
        <img
          v-if="isIphone"
          loading="lazy"
          :src="$getMediaFromS3('/images/Cases/nambafood/jpg/map-blank.jpg')"
          class="case_ios-map-video-image case_box-shadow"
          data-testid="test-case_ios-map-video-image"
          alt="Video preview"
        >
        <video
          v-else
          id="map-video"
          class="case_map-video lazy"
          width="100%"
          height="100%"
          loop
          muted
          autoplay
        >
          <source
            :data-src="$getMediaFromS3('/videos/map.c41e893.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </section>
</template>

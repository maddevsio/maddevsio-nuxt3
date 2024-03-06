<script setup lang="ts">
import { tripsMonitorInfo } from '~/components/CaseStudies/Godee/constants/godeeConstants'

defineProps({
  isIphone: {
    type: Boolean,
    required: true,
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Trips Monitor
      </h3>
      <LazyCaseStudiesUITextParagraph>
        The Trips Monitor feature enables operators to track every bus in real time and collect data on late or
        early arrivals. More importantly, the operator can contact drivers or passengers quickly if necessary.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_middle m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <div class="case_html-video-wrapper case_box-shadow">
        <div
          v-if="isIphone"
          class="case_video-flex-wrapper"
          data-testid="test-case_video-flex-wrapper"
        >
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :radius="false"
            :width="1026"
            :height="16.45"
            :background="true"
            folder="common"
            file="safari-top-bar-white"
            extension="jpg"
            alt="GoDee: Safari Browser Top Bar White."
          />
          <img
            :src="$getMediaFromS3('/images/Cases/godee/jpg/trip-monitor.jpg')"
            class="case_img"
            alt="Trip Monitor"
            loading="lazy"
            width="1028"
            height="483.81"
          >
        </div>
        <div
          v-else
          class="case_video-flex-wrapper"
        >
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :radius="false"
            :width="1026"
            :height="16.45"
            :background="true"
            folder="common"
            file="safari-top-bar-white"
            extension="jpg"
            alt="GoDee: Safari Browser Top Bar White."
          />
          <video
            id="trip-monitor"
            class="case_html-video lazy"
            width="100%"
            height="100%"
            loop
            muted
            autoplay
          >
            <source
              :data-src="$getMediaFromS3('/videos/trip-monitor.f4a33e6.mp4')"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        The Trips Monitor dashboard displays the following information:
      </LazyCaseStudiesUITextParagraph>
      <LazySharedListNumberedBox class="m-96_bottom media-m-48_bottom">
        <LazySharedListNumberedBoxItem
          v-for="info in tripsMonitorInfo"
          :key="info"
        >
          {{ info }}
        </LazySharedListNumberedBoxItem>
      </LazySharedListNumberedBox>
    </section>
  </section>
</template>

<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  lazyLoadVideo()
})
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-56_top media-m-48_top m-12_bottom">
        SJMC Hardware
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Hundreds of pieces of equipment are master-mindedly organised to transform content stored in audio, video, and
        subtitles format to interactive monitors that are run on multiple servers.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full case_full-screen-img">
      <LazyCaseStudiesUIPicture
        :width="1440"
        :height="726"
        folder="sjmc"
        file="immersive-gallery"
        extension="jpg"
        alt="The SJMC Immersive Gallery."
      />
    </section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-48_top m-12_bottom">
        WATCHOUT
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        WATCHOUT is a multi-display production and presentation system that enables the SJMC to arrange displays in
        unusual ways and create seamless images and videos. The absence of gaps between display surfaces is possible
        due to the WATCHOUT system that distributes the content and keeps everything in sync across all connected
        displays.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full background-color-silver">
      <section class="container_middle">
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Cases/sjmc/gif/watchpax.gif')"
          class="case_gif"
          alt="WATCHOUT - Multi-Display Production and Presentation Software."
          :width="1026"
          :height="653"
        >
      </section>
    </section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-96_top media-m-48_top m-12_bottom">
        BRIX
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Essentially, BRIX is an ultra-compact multimedia computer that can be hung on a wall. The advanced graphics
        card delivers heavy content to multiple monitors simultaneously. Moreover, each BRIX is managed by the MMIT
        Brain to work in synchronisation with mobile applications.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full background-color-silver">
      <section class="container_middle">
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Cases/sjmc/gif/brix.gif')"
          class="case_gif"
          alt="Ultra-Compact Multimedia Computer - BRIX."
          :width="1026"
          :height="367"
        >
      </section>
    </section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-96_top media-m-48_top m-12_bottom">
        Bluetooth beacons
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        The mobile application’s positioning algorithm collects the location data of each user via 150 Bluetooth
        beacons located all over the centre.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        The limited space in the SJMC made detecting each visitor’s location and continuously refreshing a list of
        available content nearby challenging.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full case_sec-container background-color-black-primary">
      <LazyCaseStudiesSJMCUIHardwareVideo />
    </section>
    <section class="container_regular">
      <p class="case_image-description m-34_top media-m-24_top">
        Playback of content in the application when approaching the bluetooth beacons.
      </p>
    </section>
    <section class="container_regular m-56_top media-m-24_top m-96_bottom media-m-72_bottom">
      <div class="case_column-container">
        <div class="case_column-item">
          <h4 class="case_title_h4 m-8_bottom media-m-2_bottom">
            60,000 visitors
          </h4>
          <LazyCaseStudiesUITextParagraph> On an annual basis move throughout the centre. </LazyCaseStudiesUITextParagraph>
        </div>
        <div class="case_column-item">
          <h4 class="case_title_h4 m-8_bottom media-m-2_bottom">
            150 Bluetooth beacons
          </h4>
          <LazyCaseStudiesUITextParagraph>
            Determine the location of each smartphone to deliver the right content at the right time.
          </LazyCaseStudiesUITextParagraph>
        </div>
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_sec-container {
    position: relative;
    padding: 60px 0;

    @media screen and (max-width: 768px) {
      padding: 50px 0;
    }
  }
}
</style>

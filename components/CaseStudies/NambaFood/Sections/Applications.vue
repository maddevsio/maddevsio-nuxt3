<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()

const isIphone = ref(false)

onMounted(() => {
  isIphone.value = !!navigator.userAgent.match(/(iPhone)/i)
})
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
        Web version and mobile applications for end-users
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Namba Food is not a simple catalogue of goods and services, as it aims to seamlessly blend into the modern, busy
        lifestyle of its customers. Developing a convenient process for ordering products and making it stress-free was
        key.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full background-color-silver p-75_top p-75_bottom media-p-16_top media-p-16_bottom">
      <div
        class="case_full-screen-phone-video-wrapper"
      >
        <img
          v-if="isIphone"
          loading="lazy"
          :src="$getMediaFromS3('/images/Cases/nambafood/png/iphone-video-preview.png')"
          class="case_phone-ios-image"
          data-testid="test-case_phone-ios-image"
          alt="Video preview"
        >
        <video
          v-else
          id="iphone-silver-video"
          class="case_full-screen-video lazy"
          width="100%"
          height="100%"
          loop
          muted
          autoplay
        >
          <source
            :data-src="$getMediaFromS3('/videos/mobile-applications-for-end-users.faaab2d.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { generalProjectList } from '~/components/CaseStudies/Megauni/constants/megauniConstants'

const { $getMediaFromS3 } = useMediaFromS3()

const isIphone = ref(false)

onMounted(() => {
  isIphone.value = !!navigator.userAgent.match(/(iPhone)/i)
  lazyLoadVideo()
})
</script>
<template>
  <section class="case_megauni__general m-96_bottom media-m-48_bottom">
    <div
      class="container_regular m-48_bottom"
    >
      <h3
        class="case_title_h2 m-12_bottom"
      >
        General Project Features
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        From the very beginning, it was clear that the MegaUni project required the development of several features:
      </LazyCaseStudiesUITextParagraph>
      <h4
        class="case_title_h4 m-12_bottom"
      >
        1. Micro frontends
      </h4>
      <LazyCaseStudiesUITextParagraph>
        In this project, we decided to use a micro-frontend pattern where web application UIs are composed
        of semi-independent fragments. All fragments are developed, deployed, and tested independently.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-32_top m-72_bottom media-m-48_bottom">
      <div class="container_middle case_megauni__general-video-wrapper">
        <video
          v-if="!isIphone"
          id="megauni-video"
          :loop="true"
          :muted="true"
          :autoplay="true"
          width="860"
          height="554"
          class="case_megauni__general-video lazy"
        >
          <source
            :data-src="$getMediaFromS3('/videos/megauni-video-notebook.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
        <LazyCaseStudiesUIPicture
          v-else
          :shadow="false"
          :width="860"
          :height="554"
          :lazy="false"
          extension="png"
          folder="megauni"
          file="megauni-fallback-macbook"
          alt="MegaUni Site Video"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom"
    >
      <h4
        class="case_title_h4 m-12_bottom"
      >
        2. Users’ support
      </h4>
      <LazyCaseStudiesUITextParagraph>
        To address issues, concerns, and suggestions, our team has integrated Freshworks services to the platform.
        It allows users to use live support and a handy FAQ section in one place.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-72_top p-72_bottom m-72_bottom media-p-20_bottom media-p-20_top media-m-48_bottom">
      <div class="container_middle case_megauni__general-image-wrapper">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :width="891"
          :height="515"
          :lazy="false"
          extension="png"
          folder="megauni"
          file="phones-screenshots"
          alt="MegaUni Mobile View"
        />
      </div>
    </div>
    <div
      class="container_regular m-24_bottom"
    >
      <h4
        class="case_title_h4 m-12_bottom"
      >
        3. Live classes
      </h4>
      <LazyCaseStudiesUITextParagraph>
        We used the LTI Pro app to integrate Zoom video conferencing into the MegaUni platform to provide a new,
        engaging way to educate students through live lessons.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-72_bottom media-m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Opportunities with MegaUni"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="621.81"
          folder="megauni"
          file="live-class"
          extension="png"
          alt="Live Class MegaUni"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom"
    >
      <h4
        class="case_title_h4 m-12_bottom"
      >
        4. Notifications
      </h4>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        By using
        <a
          href="https://sendgrid.com"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          the SendGrid
        </a> tool, university staff can send three types of notifications via the
        <a
          href="https://docs.djangoproject.com/en/4.0/ref/contrib/admin/"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          Django
        </a> administration panel:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-12_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, i) in generalProjectList"
          :key="`${item}-${i}`"
        >
          {{ item }}
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div class="container_middle m-72_bottom media-m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Opportunities with MegaUni"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="513.81"
          folder="megauni"
          file="email-notif"
          extension="png"
          alt="Email notifications MegaUni"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom"
    >
      <h4
        class="case_title_h4 m-12_bottom"
      >
        5. Free trial
      </h4>
      <LazyCaseStudiesUITextParagraph>
        Anyone interested in online education, whether universities or students, have an opportunity to work with
        MegaUni platform for free and see if it is convenient enough. The trial period includes access to the course
        for seven days and the first two sub-sections of each course section. During this time, users can explore the
        platform’s primary functionality and learn how easy it is to use the platform.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-72_bottom media-m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Opportunities with MegaUni"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="497.81"
          folder="megauni"
          file="megauni-start-screen"
          extension="png"
          alt="Start Screen website MegaUni"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom"
    >
      <h4
        class="case_title_h4 m-12_bottom"
      >
        6. Organization management
      </h4>
      <LazyCaseStudiesUITextParagraph>
        During the project development, we encountered the following problems: We have universities, majors,
        and courses but have no clear relationship between them. We set up an organizational management structure
        where we established a certain structural understanding between the main entities.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-50_top p-50_bottom m-72_bottom media-m-48_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie m-48_bottom"
          height="607px"
          :lottie-link="$getMediaFromS3(`/images/Cases/megauni/lottie/block-schema-new.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div
      class="container_regular"
    >
      <h4
        class="case_title_h4 m-12_bottom"
      >
        7. Payment Integration
      </h4>
      <LazyCaseStudiesUITextParagraph
        class="m-72_bottom media-m-48_bottom"
      >
        MegaUni supports an online payment method: the VNPay payment system.
        Users can use three outstanding payment methods: scanning QR codes by a mobile banking app,
        payment by domestic cards or accounts, and payment by international credit cards.
      </LazyCaseStudiesUITextParagraph>
      <h4
        class="case_title_h4 m-12_bottom"
      >
        8. Integration H5P videos
      </h4>
      <LazyCaseStudiesUITextParagraph>
        The H5P functionality is integrated into the MegaUni platform. After creating an HTML5-based
        interactive video and adding it to the lesson, students can interact with images, text, links,
        and quizzes while watching the video.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__general {
  &-video-wrapper,
  &-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &-video {
    width: 100%;
    height: auto;
  }

  & .case_list {
    padding-left: 10px;
  }

  & .list-item_dot {
    margin-bottom: 0;
    padding-right: 20px;
  }
}
</style>

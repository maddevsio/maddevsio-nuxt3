<script setup lang="ts">
const animationSettings = {
  reverse: true,
  maxMove: 30,
  customMove: true,
  speed: 0.3,
  startPoint: 3,
  setIndentTop: true,
}
</script>
<template>
  <div class="case-high container_full case_container background-color-blue m-72_bottom media-m-48_bottom p-72_top media-p-41_top">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title">
        Veeqo high-level overview
      </h2>
      <LazyCaseStudiesUITextParagraph class="case_sec-desc m-12_top m-80_bottom media-m-41_bottom">
        The service has multiple subsystems integrated into one platform
      </LazyCaseStudiesUITextParagraph>
      <div class="case_dashboard-container m-60_bottom media-m-48_bottom">
        <div class="case_dashboard-item">
          <LazyCaseStudiesUITextParagraphUppercase class="case_dashboard-desc m-8_bottom media-m-6_bottom">
            Dashboard
          </LazyCaseStudiesUITextParagraphUppercase>
          <h3 class="case_title_h5 case_dashboard-title media-m-41_bottom">
            The dashboard used to visualize <br> reports
          </h3>
        </div>
        <div
          v-mad-parallax="animationSettings"
          class="case_dashboard-item"
        >
          <LazyCaseStudiesUITextParagraphUppercase class="case_dashboard-desc m-8_bottom media-m-6_bottom">
            Subsystems
          </LazyCaseStudiesUITextParagraphUppercase>
          <h3 class="case_title_h5 case_dashboard-title">
            Inventory management, Management, Warehouse, Reporting
          </h3>
        </div>
      </div>
    </div>
    <div v-mad-parallax="animationSettings">
      <div
        class="case_image-wrapp"
      >
        <LazyCaseStudiesUIPicture
          folder="veeqo"
          file="high-level"
          extension="png"
          alt="Veeqo High Level Overview."
          :width="1440"
          :height="335"
          :background="false"
          :lazy="false"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.case {
  &_container {
    max-height: 762px;
    overflow: hidden;
  }

  &_title,
  &_sec-desc {
    text-align: center;
  }

  &_title,
  &_sec-desc,
  &_dashboard-title {
    color: $text-color--white;
  }

  &-high {
    :deep(.case_dashboard-desc.case_paragraph-uppercase),
    :deep(.case_dashboard-title.case_paragraph),
    :deep(.case_sec-desc.case_paragraph) {
      color: $text-color--white;
    }
  }

  &_dashboard-container {
    @include grid(repeat(2, 1fr), auto, 0, 0);
  }

  &-high {
    :deep(.case_dashboard-desc.case_paragraph-uppercase) {
      opacity: 0.5;
    }
  }

  &_animate-text {
    margin-top: 30px;
  }

  &_image-wrapp {
    min-width: 3028px;
    max-width: 3028px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 870px) {
      left: unset;
      right: 1086px;
      transform: none;
    }
  }

  &_no-wrap {
    white-space: nowrap;
  }

  @media screen and (max-width: 960px) {
    &_dashboard-container {
      @include grid(repeat(1, 1fr), auto, 0, 0);
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    &_container {
      max-height: 732px;
    }

    &_animate-text {
      margin-top: 0;
    }
  }
}
</style>

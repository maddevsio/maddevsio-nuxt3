<script setup lang="ts">
import { backendDevAfterImageList, backendDevList } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'
</script>
<template>
  <div>
    <div
      class="container_regular"
    >
      <h4
        class="case_title_h4 m-24_bottom"
      >
        Backend Development
      </h4>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        The developed backend offers a wide range of valuable features, including the following:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, i) in backendDevList"
          :key="`${item}-${i}`"
        >
          <span v-html="item" />
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div class="container_middle m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :background="true"
          :height="16.45"
          :lazy="false"
          :radius="true"
          :shadow="false"
          :width="1028"
          alt="Opportunities with MegaUni"
          extension="jpg"
          file="safari-top-bar-black"
          folder="common"
        />
        <LazyCaseStudiesUIPicture
          :height="416.81"
          :lazy="false"
          :radius="true"
          :shadow="false"
          :width="1028"
          alt="Wysiwyg editor Bilim"
          extension="png"
          file="wysiwyg-editor"
          folder="bilimapp"
        />
      </div>
    </div>
    <div class="container_regular m-48_bottom">
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, i) in backendDevAfterImageList"
          :key="`${item}-${i}`"
        >
          <span v-html="item" />
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div class="container_full background-color-silver p-48_top media-p-24_top">
      <div class="container_middle">
        <div class="case-bilim__technical-image-wrapper">
          <LazyCaseStudiesUIPicture
            :height="445"
            :lazy="false"
            :shadow="false"
            :width="443"
            alt="Womens cycle Interface"
            extension="png"
            file="womens-cycle"
            folder="bilimapp"
          />
        </div>
      </div>
    </div>
    <LazyCaseStudiesUITextParagraph
      class="case_text-align-center case-source-text m-12_top m-48_bottom"
    >
      Notification on the main screen
    </LazyCaseStudiesUITextParagraph>
    <div
      class="container_regular"
    >
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsItem>
          Quick error reports to tech support. Mad Devs integrated the
          Uptime Robot alerting tool for
          sending error notifications to project support.
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
  </div>
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

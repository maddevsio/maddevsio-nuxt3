<script setup lang="ts">
import { platformArchList } from '~/components/CaseStudies/Megauni/constants/megauniConstants'
</script>
<template>
  <section class="case_megauni__platform m-96_bottom media-m-48_bottom">
    <div
      class="container_regular m-48_bottom"
    >
      <h3 class="case_title_h2 m-12_bottom">
        MegaUni’s Platform Architecture
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        Open edX is the open-source platform co-founded by Harvard University and the Massachusetts
        Institute of Technology. According to the Boston Globe,
        <a
          href="https://www.bostonglobe.com/opinion/2019/08/15/how-boston-suites-can-prepare-their-employees-for-future-work-how-boston-suites-can-prepare-their-employees-for-future-work/NhbqjrCtMwpQIOYZfbA5nM/story.html"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          Open edX technology is adopted
        </a> by universities
        such as UC Berkeley, Georgetown, and Stanford, and companies such as Partners HealthCare and Microsoft.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        Students and teachers can engage with this software platform in an interactive, modular manner.
        It promotes active learning with video snippets, interactive components, and game-like experiences.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The MegaUni platform is based on the open-source Open edX Lilac project. The team decided to develop on this platform because of its flexible engine.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        Below, we will briefly explain the platform’s architecture simply as possible.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_bottom">
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
          :height="515.81"
          folder="megauni"
          file="architecture"
          extension="png"
          alt="Platform Architecture MegaUni"
        />
      </div>
      <LazyCaseStudiesUITextParagraph class="case_text-align-center case_megauni__platform-source-text m-24_top">
        Image from
        <a
          href="https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/architecture.html"
          target="_blank"
          rel="noopener"
        >
          Open edX Architecture
        </a>
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div
      class="container_regular m-48_bottom"
    >
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The key components of the Open edX architecture include the Learning Management System (LMS),
        front end, course browsing, course structure, studio, discussions, analytics, and search.
        We relied on the most important Open edX software applications in our work process:
        the LMS and Content Management System (CMS) called Studio.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The MegaUni platform was built on the Open edX version Lilac, released in June 2021,
        and includes several new features for learners, course teams, and developers.
        Lilac was orchestrated by the Build, Test, Release working group of the Open edX community.
        For the first time, it is recommended as an installation method that is entirely developed and
        maintained outside of edX by the
        <a
          href="https://docs.tutor.edly.io/"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >Tutor</a>. In addition to the existing native installation method,
        Tutor provides a simplified and easier-to-maintain installation method.
        It is open as the Open edX platform and licensed under the AGPL v3.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        Open edX courses are organized into three levels: sections, subsections, and units.
        Thus, lessons are composed of units called Xblocks, which can be written by anyone,
        allowing educators and technologists to extend the set of components for their classes.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-24_bottom">
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
          :height="515.81"
          folder="megauni"
          file="personal-account"
          extension="png"
          alt="Personal Account MegaUni"
        />
      </div>
      <LazyCaseStudiesUITextParagraph class="case_text-align-center case_megauni__platform-source-text m-24_top">
        Image from a personal account
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_regular">
      <LazyCaseStudiesUITextParagraph
        class="m-12_bottom"
      >
        In addition to XBlocks, there are a few ways to extend a course behaviour:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-12_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, i) in platformArchList"
          :key="`${item}-${i}`"
        >
          {{ item }}
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__platform {
  .case_megauni__platform-source-text{
    font-size: 14px;
    line-height: 166%;
    color: $text-color--grey-opacity-40-percent;

    a {
      color: $text-color--grey-opacity-40-percent;
      text-decoration: underline;
    }
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

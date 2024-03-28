<script setup lang="ts">
import { megauniCollab } from '~/components/CaseStudies/Megauni/constants/megauniConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_megauni__about m-96_bottom m-96_top media-m-48_top media-m-48_bottom">
    <div class="container_regular m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUITextParagraph>
        Owing to the COVID-19 pandemic worldwide, many offline services have stopped working.
        University campuses were closed, and thousands of students could not attend classes because of the pandemic.
        MegaUni, as a subsidiary of the widespread educational institution, came up with a modern solution not only
        to create an educational platform for the pandemic period but also develop digital education in Vietnam.
        Thus, MegaUni offers accessible online education by connecting universities with students. Its main feature
        and difference from other platforms are that it contains both an open content, which is available for everyone,
        and a paid content, which is available only for students at certain universities.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-72_top p-72_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie m-48_bottom"
          height="270.41px"
          :lottie-link="$getMediaFromS3(`/images/Cases/megauni/lottie/about.json`)"
          :autoplay="true"
        />
        <div class="case_megauni__about-separator" />
        <div
          class="case_megauni__about-collabs m-48_bottom"
        >
          <div
            v-for="(collab, i) in megauniCollab"
            :key="`${collab.icon}-${i}`"
            class="case_megauni__about-collabs-item"
          >
            <img
              loading="lazy"
              width="90"
              height="89"
              :src="$getMediaFromS3(`/images/Cases/megauni/svg/${collab.icon}.svg`)"
              :alt="collab.alt"
              class="case_megauni__about-collabs-image"
            >
          </div>
        </div>
        <LazyCaseStudiesUITextParagraph
          class="case_text-align-center"
        >
          The company collaborates with leading universities and enterprises in Vietnam, including Broward College
          Vietnam, Phu Xuan University, Ho Chi Minh City University of Technology (HCMUT), American Polytechnic College
          (Trường Cao đẳng Việt Mỹ), and EQUEST Education Group.
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__about {
  &-separator {
    background: -moz-linear-gradient(left, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.04) 10%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.04) 0%,rgba(0,0,0,0.04) 10%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 90%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(0,0,0,0.04) 0%,rgba(0,0,0,0.04) 10%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 90%,rgba(0,0,0,0) 100%);
    margin: 48px 0;
    height: 1px;
  }

  &-collabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    &-item {
      width: 11%;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 25.5px 14.5px;

      @media screen and (max-width: 430px) {
        padding: 20px 11.5px;
        width: 20%;
      }
    }

    &-image {
      width: 100%;
      height: auto;

      @media screen and (max-width: 430px) {
        width: 76px;
      }
    }
  }
}
</style>

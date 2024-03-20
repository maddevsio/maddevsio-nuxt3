<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'megauni',
  defaultOgImage: 'https://maddevs.io/megauni-meta-banner.jpg',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 286,
  height: 70,
  folder: 'megauni',
  file: 'megauni-logo',
  alt: 'MegaUni logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--megauni">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="megauni"
      video-name="/videos/megaunis-banner.mp4"
      video-fallback-path="/images/Cases/megauni/webp/megauni-banner.webp"
    >
      <template #title>
        MegaUni: <br>
        Educational Platform
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          MegaUni team, in collaboration with Mad Devs, created an educational platform that is <br>
          more than a decent solution for universities that suddenly switched to online learning <br>
          because of the COVID-19 pandemic.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesMegauniMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/lido/"
      class-name="lido"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/lido-footer.svg`)"
          width="267"
          height="66"
          alt="Lido"
          class="case_logotype-lido"
        >
      </template>
      Lido: decentralized
      <br>
      staking platform
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/yourcast/styles';
@import '../../assets/styles/cases/media';

.case--megauni {
  & .case_header-megauni {
    background: rgba(35, 35, 35, 0.9);
  }

  & .case_header-content {
    column-gap: 122px;
  }

  & .case_megauni-logo {
    width: 286px;
    height: 70px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 176px;
      height: 43px;
    }
  }

  & .case_footer {
    padding: 57px 0 75px;
  }

  & .case_title-lido {
    font-size: 48px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -2px;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    margin: 58px 0 32px;

    br {
      display: none;
    }

    @media screen and (max-width: 768px) {
      font-size: 21.25px;
      letter-spacing: -0.02em;
      margin: 41px 0 32px;

      br {
        display: block;
      }
    }
  }

  & .case_logotype-lido {
    @media screen and (max-width: 768px) {
      width: 166px;
      height: 42px;
    }
  }
}
</style>

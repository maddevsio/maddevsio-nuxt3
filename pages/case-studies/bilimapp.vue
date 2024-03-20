<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'bilimapp',
  defaultOgImage: 'https://maddevs.io/bilimapp-meta-banner.jpg',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 120,
  height: 212.59,
  folder: 'bilimapp',
  file: 'bilimapp-logo',
  alt: 'BilimApp logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--bilimapp">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="bilimapp"
      video-name="/videos/bilimapp-banner-center.mp4"
      video-fallback-path="/images/Cases/bilimapp/webp/banner-fallback.webp"
    >
      <template #title>
        Bilim App: A Health <br>
        Tech Solution
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          How Mad Devs helped the Turkmen non-profit initiative Saglyk <br>
          (<i>saglyk</i> means <i>health</i> in Turkmen) enhance Bilim, <br>
          a health app for women and girls
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesBilimappMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/megauni/"
      class-name="megauni"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/megauni-footer-logo.svg`)"
          width="267"
          height="66"
          alt="Lido"
          class="case_logotype-megauni"
        >
      </template>
      MegaUni: Educational Platform
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/yourcast/styles';
@import '../../assets/styles/cases/media';

.case--bilimapp {
  & .case_header-bilimapp {
    &::before {
      background: #800F94;
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 768px) {
    & .case_main-video {
      object-position: 44% 0;
    }
  }

  & .case_header-content {
    column-gap: 258px;
  }

  & .case_bilimapp-logo {
    width: 120px;
    height: 212.59px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 54px;
      height: 95.67px;
    }
  }

  & .case_footer {
    padding: 57px 0 75px;
  }

  & .case_title-megauni {
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

  & .case_logotype-megauni {
    @media screen and (max-width: 768px) {
      width: 180px;
      height: 42.21px;
    }
  }
}
</style>

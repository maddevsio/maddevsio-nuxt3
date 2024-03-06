<template>
  <section class="case-bilim__behind m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
    <div
      class="container_regular m-48_bottom media-m-24_bottom"
    >
      <h2
        class="case_title_h2 m-12_bottom"
      >
        Behind the Project
      </h2>
      <LazyCaseStudiesUITextParagraph>
        Since 2009, Saglyk has provided comprehensive public health information on its website.
        Saglyk aims to promote a healthy family, community, and environment. They develop health literacy and public
        engagement around health issues in Turkmenistan, including environmental health.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-12_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
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
          :height="416.81"
          folder="bilimapp"
          file="start-screen-bilimapp"
          extension="png"
          alt="Start Screen Bilim"
        />
      </div>
      <LazyCaseStudiesUITextParagraph
        class="case_text-align-center case-source-text m-24_top"
      >
        Image from the official site
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_regular m-48_bottom">
      <LazyCaseStudiesUITextParagraph>
        To help the women of Turkmenistan take care of their health, Saglyk created the Bilim app. According to expert
        forecasts for 2022, 6.16 million people live in Turkmenistan, and 50.8% of them are women. The application’s
        target audience is reproductive-aged women (between roughly 15 and 50 years of age) who primarily speak Turkmen.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full case-bilim__behind-image-container background-color-silver p-48_top media-p-24_top">
      <div class="container_middle">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :width="1015"
          :height="651"
          :lazy="false"
          extension="png"
          folder="bilimapp"
          file="three-phones"
          alt="Bilim App Interface"
        />
      </div>
    </div>
    <LazyCaseStudiesUITextParagraph
      class="case_text-align-center case-source-text m-12_top m-48_bottom"
    >
      Images from the Google Play Market
    </LazyCaseStudiesUITextParagraph>
    <div
      class="container_regular"
    >
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        Educating women about their health and rights is challenging because many factors must be considered,
        such as education levels, cultural and religious traditions, and social environments.
        Therefore, it is important to use accurate vocabulary and to be careful in handling culturally taboo
        and sensitive topics. The app is only available in the Turkmen language because Russian-speaking Turkmen
        have access to apps in Russian. With these factors in mind, Saglyk developed the first version of the Bilim app.
        However, with time, they faced problems that required
        <LazyCaseStudiesUILinkInsideText
          href="https://maddevs.io/delivery-models/transferring-projects/"
          text-color="blue"
        >
          reaching out to other development companies.
        </LazyCaseStudiesUILinkInsideText>
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        The first version of the application looked much like other period tracker apps, but Saglyk wanted to scale
        up and improve the application. They wanted to partner with a company whose already established
        processes could take this project to the next level and transform into a turnkey project.
        They organized a tender for software companies to decide who would be involved in this project.
        From all the applicants, Saglyk chose Mad Devs because their team offered detailed terms, an understanding of
        the country, and proven qualifications before starting the revamping process.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-bilim__behind {
  &-image-container {
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      width: 100%;
      background: linear-gradient(0deg, #FFFFFF 32.51%, rgba(241, 241, 241, 0) 100%);
      height: 150px;

      @media screen and (max-width: 430px) {
        height: 100px;
      }
    }

    @media screen and (max-width: 768px) {
      & .container_middle {
        display: flex;
        justify-content: center;
      }

      :deep(.image) {
        min-width: 650px;
      }
    }
  }
}
</style>

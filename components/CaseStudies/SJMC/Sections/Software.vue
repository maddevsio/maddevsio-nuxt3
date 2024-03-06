<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top media-m-48_top m-12_bottom">
        The SJMC Software
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom">
        Transferring a project to another software partner is never easy for all parties involved. So, let us
        introduce you to the new era of interpretive centres and walk you through the complexity of the SJMC project.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Multimedia Management IT Brain
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Personalised experience at your own speed and in your own language
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full background-color-silver">
      <div class="container_regular">
        <LazySharedLottieMad
          id="multimedia-management"
          class="case_lottie"
          height="635px"
          :lottie-link="$getMediaFromS3(`/images/Cases/sjmc/lottie/multimedia-management.json`)"
          :autoplay="true"
        />
      </div>
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-48_top media-m-24_top">
        Since the available existing solutions had limitations and restrictions, The Sir John Monash Centre hired an
        Australia-based IT company to create an integrated multimedia solution to coordinate and communicate with
        every piece of technology in the centre.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_top media-m-12_top">
        The MMIT Brain synchronises two information systems: the multimedia management system and the smart building
        management system. The multimedia software and hardware management system controls, supervises and monitors
        lighting, audio, video and special effects for the SJMC. The universal software infrastructure to building
        controls infrastructure integrators is the third-party framework that works as a foundation of the SJMC
        intelligent building. It supports a complete IP-based information network for real-time management and
        controls the SJMC's multiple facilities. This one-stop software manages all building operations, energy,
        security, and operational systems.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
        The MMIT Brain is a coherent solution that brings together the monitoring and management of two information
        systems.
      </LazyCaseStudiesUITextQuote>
      <LazyCaseStudiesUITextParagraph class="m-16_bottom">
        The MMIT Brain orchestrated the synchronisation of every thread into one coherent solution. Physically
        constructed as a single hardware and software, it performs various services under one hood. Here is a list of
        functions the MMIT Brain performs.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-56_bottom media-m-32_bottom">
        <LazyCaseStudiesUIListDotsItem>
          Delivers content to mobile applications and synchronises subtitles and audio on multimedia screens in 3
          languages (German, English, and French).
        </LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Orchestrates the experience of multiple SJMC visitors to avoid interference.</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Performs interaction between two internal information systems.</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Enables content managers to deploy and modify new content.</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Synchronises content storage and other multimedia computers.</LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 642px;
    padding: 35px 0;

    @media screen and (max-width: 460px) {
      padding: 20px 0;
    }
  }
}
</style>

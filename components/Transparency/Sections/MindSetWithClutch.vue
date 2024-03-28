<script setup lang="ts">
</script>
<template>
  <section class="transparency-mindset">
    <div class="container transparency-mindset__container">
      <LazyTransparencyUITitle
        title-tag="h2"
        with-subtitle
        max-width-title="1043px"
        max-width-subtitle="1072px"
      >
        <template #title>
          Transforming client experience with our transparency mindset
        </template>
        <template #subtitle>
          Through the struggle with the
          <a
            href="https://en.wikipedia.org/wiki/Fear,_uncertainty,_and_doubt"
            rel="noopener nofollow"
            target="_blank"
          >FUD factor</a>, the formation of principles, and a culture of transparency
          in the company, we bring our interaction with customers to a new level, where there is no room for doubts and mistrust.
        </template>
      </LazyTransparencyUITitle>
      <LazySharedClutchReviewsSlider
        class="transparency-mindset__clutch-slider"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.transparency-mindset {
  background: #fff;

  &__clutch-slider {
    margin-top: 48px;
  }

  @media screen and (max-width: 1026px) {
    .container {
      padding-inline: 77px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 24px;
    }
  }
}
</style>

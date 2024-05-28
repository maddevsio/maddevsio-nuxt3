<template>
  <section class="download-checklist">
    <div class="container download-checklist__container">
      <h1 class="download-checklist__main-title">
        How to Determine if Penetration Testing is Needed for a Company
      </h1>
      <div class="download-checklist__wrapper">
        <div class="download-checklist__content">
          <h2>Your download link is ready…</h2>
          <p class="download-checklist__description">
            Click the download link below to access the downloadable.
          </p>
          <a
            href="https://maddevsio.s3.eu-west-1.amazonaws.com/pdf/penetration-testing.pdf"
            target="_blank"
            rel="noopener"
            class="download-checklist__link"
          >
            Download now
          </a>
        </div>
        <img
          src="https://images.prismic.io/superpupertest/e47098ad-0bd7-4123-839a-3d257510cb7c_page-preview.webp?auto=format"
          alt="How to Determine if Penetration Testing is Needed for a Company"
          width="500"
          height="321"
          class="download-checklist__image"
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.download-checklist {
  padding-top: 130px;
  height: 100vh;
  color: $text-color--white-primary;

  &__main-title {
    @include font('Inter', 48px, 600);
    line-height: 54px;
    margin-bottom: 32px;
  }

  &__container {
    max-width: 800px;
  }

  &__wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__description {
    margin-top: 24px;
  }

  &__link {
    @include font('Inter', 16px, 600);
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border-color--red-opacity;
    background-color: $bgcolor--red;
    border-radius: 4px;
    color: $text-color--white;
    letter-spacing: -0.02em;
    line-height: 24px;
    box-shadow: none;
    transition: 0.4s;
    cursor: pointer;
    padding: 5px 15px;
    margin-top: 24px;

    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white;
    }

    &:active {
      background-color: $button-active--red;
      border-color: $button-active-border--red;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    &__main-title {
      font-size: 32px;
      line-height: 42px;
    }

    &__wrapper {
      flex-direction: column-reverse;
    }

    &__link {
      display: flex;
    }
  }
}
</style>

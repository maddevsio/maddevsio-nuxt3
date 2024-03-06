<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section
    class="transparency-start-screen"
  >
    <img
      :src="$getMediaFromS3('images/transparency/webp/transparency-start-screen-bg.webp')"
      alt="Start Screen Background"
      width="1848"
      height="731"
      class="transparency-start-screen__bg"
    >
    <div class="container transparency-start-screen__content">
      <h1
        class="transparency-start-screen__title"
      >
        Transparency & Trust
      </h1>
      <div class="transparency-start-screen__descriptions">
        <p class="transparency-start-screen__description transparency-start-screen__description--bold">
          Our approach to creating long-term and effective partnerships with our clients
        </p>
        <p class="transparency-start-screen__description">
          We are dedicated to maintaining transparency in our relationships with clients, as this
          nurtures advantages for project duration, workflow, and costs.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.transparency-start-screen {
  margin-top: 63px;
  padding-bottom: 72px;
  position: relative;

  @media screen and (max-width: 480px) {
    padding-bottom: 80px;
  }

  &::after {
    content: '';
    width: 100%;
    height: 128px;
    display: block;
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    bottom: 0;
    z-index: -1;
  }

  &__bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    object-position: 46% 50%;
  }

  &__content {
    padding-top: 228px;
    display: flex;
    gap: 103px;

    @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding-top: 108px;
      gap: 200px;
    }

    @media screen and (max-width: 1026px) {
      flex-direction: column;
      gap: 15px;
      padding: 84px 77px 0;
    }

    @media screen and (max-width: 768px) {
      padding-inline: 56px;
    }

    @media screen and (max-width: 576px) {
      padding-inline: 24px;
    }

    @media screen and (max-width: 480px) {
      padding-top: 63px;
    }
  }

  &__title {
    @include font('Inter', 100px, 700);
    line-height: 109%;
    color: $text-color--red;

    @include old-safari-support {
      margin-right: 103px;

      @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-right: 200px;
      }

      @media screen and (max-width: 1026px) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }

    @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 64px;
    }

    @media screen and (max-width: 1026px) {
      font-size: 45px;
      max-width: 335px;
    }

    @media screen and (max-width: 768px) {
      max-width: 334px;
    }
  }

  &__descriptions {
    margin-top: 13px;

    @media screen and (max-width: 1026px) {
      margin-top: 0;
      max-width: 424px;
    }
  }

  &__description {
    @include font('Inter', 18px, 400);
    line-height: 130%;
    color: $text-color--quote-box;

    &--bold {
      font-size: 24px;
      font-weight: 600;
      color: $text-color--chinese-black;
      margin-bottom: 32px;
    }

    @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 16px;

      &--bold {
        font-size: 22px;
      }
    }

    @media screen and (max-width: 1026px) {
      font-size: 14px;

      &--bold {
        font-size: 20px;
        margin-bottom: 16px;
        line-height: 155%;
      }
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;

      &--bold {
        font-size: 16px;
      }
    }
  }
}
</style>

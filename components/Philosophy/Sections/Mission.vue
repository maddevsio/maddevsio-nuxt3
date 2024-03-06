<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="our-mission">
    <div
      class="container our-mission__container"
    >
      <div class="our-mission__content">
        <h2
          class="our-mission__title"
        >
          Mission
          <span
            class="our-mission__main-title"
          >
            Automate Everything!
          </span>
        </h2>
        <p
          class="our-mission__main-subtitle"
        >
          We believe human potential is infinite, so we have made it our mission to free it from the waste of routine
          manual labor.
        </p>
        <p
          class="our-mission__subtitle"
        >
          We are creating a new automated world that's simple, safe, and progressive.
          We shape an environment where human potential can be used for the most fundamental discoveries and creative inventions.
        </p>
        <NuxtLink
          to="/expertise/"
          class="our-mission__link-btn"
        >
          Find more about our expertise
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="our-mission__link-btn-arrow"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.50033 2.66675C5.50033 2.39061 5.72418 2.16675 6.00033 2.16675H13.3337C13.6098 2.16675 13.8337 2.39061 13.8337 2.66675V10.0001C13.8337 10.2762 13.6098 10.5001 13.3337 10.5001C13.0575 10.5001 12.8337 10.2762 12.8337 10.0001V3.87386L3.02055 13.687C2.82528 13.8822 2.5087 13.8822 2.31344 13.687C2.11818 13.4917 2.11818 13.1751 2.31344 12.9799L12.1266 3.16675H6.00033C5.72418 3.16675 5.50033 2.94289 5.50033 2.66675Z"
              fill="#111111"
            />
          </svg>
        </NuxtLink>
      </div>
      <div
        class="our-mission__image-wrapper"
      >
        <picture>
          <source
            :srcset="[$getMediaFromS3('images/OurPhilosophy/webp/mission-planet.webp') + ' ', $getMediaFromS3('images/OurPhilosophy/webp/mission-planet@2x.webp 2x')]"
            type="image/webp"
            class="our-mission__image"
          >
          <img
            loading="lazy"
            :srcset="$getMediaFromS3('images/OurPhilosophy/png/mission-planet.png')"
            :src="$getMediaFromS3('images/OurPhilosophy/png/mission-planet@2x.png')"
            width="662"
            height="614"
            class="our-mission__image"
            alt="Mission Planet"
          >
        </picture>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.our-mission {
  padding: 105px 0 54px;
  border: 1px solid #F0EDED;
  margin-bottom: 105px;

  &__container {
    @media screen and (max-width: 440px) {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 63px;
    margin-bottom: 63px;
  }

  &__container {
    position: relative;
  }

  &__content {
    position: relative;
    z-index: 1;
  }

  &__image-wrapper {
    position: absolute;
    width: 47%;
    z-index: 0;
    top: 30px;
    right: 50px;

    @media screen and (max-width: 600px) {
      width: 100%;
      top: -20px;
      right: -50%;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    opacity: 0.3;
  }

  &__title {
    @include font('Poppins', 60px, 700);
    line-height: 125%;
    color: $text-color--black-lighter;

    @media screen and (max-width: 768px) {
      font-size: 46px;
    }

    @media screen and (max-width: 460px) {
      font-size: 40px;
      line-height: 130%;
    }
  }

  &__main-title {
    @include font('Poppins', 130px, 700);
    display: block;
    line-height: 100%;
    color: $text-color--venetian-red;
    margin-top: 20px;

    @media screen and (max-width: 1024px) {
      font-size: 100px;
    }

    @media screen and (max-width: 768px) {
      font-size: 60px;
    }

    @media screen and (max-width: 460px) {
      font-size: 56px;
    }
  }

  &__main-subtitle {
    @include font('Inter', 32px, 700);
    line-height: 41px;
    letter-spacing: -0.013em;
    color: $text-color--chinese-black;
    margin-top: 65px;
    max-width: 715px;

    @media screen and (max-width: 768px) {
      font-size: 25px;
      font-weight: 600;
      line-height: 130%;
      margin-top: 40px;
    }

    @media screen and (max-width: 460px) {
      margin-top: 24px;
      letter-spacing: unset;
    }
  }

  &__subtitle {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--chinese-black;
    margin-top: 28px;
    max-width: 598px;

    @media screen and (max-width: 768px) {
      margin-top: 24px;
    }
  }

  &__link-btn {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--chinese-black;
    padding: 12px 18px;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #36383A;
    min-width: 260px;
    max-width: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 12px;
    margin-top: 32px;
    background: transparent;

    &:hover {
      background: $bgcolor--venetian-red;
      color: $text-color--white-primary;
      border-color: #F5F7F9;

      .our-mission__link-btn-arrow {
        path {
          fill: #F5F7F9;
        }
      }
    }

    @media screen and (max-width: 460px) {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
      margin-top: 24px;
      max-width: 100%;
    }
  }
}
</style>

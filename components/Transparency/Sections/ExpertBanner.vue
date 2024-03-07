<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="expert-banner">
    <div class="container expert-banner__container">
      <div class="expert-banner__content">
        <h3 class="expert-banner__title">
          What can the lack of transparency lead to?
        </h3>
        <p
          class="expert-banner__quote"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="24"
            viewBox="0 0 35 24"
            fill="none"
            class="expert-banner__start-quotemark"
          >
            <path
              d="M11.6118 24H0.875L10.9803 0H17.8224L11.6118 24ZM28.6645 24H17.9276L28.0329 0H34.875L28.6645 24Z"
              fill="#111111"
              fill-opacity="0.2"
            />
          </svg>
          Insufficient transparency within the team makes it challenging to allocate resources rationally,
          assign tasks to the most suitable individuals, and reach agreements on actions become difficult.
          When transparency is missing, project participants are unable to get the full picture,
          leading to a lack of confidence and hindered productivity, potentially resulting in project
          setbacks or exceeding deadlines and budgets.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="24"
            viewBox="0 0 35 24"
            fill="none"
            class="expert-banner__end-quotemark"
          >
            <path
              d="M11.6118 24H0.875L10.9803 0H17.8224L11.6118 24ZM28.6645 24H17.9276L28.0329 0H34.875L28.6645 24Z"
              fill="#111111"
              fill-opacity="0.2"
            />
          </svg>
        </p>
        <div class="expert-banner__photo-section">
          <div class="expert-banner__photo-inner">
            <img
              loading="lazy"
              :src="$getMediaFromS3('images/transparency/webp/kirill-zinchenko.webp')"
              alt="Kirill Zinchenko"
              width="306"
              height="408"
              class="expert-banner__photo"
            >
            <div class="expert-banner__labels">
              <p class="expert-banner__name">
                Kirill Zinchenko
              </p>
              <p class="expert-banner__position">
                Delivery Manager
              </p>
              <NuxtLink
                to="/team/kirill-zinchenko/"
                class="expert-banner__link"
              >
                Learn more
              </NuxtLink>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/team/kirill-zinchenko/"
          class="expert-banner__author"
        >
          <img
            loading="lazy"
            :src="$getMediaFromS3('images/transparency/webp/kirill-zinchenko-mobile.webp')"
            alt="Kirill Zinchenko"
            width="44"
            height="44"
            class="expert-banner__author-photo"
          >
          <div class="expert-banner__author-text-content">
            <p class="expert-banner__author-name">
              Kirill Zinchenko
            </p>
            <p class="expert-banner__author-position">
              Delivery Manager
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.expert-banner {
  padding-bottom: 128px;
  background: #fff;

  &__content {
    background: $bgcolor--lotion;
    border-radius: 5.029px;
    padding: 51px 75px 51px 408px;
    position: relative;
  }

  &__photo-section {
    position: absolute;
    bottom: 0;
    left: 15px;
  }

  &__photo-inner {
    position: relative;
  }

  &__photo {
    display: block;
  }

  &__title,
  &__quote {
    @include font('Inter', 24px, 700);
    line-height: 130%;
    letter-spacing: -1px;
    color: $text-color--grey-pale;
  }

  &__quote {
    font-weight: 400;
    line-height: 160%;
    position: relative;
    margin-top: 9px;
  }

  &__start-quotemark {
    position: absolute;
    top: 4px;
    left: -47px;
  }

  &__end-quotemark {
    transform: rotate(180deg);
    position: relative;
    top: 10px;
  }

  &__labels {
    position: absolute;
    bottom: 42px;
    left: 17px;
  }

  &__name,
  &__author-name {
    @include font('Inter', 14px, 700);
    width: max-content;
    padding: 3px 18px 3px 4px;
  }

  &__position,
  &__link {
    @include font('Inter', 12px, 400);
    width: 170px;
    padding: 3px 4px;
  }

  &__name,
  &__position,
  &__author-name,
  &__author-position {
    letter-spacing: -0.283px;
    color: $text-color--chinese-black;
    background-color: $bgcolor--white-primary;
  }

  &__link {
    letter-spacing: -0.283px;
    color: $text-color--white-primary;
    background-color: $bgcolor--red;
    display: block;
    margin-top: 2px;
  }

  &__author {
    display: none;
    gap: 15px;
    align-items: center;
    padding-left: 9px;

    &-photo {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      object-position: 50% -20%;

      @include old-safari-support {
        @media screen and (max-width: 760px) {
          margin-right: 15px;
        }
      }
    }

    &-name,
    &-position {
      letter-spacing: -0.4px;
      line-height: 18px;
      font-size: 12px;
      padding: 0;
      background: transparent;
    }

    &-position {
      @include font('Inter', 12px, 400);
    }
  }

  @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-bottom: 96px;

    &__content {
      padding-right: 16px;
      padding-left: 492px;
    }

    &__quote {
      font-size: 20px;
    }

    &__end-quotemark {
      right: -5px;
    }

    &__photo-section {
      position: absolute;
      bottom: 0;
      left: 53px;
    }
  }

  @media screen and (max-width: 1180px) {
    &__content {
      padding-left: 280px;
    }

    &__title,
    &__quote {
      font-size: 16px;
    }

    &__photo-section {
      height: 100%;
      left: 14px;
    }

    &__photo-inner {
      position: relative;
      height: 100%;
    }

    &__photo {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1026px) {
    padding-bottom: 72px;

    .container {
      padding-inline: 77px;
    }

    &__quote {
      font-size: 14px;
      padding-right: 25px;
    }

    &__end-quotemark {
      right: -5px;
    }

    &__photo-section {
      max-width: 243.41px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
    }

    &__content {
      padding: 39px 16px 37px 262px;
    }

    &__photo {
      max-height: 293px;
    }

    &__quote {
      margin-top: 17px;
      padding-right: 30px;
    }

    &__start-quotemark {
      top: -7px;
      left: -43px;
    }

    &__end-quotemark {
      bottom: -9px;
      right: 0;
    }

    &__labels {
      bottom: 21px;
      left: 12px;
    }
  }

  @media screen and (max-width: 760px) {
    &__content {
      padding-left: 24px;
      padding-top: 37px;
      padding-bottom: 23px;
    }

    &__quote {
      padding-inline: 15px;
      margin-top: 12px;
      margin-bottom: 5px;
    }

    &__start-quotemark {
      top: 2px;
      left: -5px;
      width: 15px;
      height: 15px;
    }

    &__end-quotemark {
      width: 15px;
      height: 15px;
      bottom: -3px;
      top: 3px;
      right: -3px;
    }

    &__photo-section {
      display: none;
    }

    &__author {
      display: flex;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 0;
      max-width: 100%;
      border-radius: 0;
    }
  }
}
</style>

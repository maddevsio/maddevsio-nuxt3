<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="blog-subscribe">
    <div class="container blog-subscribe__container">
      <div class="blog-subscribe__inner">
        <div class="blog-subscribe__content">
          <h2
            class="blog-subscribe__content-title"
          >
            Get monthly newsletter
          </h2>
          <p
            class="blog-subscribe__content-description"
          >
            All the most interesting from Mad Devs of the month in one short letter.
          </p>
          <LazyWidgetsFormSubscribe
            form-uid="blog-subscribe-banner"
            color-theme="white"
            form-location="Blog home"
            slice-variation="subscribeFormDigest"
            class="blog-subscribe__form"
          />
        </div>
        <div class="blog-subscribe__background">
          <img
            loading="lazy"
            :src="$getMediaFromS3('images/Blog/svg/subscribe-mail-bg.svg')"
            alt="Subscribe background"
            class="blog-subscribe__background-image"
            height="326"
            width="326"
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.blog-subscribe {
  background-color: $bgcolor--white-primary;
  padding-bottom: 48px;

  &__inner {
    background-color: $bgcolor--cultured;
    padding: 31.41px 56.5px 41.59px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  }

  &__form {
    max-width: 518px;
  }

  &__content {
    width: 70%;
    display: flex;
    flex-direction: column;

    &-title {
      @include font('Inter', 45px, 700);
      line-height: 130%;
      color: $text-color--chinese-black;
      margin-bottom: 24px;
    }

    &-description {
      @include font('Inter', 21px, 400);
      line-height: 148%;
      color: $text-color--chinese-black;
      margin-bottom: 36px;
    }
  }

  &__background {
    margin-top: -69px;
    width: 30%;
    display: flex;
    flex-direction: column;
    place-content: flex-end;
    position: relative;
    bottom: -42px;

    &-image {
      position: relative;
      bottom: 0;
      width: 100%;
      height: auto;
      display: block;
      object-position: bottom;
    }
  }

  @media screen and (max-width: 1080px) {
    &__container {
      max-width: 1240px;
      padding: 0 41px;
    }

    &__inner {
      padding: 26px 22px;
    }

    &__content {
      width: 62%;

      &-title {
        font-size: 32px;
        line-height: 120%;
        margin-bottom: 12px;
      }

      &-description {
        margin-bottom: 12px;
      }
    }

    &__background {
      bottom: -25px;
      width: 35%;
    }
  }

  @media screen and (max-width: 650px) {
    &__content {
      width: 100%;
    }

    &__inner {
      flex-direction: column;
      padding: 40px 24px;
    }

    &__background {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    &__container {
      padding: 0 20px;
    }

    &__content {
      &-title {
        font-size: 25px;
        line-height: 130%;
      }

      &-description {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }
}
</style>

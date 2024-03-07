<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="open-source-cta"
  >
    <div class="container">
      <div class="open-source-cta__head">
        <LazyOpenSourceUITitleDesc title="Contribute <br /> to open source" />
      </div>
      <LazySharedUIBanner
        title="Develop with <br /> Mad Devs"
        text="Showcase your work, give feedback <br /> to others, and learn from each other."
        :image="$getMediaFromS3('/images/OpenSource/png/team-open-source.png')"
        image-alt-text="Team"
      >
        <LazySharedUIButton
          is-link
          to="https://github.com/maddevsio"
        >
          Contribute
        </LazySharedUIButton>
      </LazySharedUIBanner>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.open-source-cta {
  padding-bottom: 107px;
  &__head {
    margin-bottom: 55px;
  }

  :deep(.cta-banner) {
    min-height: 543px;
    .cta-banner__image {
      right: 0;
      height: 87%;
    }
  }

  :deep(.ui-button) {
    width: 220px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1380px) {
    :deep(.cta-banner) {
      min-height: auto;
    }
  }

  @media screen and (max-width: 1090px) {
    :deep(.cta-banner) {
      align-items: center;
      justify-content: space-between;
      padding: 40px 32px 0;
      .cta-banner__info {
        text-align: center;
        align-items: center;
      }
      .cta-banner__image {
        margin-top: 70px;
        position: static;
        width: 85%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 27px;
    &__head {
      margin-bottom: 25px;
    }

    :deep(.cta-banner) {
      .cta-banner__image {
        width: calc(100% + 48px);
      }
    }
  }
}
</style>

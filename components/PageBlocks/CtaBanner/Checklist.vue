<script setup lang="ts">
import type { PropType } from 'vue'
import type { CtaBannerChecklistProps } from '~/components/PageBlocks/CtaBanner/interfaces/ICtaBannerChecklist'
import { CtaBannerChecklist } from '~/components/PageBlocks/CtaBanner/classes/CtaBannerChecklist'

const {
  slice,
} = defineProps({
  slice: {
    type: Object as PropType<CtaBannerChecklistProps>,
    default: () => ({}),
  },
})
const {
  image,
  title,
  description,
  btnLink,
  btnText,
  colorClassNames,
} = new CtaBannerChecklist(slice)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section :class="`checklist-cta ${colorClassNames.sliceBackground}`">
    <div class="container">
      <div :class="`checklist-cta__wrapper ${colorClassNames.containerBackground}`">
        <div class="checklist-cta__content">
          <h2
            v-if="title"
            :class="`checklist-cta__title ${colorClassNames.textColor}`"
            v-html="title"
          />
          <p
            v-if="description"
            :class="`checklist-cta__description ${colorClassNames.textColor}`"
          >
            {{ description }}
          </p>
          <LazySharedUIButton
            class="checklist-cta__btn"
            :is-link="true"
            :to="btnLink"
          >
            {{ btnText || 'See all checklists' }}
            <img
              width="20"
              height="20"
              :src="$getMediaFromS3('images/core/common/arrow-up-right.svg')"
              alt="Arrow"
            >
          </LazySharedUIButton>
        </div>
        <div class="checklist-cta__image-wrapper">
          <NuxtImg
            v-if="image.url"
            provider="prismic"
            loading="lazy"
            :src="image.url"
            :alt="image.alt || 'Image'"
            :width="image.dimensions.width"
            :height="image.dimensions.height"
            class="checklist-cta__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.checklist-cta {
  &__wrapper {
    position: relative;
    border-radius: 4px;
    padding-left: 80px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    max-height: 400px;

    @media screen and (max-width: 1026px) {
      padding-left: 40px;
    }

    @media screen and (max-width: 940px) {
      flex-direction: column-reverse;
      padding-left: 0;
      max-height: unset;
    }
  }

  &__content {
    width: 43%;
    max-width: 475px;
    min-width: 349px;
    display: flex;
    flex-direction: column;
    place-content: center;

    * > * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 1395px) {
      width: 60%;
      max-width: 590px;
    }

    @media screen and (max-width: 940px) {
      width: 100%;
      max-width: 100%;
      padding: 10px 40px 60px;
      box-sizing: border-box;
      align-items: center;
      text-align: center;
    }

    @media screen and (max-width: 640px) {
      padding: 17px 24px 60px;
      min-width: unset;
    }
  }

  &__title {
    @include font('Inter', 42px, 700);
    line-height: 130%;
    letter-spacing: -1.3px;
    margin-bottom: 16px;

    @media screen and (max-width: 1026px) {
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -1px;
    }
  }

  &__description {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;

    @media screen and (max-width: 1026px) {
      font-size: 17px;
      line-height: 24px;
    }
  }

  &__image-wrapper {
    width: 62%;
    min-width: 685px;

    @media screen and (max-width: 1395px) {
      width: 40%;
      min-width: 500px;
    }

    @media screen and (max-width: 940px) {
      width: 100%;
      height: 230px;
      min-width: unset;
      overflow: hidden;
    }

    @media screen and (max-width: 640px) {
      height: 145px;
    }

    @media screen and (max-width: 450px) {
      height: 175px;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;

    @media screen and (max-width: 940px) {
      width: unset;
      transform: rotate(318deg) translate(150px, -110px) skew(10deg, 10deg);
    }

    @media screen and (max-width: 640px) {
      width: 531.68px;
      transform: rotate(318deg) translate(120px, -85px) skew(10deg, 10deg);
    }

    @media screen and (max-width: 450px) {
      width: 560.68px;
      transform: rotate(318deg) translate(65px, -120px) skew(10deg, 10deg);
    }
  }

  :deep(a) {
    @include font("Inter", 16px, 600);
    letter-spacing: -0.4px;
    line-height: 20px;
    color: $text-color--white-primary;
    margin-right: auto;
    margin-top: 38px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 14px 39.5px;

    @media screen and (max-width: 1200px) {
      max-width: 295px;
      padding-inline: 15px;
    }

    @media screen and (max-width: 1026px) {
      margin-top: 16px;
    }

    @media screen and (max-width: 940px) {
      margin-right: 0;
    }

    @media screen and (max-width: 500px) {
      padding: 13px 24px;
      box-sizing: border-box;
      max-width: 100%;
      width: 100%;
      margin-top: 19px;
    }

    img {
      margin-left: 7px;
    }
  }
}
</style>

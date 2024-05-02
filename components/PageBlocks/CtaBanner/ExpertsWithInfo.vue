<script setup lang="ts">
import type { PropType, VNodeRef } from 'vue'
import type { ExpertsWithInfoProps } from '~/components/PageBlocks/CtaBanner/interfaces/IExpertsWithInfo'
import { ExpertsWithInfo } from '~/components/PageBlocks/CtaBanner/classes/ExpertsWithInfo'
import { contactMeClickEvent } from '~/analytics/events'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ExpertsWithInfoProps>,
    default: () => ({}),
  },
})

const {
  colorTheme,
  title,
  description,
  buttonText,
  expertsImage,
} = new ExpertsWithInfo(slice)

const modalContactMeRef = ref<VNodeRef | null>(null)

const showModal = () => {
  if (!modalContactMeRef.value?.show) { return }
  modalContactMeRef.value.show()
  contactMeClickEvent.send('CTA Experts Banner with modal')
}

const { isMobile } = useDevice()
const { emailSubject } = storeToRefs(useEmailSubjectStore())
</script>
<template>
  <section :class="`expert-cta-with-info ${colorTheme}`">
    <div class="container">
      <div class="expert-cta-with-info__wrapper">
        <div class="expert-cta-with-info__content">
          <h2
            v-if="title"
            class="expert-cta-with-info__title"
            v-html="title"
          />
          <p
            v-if="description"
            class="expert-cta-with-info__description"
            v-html="description"
          />
          <LazySharedUIButtonPowerCustom
            v-if="buttonText"
            :label="buttonText"
            background-color="#EC1C24"
            hover-background-color="#EC1C24"
            :show-arrow="true"
            :is-outlined="false"
            border-color="#EC1C24"
            label-color="#fff"
            hover-label-color="#fff"
            :click-handler="showModal"
            :is-link="false"
            class="expert-cta-with-info__button"
          />
        </div>
        <div class="expert-cta-with-info__experts">
          <NuxtImg
            v-if="expertsImage && expertsImage.url"
            loading="lazy"
            provider="prismic"
            :src="expertsImage.url.replace(/\?.*/, '?auto=format')"
            :alt="expertsImage.alt"
            sizes="mobile:465px tablet:768px desktop:704px"
            :width="isMobile ? 465 : 704"
            :height="isMobile ? 279 : 424"
            class="expert-cta-with-info__image"
          />
        </div>
      </div>
    </div>
    <LazyClientOnly>
      <Teleport to="body">
        <LazyWidgetsModalContactMe
          ref="modalContactMeRef"
          :location="'CtaBanner two experts button'"
          :email-subject="emailSubject"
        />
      </Teleport>
    </LazyClientOnly>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.expert-cta-with-info {
  &__wrapper {
    display: flex;
    background-color: #F4F4F4;
    min-height: 424px;
    position: relative;
    padding-left: 72px;
    border-radius: 4px;

    @media screen and (max-width: 1150px) {
      flex-direction: column;
      padding-inline: 78px;
      align-items: center;
      gap: 8px;
    }

    @media screen and (max-width: 768px) {
      padding-inline: 15px;
    }
  }

  &__content {
    width: 45%;
    margin-top: 68px;

    @media screen and (max-width: 1320px) {
      width: 48%;
    }

    @media screen and (max-width: 1150px) {
      width: 100%;
      text-align: center;
      margin-top: 25px;
    }
  }

  &__title {
    @include font('Inter', 42px, 700);
    line-height: 46px;
    letter-spacing: -1.3px;

    @media screen and (max-width: 1150px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  &__description {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    margin-top: 16px;

    @media screen and (max-width: 1150px) {
      font-size: 17px;
      line-height: 24px;
      margin-top: 12px;
    }
  }

  &__button {
    margin-top: 38.5px;
    margin-right: auto;

    :deep(.button-power-custom) {
      width: max-content;
      font-weight: 600;
      padding-inline: 24px;
    }

    @media screen and (max-width: 1150px) {
      width: max-content;
      margin-inline: auto;
      margin-top: 15px;
    }
  }

  &__experts {
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: 1320px) {
      top: unset;
      bottom: 0;
      width: 55%;
    }

    @media screen and (max-width: 1150px) {
      position: relative;
      bottom: unset;
      right: unset;
      width: max-content;
      margin-inline: auto;
    }

    @media screen and (max-width: 768px) {
      width: unset;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;

    @media screen and (max-width: 1150px) {
      max-width: 465px;
      max-height: 279px;
    }

    @media screen and (max-width: 768px) {
      max-width: unset;
      max-height: unset;
    }
  }
}
</style>

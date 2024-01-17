<template>
  <div class="cta-banner-slice-default">
    <div class="container">
      <div
        class="cta-banner-slice-default_content"
      >
        <div class="cta-banner-slice-default__info">
          <h2
            class="cta-banner-slice-default_title"
            v-html="title"
          />
          <p
            class="cta-banner-slice-default_description"
            v-html="description"
          />
          <UIButton
            v-if="button.link"
            is-link
            :to="button.link"
            @click="sendCareersLinkClickEvent"
          >
            {{ button.text }}
            <img
              width="20"
              height="20"
              src="@/assets/img/common/arrow-up-right.svg"
              alt="arrow"
            >
          </UIButton>
          <UIButton
            v-else
            @click="showModal"
          >
            {{ button.text }}
          </UIButton>
        </div>
        <img
          v-lazy-load
          loading="lazy"
          width="395"
          height="490"
          class="cta-banner-slice-default__image"
          :data-src="image && image.url"
          :alt="image && image.alt || 'Image'"
        >
        <div
          v-if="name && position"
          class="cta-banner-slice-default__man"
        >
          <h3 class="cta-banner-slice-default__man-name">
            {{ name }}
          </h3>
          <span class="cta-banner-slice-default__man-position">
            {{ position }}
          </span>
        </div>
      </div>
    </div>
    <!--    <ContactMeModal-->
    <!--      ref="modalContactMeRef"-->
    <!--      :location="`CTA Banner in ${$route.path} page`"-->
    <!--      :email-subject="emailSubject"-->
    <!--    />-->
  </div>
</template>

<script>
import UIButton from '@/components/shared/UIButton'
import { careersClickEvent } from '@/analytics/events'
// import ContactMeModal from '@/components/serviceComponents/core/Modal/ContactMeModal/ContactMeModal.vue'

export default {
  name: 'CtaBannerSliceDefault',
  components: {
    // ContactMeModal,
    UIButton,
  },

  inject: ['emailSubjectGlobal'],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      title: this.slice?.primary?.title,
      image: this.slice?.primary?.image,
      name: this.slice?.primary?.name,
      position: this.slice?.primary?.position,
      description: this.slice?.primary?.description,
      button: {
        link: this.slice?.primary?.btnLink?.url,
        text: this.slice?.primary?.btnText,
      },

      emailSubject: this.emailSubjectGlobal.emailSubjectGlobal.value || '',
    }
  },

  methods: {
    showModal() {
      if (!this.$refs?.modalContactMeRef?.show) { return }
      this.$refs.modalContactMeRef.show()
    },

    sendCareersLinkClickEvent() {
      if (this.button?.link?.includes('/careers/')) { careersClickEvent.send(`Click from ${ this.$route.path } page`) }
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-banner-slice-default {
  background-color: $bgcolor--white-primary;

  &_content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    background-color: $bgcolor--silver;
    padding: 85px 105px;
    @media screen and (max-width: 1280px) {
      padding: 85px 40px;
    }
    @media screen and (max-width: 992px) {
      padding: 40px;
    }
    @media screen and (max-width: 768px) {
      align-items: center;
      justify-content: space-between;
      padding: 40px 32px 0;
    }

    :deep(.ui-button) {
      display: flex;
      align-items: center;
      padding: 14px 24px;

      img {
        margin-left: 7px;
      }
    }
  }

  &_title {
    @include font('Inter', 42px, 700);
    max-width: 590px;
    line-height: 46px;
    letter-spacing: -0.04em;
    margin-bottom: 16px;

    @media screen and (max-width: 900px) {
      max-width: 500px;
      font-size: 28px;
      line-height: 32px;
    }

    @media screen and (max-width: 768px) {
      max-width: 100%;
      text-align: center;
      letter-spacing: -0.05em;
      margin-bottom: 16px;
    }

    @media screen and (max-width: 370px) {
      font-size: 34px;
    }
  }

  &_description {
    font-weight: normal;
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -0.013em;
    margin-bottom: 40px;
    max-width: 440px;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 992px) {
      max-width: 350px;
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-size: 17px;
      line-height: 24px;
      margin-bottom: 19px;
      text-align: center;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  &__image {
    width: auto;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 100px;
    @media screen and (max-width: 1280px) {
      right: 90px;
    }
    @media screen and (max-width: 1180px) {
      height: 85%;
    }
    @media screen and (max-width: 900px) {
      right: 0;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      height: auto;
      position: static;
      margin-top: 20px;
    }
    @media screen and (max-width: 375px) {
      width: calc(100% + 50px);
      margin: 20px -25px 0;
    }
  }

  &__man {
    min-width: 158px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 36px;
    left: 546px;
    @media screen and (max-width: 1280px) {
      left: 423px;
      bottom: 24px;
    }
    @media screen and (max-width: 992px) {
      left: 380px;
    }
    @media screen and (max-width: 768px) {
      bottom: 24px;
      left: 24px;
      padding: 5px;
    }

    &-name {
      @include font('Inter', 14px, 600);
      line-height: 18px;
      display: block;
      letter-spacing: -0.4px;
      color: $text-color--chinese-black;
      background-color: $bgcolor--white-darken;
      padding: 0 8px;
    }

    &-position {
      @include font('Inter', 14px, 400);
      line-height: 18px;
      display: block;
      margin-top: 2px;
      letter-spacing: -0.4px;
      background-color: $bgcolor--white-darken;
      padding: 0 8px;
      color: $text-color--chinese-black;
      @media screen and (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
}
</style>

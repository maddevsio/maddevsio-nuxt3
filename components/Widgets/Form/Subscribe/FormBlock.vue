<script setup lang="ts">
const {
  subscribeFormBlockInstance,
} = defineProps({
  subscribeFormBlockInstance: {
    type: Object,
    default: () => ({}),
  },

  formUid: {
    type: String,
    default: '',
    required: true,
  },
})

onMounted(() => {
  subscribeFormBlockInstance.setIsActive()
})

const {
  colorTheme,
  isActive,
  title,
  titleClasses,
  linkClasses,
  showSubscribeForm,
  showBackgroundImage,
  showButton,
  formMaxWidth,
  mediumTitle,
  lineBreakForLink,
  lineBreakForSuccess,
  formLocation,
} = subscribeFormBlockInstance
</script>
<template>
  <div
    class="subscribe-form-block"
    :style="{ maxWidth: formMaxWidth }"
  >
    <p
      class="subscribe-form-block__title"
      :class="titleClasses"
    >
      {{ title }}
    </p>
    <div
      class="subscribe-form-block__link-wrapper"
    >
      Check out our past <br v-if="lineBreakForLink">
      <a
        target="_blank"
        href="/digest/"
        class="subscribe-form-block__link"
        :class="linkClasses"
      >
        monthly digests
      </a>
    </div>
    <div
      class="subscribe-form-block__controllers"
    >
      <Transition
        name="button"
        appear
      >
        <button
          v-if="!isActive && showButton"
          class="subscribe-form-block__button"
          type="button"
          @click="showSubscribeForm"
        >
          Subscribe
        </button>
      </Transition>
      <transition
        name="email"
        appear
      >
        <div
          v-if="isActive"
          class="subscribe-form-block__controllers-wrapper"
        >
          <LazyWidgetsFormSubscribe
            key="email-form"
            :color-theme="colorTheme"
            :line-break-for-success="lineBreakForSuccess"
            :form-uid="formUid"
            :form-location="formLocation"
          />
        </div>
      </transition>
    </div>
    <LazySharedSubscribeFormBackgroundImage
      v-if="showBackgroundImage"
      :class="['subscribe-form-block__bg-open-email', { 'subscribe-form__bg-open-email--medium': mediumTitle }]"
      :color-theme="colorTheme"
    />
  </div>
</template>
<style lang="scss" scoped>
.subscribe-form-block {
  position: relative;
  display: flex;
  flex-direction: column;

  &__title {
    @include font('Inter', 14px, 700);
    line-height: 130%;
    letter-spacing: -0.1px;
    max-width: 150px;
    margin-bottom: 14px;
    position: relative;
    z-index: 2;

    &--medium {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.1px;
      max-width: 200px;
    }

    &--big {
      font-size: 20px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.4px;
      max-width: 100%;
    }

    &--dark-theme {
      color: $text-color--white-primary;
    }

    &--light-theme {
      color: $text-color--chinese-black;
    }
  }

  &__link-wrapper {
    @include font('Inter', 12px, 400);
    color: $text-color--grey-opacity-40-percent;
    line-height: 24px;
    margin-bottom: 20px;
  }

  &__link {
    text-decoration: underline;
    &--dark-theme {
      color: $text-color--yellow;
    }

    &--light-theme {
      color: $text-color--blue;
    }
  }

  &__controllers {
    width: 100%;
    position: relative;
    min-height: 45px;
    margin-bottom: 5px;
    z-index: 2;
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: 2;
      width: 100%;
    }
  }

  &__button {
    @include font('Inter', 14px, 400);
    background: $bgcolor--red;
    width: 100%;
    border: none;
    border-radius: 6px;
    line-height: 166%;
    letter-spacing: -0.1px;
    font-feature-settings: 'ss02' on, 'liga' off;
    color: $text-color--white-primary;
    padding: 9px 62px;
    cursor: pointer;
  }

  :deep(form) {
    width: 100%;
  }

  &__bg-open-email {
    position: absolute;
    top: -20px;
    right: -13px;
    z-index: -1;
    width: 100px;
    height: 100px;

    &--medium {
      top: -10px;
    }
  }
}

// ANIMATIONS
.button-enter-active,
.button-leave-active {
  transition: all 0.3s ease-in-out;
}

.button-enter-from,
.button-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.email-enter-active,
.email-leave-active {
  transition: all 0.3s ease-in-out;
}

.email-enter-from,
.email-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

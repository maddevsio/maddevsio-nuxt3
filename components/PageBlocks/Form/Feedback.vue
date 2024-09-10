<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormSliceSliceFeedbackForm } from '~/prismicio-types'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<FormSliceSliceFeedbackForm>,
    default: () => ({}),
  },
})

const title = replaceLineSeparatorToBr(slice.primary.title as string)
const description = slice.primary.description
const { successMessageDescription, successMessageTitle } = slice.primary
</script>

<template>
  <section class="feedback-form">
    <div class="container">
      <div class="feedback-form__wrapper">
        <div class="feedback-form__left">
          <h2
            v-if="title"
            class="feedback-form__title"
            v-html="title"
          />
          <PrismicRichText
            v-if="$prismic.asText(description)"
            :field="description"
            :html-serializer="prismicHtmlSerializer"
            class="feedback-form__description"
          />
        </div>
        <div class="feedback-form__right">
          <ClientOnly>
            <LazyWidgetsFormFeedback
              email-subject="New feedback from Mad Devs website"
              :form-uid="$route.params.uid"
              form-location="Feedback page"
              :success-message-title="successMessageTitle"
              :success-message-description="successMessageDescription"
            />
          </ClientOnly>
        </div>
        <p
          class="feedback-form__disclaimer"
        >
          By providing your email address, you agree to our <br>
          <NuxtLink to="/privacy/" class="feedback-form__link">
            Privacy Policy
          </NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.feedback-form {
  &__wrapper {
    padding: 40px 80px 63px;
    display: flex;
    justify-content: space-between;
    background: $bgcolor--black-pale;
    position: relative;
  }

  &__left {
    width: 38%;
    display: flex;
    flex-direction: column;
  }

  &__right {
    width: 46%;
  }

  &__title {
    @include font('Inter', 40px, 700);
    line-height: 52px;
    letter-spacing: -1.2999999523162842px;
    color: $text-color--white-primary;
    margin-bottom: 24px;
  }

  &__description,
  &__disclaimer {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4000000059604645px;
    color: $text-color--grey-20-percent;
  }

  &__description {
    margin-bottom: 40px;
  }

  &__disclaimer {
    color: $text-color--grey-pale;
    position: absolute;
    bottom: 40px;
    left: 80px;
  }

  &__link {
    display: inline-block;
    color: $bgcolor--venetian-red;
    text-decoration: underline;
  }

  @media screen and (max-width: 1600px) {
    &__left {
      width: 47%;
    }

    &__right {
      width: 42%;
    }
  }

  @media screen and (max-width: 1100px) {
    &__wrapper {
      flex-direction: column;
      gap: 40px;
      padding: 40px 60px;
    }

    &__left,
    &__right {
      width: 100%;
    }

    &__description {
      margin-bottom: 0;
    }

    &__disclaimer {
      position: relative;
      bottom: unset;
      left: unset;

      br {
        display: none;
        visibility: hidden;
      }
    }
  }

  @media screen and (max-width: 500px) {
    &__wrapper {
      padding: 40px 23.5px;
    }

    &__title {
      font-size: 32px;
      line-height: 41.6px;
    }
  }
}
</style>

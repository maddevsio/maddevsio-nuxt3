<script setup lang="ts">
import type { ICertificate } from '~/components/Certificates/interfaces/ICertificates'

interface Props {
  certificate: ICertificate
}
const { certificate } = defineProps<Props>()
const {
  title,
  titleTag,
  description,
  image,
  validationToken,
  validationLink,
  copyIconColor,
  colorTheme,
  arrowColor,
} = certificate
</script>
<template>
  <div
    class="certificates-item"
    :class="`certificates-item--${colorTheme}`"
  >
    <LazySharedUIAccordion
      is-prismic
      :use-default="false"
    >
      <template #custom="{ showAnswer, expanded }">
        <div
          class="certificates-item__accordion-head"
          @click="showAnswer(title)"
        >
          <NuxtImg
            v-if="image && image.url"
            provider="prismic"
            loading="lazy"
            :src="image.url"
            :alt="image.alt || title"
            class="certificates-item__img"
            width="157"
            height="157"
          />
          <div class="certificates-item__title-wrapper">
            <Component
              :is="titleTag || 'h3'"
              class="certificates-item__title"
            >
              {{ title }}
            </Component>
            <button class="certificates-item__expand-btn">
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="certificates-item__arrow"
                :class="{'certificates-item__arrow--active': expanded}"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 1.09905L1.62126 0L5.5 3.80191L9.37874 0L10.5 1.09905L5.5 6L0.5 1.09905Z"
                  :fill="arrowColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <LazySharedUITransitionHeight :duration="300">
          <div v-show="expanded">
            <PrismicRichText
              v-if="$prismic.asText(description)"
              :html-serializer="prismicHtmlSerializer"
              :field="description"
              class="certificates-item__description"
            />
            <div
              v-if="validationToken"
              class="certificates-item__token"
            >
              <div class="certificates-item__token-label">
                Validation Token:
              </div>
              <div class="certificates-item__token-number">
                {{ validationToken }}
                <LazySharedUICopyToClipboardButton
                  class="certificates-item__copy-btn"
                  :icon-width="15"
                  :icon-height="15"
                  :icon-fill-color="copyIconColor"
                  :content="validationToken"
                >
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4743 0L11 0.89735L4.30726 10L0 4.89261L0.743913 3.73843L4.30726 6.21803L10.4743 0Z"
                      fill="#00C05B"
                    />
                  </svg>
                </LazySharedUICopyToClipboardButton>
              </div>
            </div>
            <a
              v-if="validationLink && validationLink.url"
              :href="validationLink.url"
              target="_blank"
              class="certificates-item__validation-link"
            >Validate certification</a>
          </div>
        </LazySharedUITransitionHeight>
      </template>
    </LazySharedUIAccordion>
  </div>
</template>
<style lang="scss" scoped>
@import '../styles/certificatesItem';

.certificates-item.accordion {
  border: none;
  padding-bottom: 0;
}

.certificates-item {

  &__accordion-head {
    width: 100%;
  }

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__arrow {
    width: 15px;
    min-width: 15px;
    height: 15px;
    transition: transform 0.33s ease;
    &--active {
      transform: rotate(180deg);
    }
  }

  &__expand-btn {
    background: none;
    border: none;
    outline: 0;
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>

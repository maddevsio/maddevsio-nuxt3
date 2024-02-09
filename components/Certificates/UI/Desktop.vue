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
} = certificate
</script>
<template>
  <div
    class="certificates-item"
    :class="`certificates-item--${colorTheme}`"
  >
    <img
      v-if="image && image.url"
      :src="image.url"
      :alt="image.alt || title"
      class="certificates-item__img"
      width="157"
      height="157"
    >
    <div class="certificates-item__info">
      <Component
        :is="titleTag || 'h3'"
        class="certificates-item__title"
      >
        {{ title }}
      </Component>
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
  </div>
</template>
<style lang="scss" scoped>
@import '../styles/certificatesItem';
</style>

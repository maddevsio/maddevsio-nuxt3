<script setup lang="ts">
import type { PropType } from 'vue'
import type { AuthorContributor } from '~/components/PageBlocks/Authors/interface/IPostAuthors'

defineProps({
  contributors: {
    type: Array as PropType<AuthorContributor[]>,
    required: true,
    default: () => [],
  },
})
</script>
<template>
  <div
    class="contributors"
  >
    <span class="contributors-title">Contributors:</span>
    <ul class="contributors-list">
      <li
        v-for="contributor in contributors"
        :key="contributor.contributorImage.url"
        class="contributors-item"
        data-testid="test-contributors"
      >
        <a
          v-if="contributor.contributorLink.url"
          :href="contributor.contributorLink.url"
          class="contributors-link"
          target="_blank"
        >
          <img
            loading="lazy"
            :alt="contributor.contributorImage.alt || 'Image'"
            :src="contributor.contributorImage.url"
            class="contributors-image"
            height="28"
            width="28"
          >
        </a>
        <img
          v-else
          loading="lazy"
          :alt="contributor.contributorImage.alt || 'Image'"
          :src="contributor.contributorImage.url"
          class="contributors-image"
          height="28"
          width="28"
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.contributors {
  margin-left: 20px;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    margin-top: 22px;
  }

  &-title {
    font-size: 13px;
    line-height: 166%;
    letter-spacing: -0.1px;
    color: $text-color--quote-box;
  }

  &-list {
    padding: 0;
    list-style: none;
    margin-top: 2px;
    display: flex;
    flex-flow: row nowrap;
  }

  &-item {
    margin-left: -6px;
    border: 2px solid $border-color--white;
    margin-bottom: 0;
    @media screen and (max-width: 1024px) {
      border: 0;
      margin-left: 6px;
    }

    &:first-of-type {
      margin-left: -2px;
    }
  }

  &-link,
  &-image {
    position: relative;
    display: block;
    width: 28px;
    min-width: 28px;
    height: 28px;
    border-radius: 50%;
  }
}
</style>

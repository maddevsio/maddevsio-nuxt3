<script setup lang="ts">
defineProps({
  openGraphUrl: {
    type: String,
    default: '',
  },

  metaTitle: {
    type: String,
    default: '',
  },
})

const socials = [
  {
    name: 'twitter',
    url: 'https://twitter.com/intent/post?',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
  },
  {
    name: 'reddit',
    url: 'https://www.reddit.com/submit?',
    event: null,
  },
]

const getUrl = (name: string, url: string, openGraphUrl: string, text: string) => {
  const networks: { [key: string]: string } = {
    linkedin: `${ url }${ encodeURIComponent(openGraphUrl) }`,
    twitter: `${ url }text=${ encodeURIComponent(text) }&url=${ encodeURIComponent(openGraphUrl) }`,
    facebook: `${ url }u=${ encodeURIComponent(openGraphUrl) }&title=${ encodeURIComponent(text) }`,
    reddit: `${ url }url=${ encodeURIComponent(openGraphUrl) }&title=${ encodeURIComponent(text) }`,
    default: '',
  }

  return networks[name] ?? networks.default
}
</script>
<template>
  <div class="share-links">
    <p
      class="share-links__title"
    >
      Share:
    </p>
    <a
      v-for="(social, socialIndex) in socials"
      :key="socialIndex"
      :href="getUrl(social.name, social.url, openGraphUrl, metaTitle)"
      target="_blank"
      :class="`share-links__link icon-wrapper__icon icon-wrapper__${social.name}-icon`"
    />
    <LazySharedCopyUrlLink
      class="share-links__link icon-wrapper__icon"
    />
  </div>
</template>
<style lang="scss" scoped>
.share-links {
  display: flex;
  gap: 11px;
  margin-top: 20px;
  margin-bottom: 33px;
  flex-wrap: wrap;
  width: 200px;

  &__title {
    width: 100%;
    @include font('Inter', 14px, 700);
    line-height: 19px;
    color: $text-color--black-oil;
  }

  &__link {
    width: 28px;
    height: 28px;
    display: block;
    background-repeat: no-repeat;
    cursor: pointer;

    &.icon-wrapper {
      &__facebook-icon {
        @include social-network-facebook;
      }
      &__twitter-icon {
        @include social-network-twitter;
      }
      &__linkedin-icon {
        @include social-network-linkedin;
      }

      &__reddit-icon {
        @include social-network-reddit;
      }
    }
  }

  @media screen and (max-width: 1185px) {
    margin: 0;

    &__title { // reset deep styles in slices/index.vue
      margin: 0 !important;
    }
  }
}
</style>

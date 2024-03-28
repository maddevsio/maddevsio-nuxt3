<script setup lang="ts">
import { HeaderSocials } from '~/components/Widgets/Header/classes/HeaderSocials'

const { socialsNetworks } = new HeaderSocials()
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <ul class="header-mobile-socials">
    <li
      v-for="social in socialsNetworks"
      :key="social.key"
      class="header-mobile-socials__item"
    >
      <a
        :href="social.url"
        target="_blank"
        class="header-mobile-socials__item-link"
      >
        <img
          :src="$getMediaFromS3(`images/core/socialIcons/${social.key}.svg`)"
          :alt="social.title || 'Icon'"
          loading="lazy"
          width="42"
          height="42"
        >
      </a>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.header-mobile-socials {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 35px;
  border-top: 1px solid $border-color--grey-dark-transparent;
  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 10px;
  }

  &__item {
    box-sizing: border-box;
    display: block;
    &-link,
    &-link img {
      display: block;
    }
  }
}
</style>

<script setup lang="ts">
import { FooterStaticPagesLinks } from '~/components/Widgets/Footer/classes/FooterStaticPagesLinks'
import type { IPresentationLinks } from '~/components/Widgets/Footer/interfaces/IPresentationLinks'

const currentYear = computed(() => new Date().getFullYear())

const { links } = new FooterStaticPagesLinks()
const { links: presentationsLinks } = inject('presentationLinks') as IPresentationLinks
</script>
<template>
  <div class="footer-subnavbar">
    <LazyPageBlocksPresentationLinksDefault
      class="footer-subnavbar__nav-list footer-subnavbar__nav-list--pdf"
      :links="presentationsLinks"
    />
    <div class="footer-subnavbar-container">
      <div
        v-if="links.length"
        class="footer-subnavbar__nav-list footer-subnavbar__nav-list--pages"
      >
        <NuxtLink
          v-for="item in links"
          :key="item.link"
          :to="item.link"
          class="footer-subnavbar__nav-list-item footer-subnavbar__nav-list-item--pages"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <p class="footer-subnavbar__company-name">
        © Mad Devs - {{ currentYear }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-subnavbar {
  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  &__company-name {
    opacity: 0.7;
    font-size: 12px;
    color: $text-color--grey;
    margin-top: 18px;

    @media screen and (min-width: 992px) {
      margin-top: 10px;
      @include font('Inter', 14px, 400);
    }
    @media screen and (max-width: 640px) {
      margin-top: 10px;
    }
  }
  &-container{
    @media screen and (max-width: 640px) {
      margin-top: 30px;
    }
  }

  &__nav {
    &-list {
      &-item {
        transition: color .2s;

        &:hover {
          color: $text-color--red;
        }

        &--pdf {
          margin-bottom: 8px;
        }
      }

      @media screen and (min-width: 992px) {
        margin-top: 30px;
      }

    }

    &-list-item {
      color: $text-color--grey;
      display: block;
      @include font('Inter', 14px, 400);
      opacity: 0.7;

      @media screen and (max-width: 1320px) {
        font-size: 12px;
      }
    }
  }
}
</style>

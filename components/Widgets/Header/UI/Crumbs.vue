<script setup lang="ts">
import { HeaderCrumbs } from '~/components/Widgets/Header/classes/HeaderCrumbs'

const route = useRoute()
const {
  checkMutationHeadTitle,
  crumbs,
  setEvent,
  setTitle,
} = new HeaderCrumbs(route)

onMounted(() => {
  checkMutationHeadTitle()
})
</script>
<template>
  <ol
    v-if="crumbs.length"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
    class="crumbs__list"
  >
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
      class="crumbs__list-item"
    >
      <NuxtLink
        :to="'/'"
        class="crumbs__list-title"
        itemprop="item"
        title="Home"
      >
        <span itemprop="name">Home</span>
        <meta
          itemprop="position"
          content="0"
        >
      </NuxtLink>
    </li>
    <li
      v-for="(crumb, i) in crumbs"
      :key="`${i}-${crumb}`"
      class="crumbs__list-item"
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <NuxtLink
        :to="crumb.to"
        :event="setEvent(i)"
        class="crumbs__list-title"
        itemprop="item"
        :title="setTitle(i, crumb)"
      >
        <span itemprop="name">{{ setTitle(i, crumb) }}</span>
        <meta
          itemprop="position"
          content="i + 1"
        >
      </NuxtLink>
    </li>
  </ol>
</template>
<style lang="scss" scoped>
.crumbs__list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -18px;
  left: 5px;
  height: 22px;

  &-item {
    display: inline;

    &:after {
      content: ' > ';
      display: inline;
      font-size: 12px;
      color: $text-color--grey-20-percent;
      padding: 0 0.0725em 0 0.15em;
    }

    &:last-child:after {
      content: '';
    }
  }

  &-title {
    text-decoration: none;
    font-size: 12px;
    line-height: 166%;
    letter-spacing: -0.1px;
    color: $text-color--grey-20-percent;

    &:hover {
      color: $text-color--cultured;
    }
  }

  @media screen and (max-width: 1026px) {
    bottom: unset;
    left: unset;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>

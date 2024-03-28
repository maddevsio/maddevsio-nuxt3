<script setup lang="ts">
import type { PropType } from 'vue'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'

const { header } = defineProps({
  header: {
    type: Object as PropType<IHeader>,
    default: () => ({}),
  },
})

const route = useRoute()
const { headerHeight } = storeToRefs(useHeaderStore())

defineEmits(['open-modal'])

watch(route, () => {
  header.resetMobileMenu()
})
</script>
<template>
  <div
    class="header-mobile"
    :style="{ 'padding-top': `${headerHeight}px` }"
  >
    <div class="header-mobile__scroll safari-only container">
      <div class="header-mobile__content-wrapper">
        <div class="header-mobile__content">
          <nav class="header-mobile__navigation">
            <LazyWidgetsHeaderMobileNavigation :header="header" />
          </nav>
          <div class="header-mobile__contacts">
            <LazyWidgetsHeaderMobileContacts />
          </div>
          <LazySharedUIModalTriggerButton
            color="red"
            label="Order a project now"
            class="header-mobile__contact-btn"
            @click="$emit('open-modal')"
          />
        </div>
        <div class="header-mobile__socials">
          <LazyWidgetsHeaderMobileSocials />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-mobile {
  z-index: 2;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - (100vh - 100%)); // 100vh height for mobile Safari browser
  padding-top: 63px; // 63px - height of sticky header
  background-color: $bgcolor--black;
  color: white;
  @media screen and (max-width: 1200px) {
    padding-top: 48px;
  }

  &__scroll {
    position: relative;
    height: calc(100vh - 63px);
    overflow: auto;
    @media screen and (max-width: 1200px) {
      height: calc(100vh - 48px);
    }
  }

  &__content-wrapper {
    padding: 62px 0 200px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 40px;
  }

  &__navigation {
    flex: 1;
    max-width: 50%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  &__contacts {
    @media screen and (max-width: 768px) {
      order: 3;
      width: 100%;
      padding: 0;
      margin-top: 22px;
    }
  }

  &__contact-btn {
    order: 3;
    margin-top: 50px;
    display: block;
    width: 100%;
    height: 60px;
    font-size: 16px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 768px) {
      order: 2;
    }
  }
}
</style>

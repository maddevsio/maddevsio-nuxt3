<script setup lang="ts">
const { backgroundColor, textColor } = defineProps({
  defaultVersion: {
    type: Boolean,
    default: true,
  },

  backgroundColor: {
    type: String,
    default: 'black',
  },

  textColor: {
    type: String,
    default: 'red',
  },

  text: {
    type: String,
    default: 'Word not found',
  },
})
const componentClasses = computed(() => [colorConverterToClass('slice-bg', backgroundColor), colorConverterToClass('text', textColor)])
</script>

<template>
  <div
    class="search-not-found-result"
    :class="componentClasses"
  >
    <div class="search-not-found-result__container container">
      <div
        v-if="defaultVersion"
        class="search-not-found-result__content"
      >
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="search-not-found-result__content-icon"
        >
          <path
            d="M4.16667 29C4.16667 15.2761 15.2761 4.16667 29 4.16667C42.6975 4.16667 53.8333 15.2765 53.8333 29C53.8333 42.6972 42.6972 53.8333 29 53.8333C15.2765 53.8333 4.16667 42.6975 4.16667 29ZM29 0.5C13.2572 0.5 0.5 13.2572 0.5 29C0.5 44.7158 13.2569 57.5 29 57.5C44.7161 57.5 57.5 44.7161 57.5 29C57.5 13.2569 44.7158 0.5 29 0.5Z"
            fill="#EC1C24"
            stroke="#EC1C24"
          />
          <path
            d="M16.1667 21.0001C16.1667 19.7829 17.1161 18.8334 18.3333 18.8334C19.5271 18.8334 20.5 19.7861 20.5 21.0001C20.5 22.1906 19.5239 23.1667 18.3333 23.1667C17.1194 23.1667 16.1667 22.1939 16.1667 21.0001ZM18.3333 15.1667C15.0972 15.1667 12.5 17.7639 12.5 21.0001C12.5 24.2079 15.0956 26.8334 18.3333 26.8334C21.5428 26.8334 24.1667 24.2096 24.1667 21.0001C24.1667 17.7623 21.5412 15.1667 18.3333 15.1667Z"
            fill="#EC1C24"
            stroke="#EC1C24"
          />
          <path
            d="M37.4999 21.0001C37.4999 19.7829 38.4494 18.8334 39.6666 18.8334C40.8604 18.8334 41.8333 19.7861 41.8333 21.0001C41.8333 22.1906 40.8571 23.1667 39.6666 23.1667C38.4527 23.1667 37.4999 22.1939 37.4999 21.0001ZM39.6666 15.1667C36.4304 15.1667 33.8333 17.7639 33.8333 21.0001C33.8333 24.2079 36.4288 26.8334 39.6666 26.8334C42.8761 26.8334 45.4999 24.2096 45.4999 21.0001C45.4999 17.7623 42.8744 15.1667 39.6666 15.1667Z"
            fill="#EC1C24"
            stroke="#EC1C24"
          />
          <path
            d="M34.0747 38.8333H35.2818L35.2018 38.7533H35.7547H36.2547V38.2533V35.5867V35.0867H35.7547H34.0213C31.1613 35.0867 28.4101 36.0586 26.2137 37.8378C26.2135 37.8379 26.2134 37.838 26.2133 37.8382L22.4806 40.8509L22.0938 41.1631L22.4038 41.5517L24.0838 43.6584L24.3949 44.0486L24.7857 43.7382L28.5447 40.7523C28.5449 40.7521 28.545 40.752 28.5452 40.7519C30.1104 39.515 32.0544 38.8333 34.0747 38.8333Z"
            fill="#EC1C24"
            stroke="#EC1C24"
          />
        </svg>
        <p class="search-not-found-result__content-text">
          {{ text }}
        </p>
      </div>
      <slot v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';

.search-not-found-result {
  * {
    color: inherit;
  }

  &__container {
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    &-icon {
      width: 64px;
      min-width: 64px;
      height: 64px;
      margin-right: 13px;
    }

    &-text {
      @include font('Inter', 36px, 700);
      line-height: 109%;
    }

  }

  @media screen and (max-width: 550px) {
    &__content {
      &-icon {
        width: 40px;
        min-width: 40px;
        height: 40px;
      }

      &-text {
        font-size: 32px;
      }
    }
  }

  @media screen and (max-width: 350px) {
    &__content {
      &-text {
        font-size: 26px;
      }
    }
  }
}
</style>

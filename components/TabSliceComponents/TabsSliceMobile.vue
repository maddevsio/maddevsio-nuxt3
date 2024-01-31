<script setup lang="ts">
// import { ref } from 'vue'
// import { contactMeClickEvent } from '~/analytics/events.js'
// import { useMediaFromS3 } from '~/composables/useMediaFromS3'

defineProps({
  activeTab: {
    type: String,
    default: '',
  },
  tabs: {
    type: Array,
    default: () => [],
  },
  setActiveClassNames: {
    type: Function,
    default: () => {},
  },
  changeActiveTab: {
    type: Function,
    default: () => {},
  },
  setLoopActiveClass: {
    type: Boolean,
    default: false,
  },
})

// const modalContactMeRef = ref(null)
const { $getMediaFromS3 } = useMediaFromS3()
const showModal = () => {
  console.log('Hello')
  // if (!modalContactMeRef?.value.show) {
  //   return
  // }
  // modalContactMeRef.value.show()
  // contactMeClickEvent.send('Tabs Slice component')
}
</script>
<template>
  <div class="container">
    <div class="tabs-slice__tab-content-wrapper">
      <div
        v-for="(tab, tabIndex) in tabs"
        :key="`${tab.tabName.split(' ').join('-')}-${tabIndex + 1}`"
        class="tabs-slice__tab-content-item"
      >
        <div
          class="tabs-slice__tab"
          :class="{
            'tabs-slice__tab--active': activeTab === tab.tabName,
            'tabs-slice__tab--active-loop': activeTab === tab.tabName && setLoopActiveClass,
          }"
        >
          <button class="tabs-slice__list-tab-name" @click="changeActiveTab({$event, tabName: tab.tabName, event: 'click'})">
            <span
              class="tabs-slice__list-tab-name-text"
              :class="setActiveClassNames(tab.tabName, tab.tabTextAndCheckmarkColor)"
            >
              {{ tab.tabName }}
            </span>
          </button>
        </div>
        <div v-if="activeTab === tab.tabName" class="tabs-slice__tab-content">
          <p v-if="tab.tabDescription" class="tabs-slice__tab-content-description" v-html="tab.tabDescription" />
          <h3 v-if="tab.tabListTitle" class="tabs-slice__tab-content-list-title">
            {{ tab.tabListTitle }}
          </h3>
          <ul v-if="tab.tabListItems[0].text && tab.tabListItems.length" class="tabs-slice__tab-content-list">
            <li
              v-for="(listItem, listItemIndex) in tab.tabListItems.filter((item) => item.type === 'list-item')"
              :key="`${listItem.text.split(' ').join('-')}-${listItemIndex}`"
              class="tabs-slice__tab-content-list-item"
            >
              <img
                loading="lazy"
                :src="$getMediaFromS3(`images/custom/about/tab-checkmark-${tab.tabTextAndCheckmarkColor}.svg`)"
                width="16.91"
                height="12.21"
                :alt="tab.tabName"
                class="tabs-slice__tab-content-list-icon"
              >
              {{ listItem.text }}
            </li>
          </ul>
          <div class="tabs-slice__tab-content-button">
            <LazySharedUIButtonPowerCustom
              v-if="tab.showButton"
              :label="tab.buttonText || 'Get Started'"
              have-border
              is-outlined
              hover-background-color="#fff"
              border-color="#A0A0A1"
              label-color="#A0A0A1"
              show-arrow
              hover-label-color="#111111"
              :click-handler="showModal"
            />
          </div>
          <img
            v-if="tab.tabImage && tab.tabImage.url"
            loading="lazy"
            :src="tab.tabImage.url"
            :alt="tab.tabImage.alt || 'Tab Image'"
            :width="tab.tabImage.dimensions.width"
            :height="tab.tabImage.dimensions.height"
            :style="{ bottom: tab.tabImageIndentFromBottom || '0px' }"
            class="tabs-slice__tab-content-image"
          >
        </div>
      </div>
    </div>
    <!--		<ContactMeModal ref="modalContactMeRef" :location="'\'Let`s talk\' button, main start screen component'" />-->
  </div>
</template>
<style scoped lang="scss">
.tabs-slice {
  &__tab {
    background: rgba(29, 29, 31, 0.4);
    border-radius: 9px 9px 0 0;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    flex: 1 1 auto;
    position: relative;

    &--active {
      background: $bgcolor--black-pale;

      &-loop {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0;
          background: $bgcolor--red;
          animation: progressBar 15s linear forwards;
        }
      }
    }

    @keyframes progressBar {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
  }

  &__list {
    &-tab-name {
      border: none;
      background: transparent;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      text-align: left;
      padding: 19.5px 24px;
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 0;

      &-text {
        @include font('Inter', 24px, 600);
        line-height: 130%;
        color: $text-color--white07-opacity;

        &--active {
          &-green-gradient {
            background: linear-gradient(to bottom, #4cc866 -2.34%, #099fbc 79.81%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          &-purple-gradient {
            background: linear-gradient(to bottom, #c598ff 0.47%, #9a4bff 99.16%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          &-pink-gradient {
            background: linear-gradient(314.49deg, #b428b4 11.9%, #f0288c 82.73%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          &-blue-gradient {
            background: linear-gradient(189.25deg, #4ca0f5 7.33%, #2e6ff9 85.42%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        @media screen and (max-width: 1300px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 21px;
        }

        @media screen and (max-width: 1041px) {
          font-size: 23px;
        }

        @media screen and (max-width: 768px) {
          font-size: 21px;
        }
      }

      @media screen and (max-width: 1300px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
        padding: 17.42px 5px;
      }

      @media screen and (max-width: 1041px) {
        justify-content: flex-start;
        padding: 20px 24px;
      }
    }
  }

  &__tab-content {
    background: $bgcolor--black-pale;
    padding: 24px;
    position: relative;
    overflow: hidden;

    &-wrapper {
      display: none;
      visibility: hidden;
      flex-direction: column;
      row-gap: 24px;

      @media screen and (max-width: 1041px) {
        display: flex;
        visibility: visible;
      }
    }

    &-item {
      border-radius: 9px;
      overflow: hidden;
      scroll-margin-top: 160px;

      @media not all and (min-resolution: 0.001dpcm) {
        /* Проверка на Safari */
        @supports not (translate: 0) {
          /* Проверка на версию Safari */
          margin-bottom: 24px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    &-description {
      @include font('Inter', 21px, 400);
      line-height: 160%;
      color: $text-color--white07-opacity;
      max-width: 910px;
      margin-bottom: 60px;

      @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-bottom: 53px;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      max-width: 945px;
      margin-bottom: 48px;

      &-title {
        @include font('Inter', 24px, 700);
        line-height: 148%;
        color: $text-color--white-primary;
        margin: 0 0 16px;
      }

      &-item {
        display: flex;
        column-gap: 12px;
        @include font('Inter', 21px, 400);
        line-height: 148%;
        color: $text-color--white-primary;

        @media not all and (min-resolution: 0.001dpcm) {
          /* Проверка на Safari */
          @supports not (translate: 0) {
            /* Проверка на версию Safari */
            margin-bottom: 16px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }

      &-icon {
        margin-top: 9px;
        width: 16.91px;
        height: 12.21px;

        @media not all and (min-resolution: 0.001dpcm) {
          /* Проверка на Safari */
          @supports not (translate: 0) {
            /* Проверка на версию Safari */
            margin-right: 8px;
          }
        }
      }
    }

    &-image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 315px;
      height: auto;
      opacity: 0.02;
    }

    &-button {
      width: 26.3%;
    }

    @media screen and (max-width: 1041px) {
      &-description {
        font-size: 18px;
        line-height: 140%;
        color: $text-color--white07-opacity;
        max-width: 100%;
        margin-bottom: 41px;
      }

      &-list {
        margin-bottom: 40px;

        &-title {
          font-size: 18px;
          line-height: 130%;
          margin: 0 0 16px;
        }

        &-item {
          display: flex;
          column-gap: 8px;
          font-size: 16px;
          line-height: 150%;
        }

        &-icon {
          margin-top: 6px;
          width: 14.1px;
          height: 10.17px;
        }
      }

      &-image {
        display: none;
        visibility: hidden;
      }
    }

    @media screen and (max-width: 768px) {
      &-button {
        width: 100%;
      }
    }
  }
}
</style>

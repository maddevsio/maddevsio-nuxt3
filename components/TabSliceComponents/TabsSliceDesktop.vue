<script setup lang="ts">
// import { ref } from 'vue'
// import { contactMeClickEvent } from '~/analytics/events.js'
// import { useMediaFromS3 } from '~/composables/useMediaFromS3'
import UIButtonPowerCustom from '~/components/shared/UIButtonPowerCustom.vue'

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
  console.log('Click tabs slice')
  // if (!modalContactMeRef?.value.show) {
  //   return
  // }
  // modalContactMeRef.value.show()
  // contactMeClickEvent.send('Tabs Slice component')
}
</script>
<template>
  <div class="container tabs-slice__container">
    <ul class="tabs-slice__list">
      <li
        v-for="(tab, tabIndex) in tabs"
        :key="`${tab.tabName.split(' ').join('-')}-${tabIndex}`"
        class="tabs-slice__list-item"
        :class="{
          'tabs-slice__list-item--active': activeTab === tab.tabName,
          'tabs-slice__list-item--active-loop': activeTab === tab.tabName && setLoopActiveClass,
        }"
        @click="changeActiveTab({
          tabName: tab.tabName,
          event: 'click',
        })"
      >
        <button class="tabs-slice__list-tab-name">
          <span
            class="tabs-slice__list-tab-name-text"
            :class="setActiveClassNames(tab.tabName, tab.tabTextAndCheckmarkColor)"
          >
            {{ tab.tabName }}
          </span>
        </button>
      </li>
    </ul>
    <div
      v-for="(tab, tabIndex) in tabs"
      :key="`${tab.tabName.split(' ').join('-')}-${tabIndex + 1}`"
      class="tabs-slice__tab-content-wrapper"
    >
      <transition name="fade" mode="out-in">
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
            <UIButtonPowerCustom
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
      </transition>
    </div>
    <!--		<ContactMeModal ref="modalContactMeRef" :location="'\'Let`s talk\' button, main start screen component'" />-->
  </div>
</template>
<style scoped lang="scss">
.tabs-slice {
  &__container {
    @media screen and (max-width: 1041px) {
      display: none;
      visibility: hidden;
    }
  }

  &__list {
    display: flex;
    gap: 10px;

    &-item {
      padding: 19.5px 24px;
      background: rgba(29, 29, 31, 0.4);
      border-radius: 9px 9px 0 0;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
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

      @media screen and (max-width: 1300px) {
        padding: 17.42px 5px;
      }
    }

    &-tab-name {
      border: none;
      background: transparent;
      cursor: pointer;
      transition: 0.3s ease-in-out;
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
      }
    }
  }

  &__tab-content {
    background: $bgcolor--black-pale;
    padding: 48px;
    position: relative;
    overflow: hidden;

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
      }

      &-icon {
        margin-top: 9px;
        width: 16.91px;
        height: 12.21px;
      }
    }

    &-image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 315px;
      height: auto;
      opacity: 0.08;
    }

    &-button {
      width: 26.3%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-in-out;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  position: absolute;
  opacity: 0;
  z-index: -10;
}
</style>

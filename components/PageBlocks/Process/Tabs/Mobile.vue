<script setup lang="ts">
import type { PropType } from 'vue'
import type { ITabItem } from '~/components/PageBlocks/Process/interfaces/IProcessTabs'

const {
  activeTab,
  tabs,
  sliceBackgroundColor,
  setLoopActiveClass,
} = defineProps({
  activeTab: {
    type: Number,
    default: 0,
  },

  tabs: {
    type: Array as PropType<ITabItem[]>,
    default: () => [],
  },

  sliceBackgroundColor: {
    type: String,
    default: '',
  },

  setLoopActiveClass: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['changeActiveTab'])
const { isMobile } = useCheckMobile(1041)

const textColor = computed(() => (sliceBackgroundColor === 'white' ? 'black' : 'white'))
const themeColor = computed(() => sliceBackgroundColor)
const changeTab = ($event: MouseEvent | TouchEvent | PointerEvent, tabIndex: number) => emit('changeActiveTab', { $event, tabIndex, event: 'click', isMobile })
</script>
<template>
  <div
    class="process-tabs"
    :class="`process-tabs--${themeColor}`"
  >
    <ul class="process-tabs__tabs">
      <li
        v-for="(tab, tabIndex) in tabs"
        :key="`process-tab-${tabIndex}`"
        class="process-tabs__tab"
        :class="{'process-tabs__tab--active': activeTab === tabIndex,
                 'process-tabs__tab--active-loop': activeTab === tabIndex && setLoopActiveClass}"
        @click="changeTab($event, tabIndex)"
      >
        <button class="process-tabs__tab-button">
          <img
            loading="lazy"
            :src="tab.tabIcon.url"
            :alt="tab.tabName"
            class="process-tabs__tab-icon"
            width="50"
            height="50"
          >
          <span
            class="process-tabs__tab-name"
            :class="`process-tabs__tab-name--${textColor}`"
          >
            {{ tab.tabName }}
          </span>
        </button>
        <div
          v-if="activeTab === tabIndex"
          class="process-tabs__content"
        >
          <p
            class="process-tabs__content-text"
            :class="`process-tabs__content-text--${textColor}`"
            v-html="tab.tabDescription.replace(/\n/g, '<br /><br />')"
          />
          <img
            loading="lazy"
            :src="tab.tabIcon.url"
            :alt="tab.tabName"
            class="process-tabs__content-icon"
            width="159"
            height="159"
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .process-tabs {
    * {
      box-sizing: border-box;
    }

    &--white {
      .process-tabs__tab-button, .process-tabs__content {
        background-color: $bgcolor--white;
      }
    }

    &--black {
      .process-tabs__tab-button, .process-tabs__content {
        background-color: $bgcolor--black-pale;
      }

      .process-tabs__content-icon {
        filter: grayscale(1);
        opacity: 0.05;
      }

      .process-tabs__tab-icon {
        opacity: 0.6;
      }
      .process-tabs__tab {
        &--active {
          .process-tabs__tab-icon {
            opacity: 1;
          }
        }
      }
    }

    &__tab-button {
      position: relative;
      width: 100%;
      padding: 9px 36px 9px 20px;
      border-radius: 10px;
      border: none;
      outline: none;
      text-align: left;
      cursor: pointer;
    }

    &__tab {
      margin-bottom: 10px;
      cursor: pointer;
      -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
      &:last-child {
        margin-bottom: 0;
      }

      &--active {
        .process-tabs__tab-name {
          font-size: 24px;
          font-weight: 700;
        }

        .process-tabs__tab-name--white {
          color: $text-color--white;
        }

        .process-tabs__tab-name--black {
          color: $text-color--chinese-black;
        }

        .process-tabs__tab-button {
          border-bottom: 2px solid $border-color--grey-20-percent;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .process-tabs__content {
          display: flex;
        }

        &-black {
          .process-tabs__tab-name {
            color: $text-color--chinese-black;
          }
        }

        &-white {
          .process-tabs__tab-name {
            color: $text-color--white;
          }
        }

        &-loop {
          .process-tabs__tab-button {
            &::before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              bottom: -2px;
              width: 0;
              height: 2px;
              background-color: $bgcolor--venetian-red;
              z-index: 1;
              animation: progressBar 15s linear forwards;
            }
          }
        }
      }
    }

    &__tab-button{
      display: flex;
    }

    &__tab-button, &__content {
      display: flex;
      align-items: center;
    }

    &__tab-icon {
      width: 40px;
      min-width: 40px;
      height: 40px;
      margin-right: 11px;
    }

    &__tab-name {
      @include font('Inter', 20px, 400);
    }

    &__content-text {
      @include font('Inter', 16px, 400);
    }

    &__tab-name, &__content-text {
      &--black {
        color: $text-color--black-pale;
      }
      line-height: 130%;
    }

    &__tab-name {
      &--white {
        color: $text-color--grey-opacity-40-percent;
      }
    }

    &__content-text {
      &--white {
        color: $text-color--grey-20-percent;
      }
    }

    &__content {
      display: none;
      position: relative;
      min-height: 254px;
      padding: 15px 50px;
      border-radius: 0 0 10px 10px;
    }

    &__content-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 159px;
      min-width: 159px;
      height: 159px;
      opacity: 0.1;
      pointer-events: none;
    }
  }

  @media screen and (max-width: 550px) {
    .process-tabs {
      &__tab {
        &--active {
          .process-tabs__tab-name {
            font-size: 20px;
          }
        }
      }

      &__tab-button {
        padding: 14px 36px 14px 23px;
      }

      &__tab-name {
        font-size: 18px;
      }

      &__tab-icon {
        width: 30px;
        min-width: 30px;
        height: 30px;
        margin-right: 21px;
      }

      &__content {
        padding: 30px;
      }

      &__content-icon {
        width: 102px;
        min-width: 102px;
        height: 102px;
      }

      &__content-description {
        max-width: 100%;
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
</style>

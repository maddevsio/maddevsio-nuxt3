<script setup lang="ts">
import type { PropType } from 'vue'
import type { ITabItem } from '~/components/PageBlocks/Process/interfaces/IProcessTabs'

const props = defineProps({
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

defineEmits(['changeActiveTab'])

const { isMobile } = useCheckMobile(1041)
const tabItem = ref<HTMLElement[] | null>(null)
const iconSize = ref(50)

const textColor = computed(() => (props.sliceBackgroundColor === 'white' ? 'black' : 'white'))
const themeColor = computed(() => props.sliceBackgroundColor)

onMounted(() => {
  if (tabItem.value) {
    const tabHeight = tabItem.value[0].offsetHeight
    iconSize.value = (tabHeight * props.tabs.length) / 2
  }
})
</script>
<template>
  <div
    class="process-tabs"
    :class="`process-tabs--${themeColor}`"
  >
    <ul class="process-tabs__tabs">
      <li
        v-for="(tab, tabIndex) in tabs"
        :key="`process-tab-${tabIndex}-${createUID(tab.tabName)}`"
        ref="tabItem"
        class="process-tabs__tab"
        :class="{'process-tabs__tab--active': activeTab === tabIndex,
                 'process-tabs__tab--active-loop': activeTab === tabIndex && setLoopActiveClass}"
      >
        <button
          class="process-tabs__tab-button"
          @click="$emit('changeActiveTab', { $event, tabIndex, event: 'click', isMobile })"
        >
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
      </li>
    </ul>
    <div class="process-tabs__content-column">
      <div
        v-for="(tab, tabIndex) in tabs"
        :key="`process-tab-content-${tabIndex}-${createUID(tab.tabName)}`"
        class="process-tabs__content-wrapper"
      >
        <Transition name="fade" mode="out-in">
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
              :style="{'width': iconSize + 'px', 'min-width': iconSize + 'px', 'height': iconSize + 'px'}"
              class="process-tabs__content-icon"
              width="223"
              height="223"
            >
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.process-tabs {
  position: relative;
  display: flex;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  &--white {
    .process-tabs__tab {
      border-color: $border-color--grey-20-percent;
    }
  }

  &--black {
    .process-tabs__tab-icon {
      opacity: 0.6;
    }

    .process-tabs__content-icon {
      filter: grayscale(1);
      opacity: 0.05;
    }

    .process-tabs__tab {
      border-color: $border-color--grey-process-tabs-dark-theme;
      &--active {
        .process-tabs__tab-icon {
          opacity: 1;
        }
      }
    }
  }

  &__tabs {
    flex: 1 1 49%;
    max-width: 610px;
  }

  &__content-column {
    flex: 1 1 49%;
  }

  &__content {
    padding: 10px 46px;
  }

  &__content-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    pointer-events: none;
  }

  &__tab {
    position: relative;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    &:last-child {
      border-bottom: none;
    }

    &--active {
      .process-tabs__tab-name {
          font-weight: 700;
      }

      .process-tabs__tab-name--white {
        color: $text-color--white;
      }

      .process-tabs__tab-name--black {
        color: $text-color--chinese-black;
      }

      &-loop {
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

  &__tab-button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 22px 22px 22px 0;
    text-align: left;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  &__tab-icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 28px;
  }

  &__tab-name {
    @include font('Inter', 28px, 400);
    transition: 0.3s ease-in-out;
  }

  &__content-text {
    @include font('Inter', 24px, 400);
    max-height: 100%;
  }
}

@media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
  .process-tabs {
    &__tabs {
      max-width: 530px;
    }
    &__tab-name {
      font-size: 20px;
    }
    &__content-text {
      font-size: 18px;
    }
    &__tab-button {
      padding: 17px 17px 17px 0;
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

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
  opacity: 0;
  z-index: -10;
}
</style>

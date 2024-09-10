<script setup lang="ts">
import { contactMeClickEvent } from '~/analytics/events'

const props = defineProps({
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
  linksColor: {
    type: String,
    default: 'blue',
  },
})

const modalContactMeRef = ref<{ show(): void } | null>(null)
const { $getMediaFromS3 } = useMediaFromS3()
const { emailSubject } = storeToRefs(useEmailSubjectStore())

const getLinksColor = () => {
  switch (props.linksColor) {
  case 'green': return '#00C05B'
  case 'red': return '#ec1c24'
  default: return '#137bce'
  }
}

const setColorToProgressBar = (color: string) => {
  switch (color) {
  case 'green-gradient': return 'linear-gradient(to bottom, #4cc866 -2.34%, #099fbc 79.81%)'
  case 'purple-gradient': return 'linear-gradient(to bottom, #c598ff 0.47%, #9a4bff 99.16%)'
  case 'pink-gradient': return 'linear-gradient(314.49deg, #b428b4 11.9%, #f0288c 82.73%)'
  case 'blue-gradient': return 'linear-gradient(189.25deg, #4ca0f5 7.33%, #2e6ff9 85.42%)'
  default: return 'linear-gradient(to bottom, #4cc866 -2.34%, #099fbc 79.81%)'
  }
}

const cssVars = computed(() => ({
  '--links-color': getLinksColor(),
}))

const showModal = () => {
  if (!modalContactMeRef?.value && !modalContactMeRef?.value!.show) {
    return
  }
  modalContactMeRef.value.show()
  contactMeClickEvent.send('Tabs Slice component')
}
</script>
<template>
  <div
    class="container tabs-slice__container"
    :style="cssVars"
  >
    <ul class="tabs-slice__list">
      <li
        v-for="(tab, tabIndex) in tabs"
        :key="`${tab.tabName.split(' ').join('-')}-${tabIndex}`"
        class="tabs-slice__list-item"
        :class="{
          'tabs-slice__list-item--active': activeTab === tab.tabName,
          'tabs-slice__list-item--active-loop': activeTab === tab.tabName && setLoopActiveClass,
        }"
        :style="{
          '--progress-tab-color': setColorToProgressBar(tab.tabTextAndCheckmarkColor),
        }"
        @click="changeActiveTab({
          tabName: tab.tabName,
          event: 'click'
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
      <Transition name="fade" mode="out-in">
        <div
          v-if="activeTab === tab.tabName"
          class="tabs-slice__tab-content"
        >
          <PrismicRichText
            :field="tab.tabDescription"
            :html-serializer="prismicHtmlSerializer"
            class="tabs-slice__tab-text"
          />
          <PrismicRichText
            :field="tab.tabDescriptionSecond"
            :html-serializer="prismicHtmlSerializer"
            class="tabs-slice__tab-text-second"
          />
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
        </div>
      </Transition>
    </div>
    <LazyClientOnly>
      <Teleport to="body">
        <LazyWidgetsModalContactMe
          ref="modalContactMeRef"
          :location="'\'Tab slice\' button'"
          :email-subject="emailSubject"
        />
      </Teleport>
    </LazyClientOnly>
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
            background: var(--progress-tab-color);
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

    &-button {
      width: 26.3%;
    }
  }

  &__tab-text,
  &__tab-text-second {
    :deep(h1) {
      display: none;
      visibility: hidden;
    }

    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font('Inter', 24px, 700);
      line-height: 35.52px;
      color: $text-color--white-primary;
      margin-bottom: 16px;
    }

    :deep(ul) {
      list-style: disc;
      margin: 32px 0;
      padding-left: 33px;
    }

    :deep(p),
    :deep(a),
    :deep(li) {
      @include font('Inter', 21px, 400);
      line-height: 31.5px;
      color: $text-color--grey-opacity-40-percent;
    }

    :deep(li) {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(a) {
      color: var(--links-color);
    }
  }

  &__tab-text-second {
    margin-top: 60px;
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

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
  if (!modalContactMeRef.value && !modalContactMeRef.value!.show) {
    return
  }
  modalContactMeRef.value!.show()
  contactMeClickEvent.send('Tabs Slice component')
}
</script>
<template>
  <div
    class="container"
    :style="cssVars"
  >
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
          :style="{
            '--progress-tab-color': setColorToProgressBar(tab.tabTextAndCheckmarkColor),
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
          <PrismicRichText
            v-if="$prismic.asText(tab.tabDescription)"
            :field="tab.tabDescription"
            :html-serializer="prismicHtmlSerializer"
            class="tabs-slice__tab-text"
          />
          <PrismicRichText
            v-if="$prismic.asText(tab.tabDescriptionSecond)"
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
      </div>
    </div>
    <LazyClientOnly>
      <Teleport to="body">
        <LazyWidgetsModalContactMe
          ref="modalContactMeRef"
          :location="'TabSlice mobile button'"
          :email-subject="emailSubject"
        />
      </Teleport>
    </LazyClientOnly>
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

    &-button {
      width: 26.3%;
    }

    @media screen and (max-width: 768px) {
      &-button {
        width: 100%;
      }
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
      @include font('Inter', 18px, 600);
      line-height: 23.4px;
      color: $text-color--white-primary;
      margin-bottom: 12px;
    }

    :deep(ul) {
      list-style: disc;
      margin: 20px 0;
      padding-left: 23px;
    }

    :deep(p),
    :deep(a),
    :deep(li) {
      @include font('Inter', 18px, 400);
      line-height: 25.2px;
      color: $text-color--grey-opacity-40-percent;
    }

    :deep(br) {
      height: 20px;
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
    margin-top: 41px;
  }
}
</style>

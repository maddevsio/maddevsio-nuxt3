<script setup lang="ts">
import type { PropType } from 'vue'

interface Logo {
  file: string
  width: string
  height: string
  folder: string
  alt: string
  tabletDimensions: {
    width: number
    height: number
  }
}

const props = defineProps({
  project: {
    type: String,
    default: '',
  },

  videoPosterPath: {
    type: String,
    default: '',
  },

  videoPath: {
    type: String,
    default: '',
  },

  pseudoBeforeBackground: {
    type: String,
    default: '',
  },

  logo: {
    type: Object as PropType<Logo>,
    default: () => ({}),
    width: {
      type: Number,
      default: 0,
    },

    height: {
      type: Number,
      default: 0,
    },

    folder: {
      type: String,
      default: '',
    },

    file: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    tabletDimensions: {
      type: Object,
      required: true,
      width: {
        type: Number,
        default: 0,
      },

      height: {
        type: Number,
        default: 0,
      },
    },
  },

  maxWidthDescription: {
    type: String,
    default: 'unset',
  },

  gapBetweenLogo: {
    type: String,
    default: '',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
const loaded = ref(false)
const isIphone = ref(false)
const sectionText = ref(null)
const cssVarsForPseudoBefore = computed(() => ({
  '--background': `${ props.pseudoBeforeBackground }`,
}))
const cssVarsLogoDimensions = computed(() => ({
  '--logoWidth': `${ props.logo.width }px`,
  '--logoHeight': `${ props.logo.height }px`,
  '--logoTabletWidth': `${ props.logo.tabletDimensions.width }px`,
  '--logoTabletHeight': `${ props.logo.tabletDimensions.height }px`,
}))
const cssVarsContent = computed(() => ({
  '--gap': `${ props.gapBetweenLogo }px`,
}))

const { sectionTextOpacity } = useChangeTextOpacity(sectionText)

onMounted(() => {
  isIphone.value = !!navigator.userAgent.match(/(iPhone)/i)
  nextTick(() => {
    loaded.value = true
  })
})
</script>
<template>
  <section
    id="transparent-header-area"
    class="case-header"
    :class="`case-header__${project}`"
    :style="cssVarsForPseudoBefore"
  >
    <img
      class="case-header__video-fallback"
      :src="$getMediaFromS3(videoPosterPath)"
      alt="case video fallback"
      width="1201"
      height="635"
    >
    <video
      v-if="!isIphone && loaded"
      class="case-header__video"
      data-testid="test-case_main-video"
      loop="true"
      muted="true"
      autoplay="true"
    >
      <source
        :src="$getMediaFromS3(videoPath)"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
    <div
      ref="sectionText"
      class="case-header__content"
      :style="{opacity: sectionTextOpacity, ...cssVarsContent}"
    >
      <div
        class="case-header__content-text"
      >
        <div class="case-header__study-item">
          Case Study
        </div>
        <slot name="title" />
        <slot name="description" />
        <slot name="actions" />
      </div>
      <div
        v-if="logo.file"
        class="case-header__logo-wrapper"
      >
        <img
          :width="logo.width"
          :height="logo.height"
          :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
          :alt="logo.alt || 'Image'"
          :class="`case-header__${logo.file}`"
          class="case-header__logo"
          :style="cssVarsLogoDimensions"
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-header {
  height: 100vh;
  min-height: 568px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__video,
  &__video-fallback {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }

  &__video {
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: var(--background);
  }

  &__content {
    position: relative;
    z-index: 3;
    max-width: 1060px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    column-gap: var(--gap);
    margin: 0 auto;
  }

  &__study-item {
    @include default-text($text-color--white, 17px, 166%, -0.035em, normal);
    max-width: 88px;
    margin-bottom: 24px;
    padding: 4px 8px;
    letter-spacing: -0.035em;
    text-align: center;
    background-color: $bgcolor--red;
  }

  &__logo {
    width: var(--logoWidth);
    height: var(--logoHeight);
  }

  @media screen and (max-height: 660px) {
    &__content {
      padding-top: 80px;
    }
  }

  @media screen and (max-width: 970px) {
    &__content {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 50px;
    }

    &__logo {
      width: var(--logoTabletWidth);
      height: var(--logoTabletHeight);
    }
  }

  @media screen and (max-width: 720px) {
    &__title {
      font-size: 35px;
      line-height: 130%;
      margin-bottom: 12px;
    }
  }
}

:slotted(.case-header__title) {
  @include title($text-color--white, 67.88px, -2px);
  line-height: 112%;
  margin-bottom: 26px;
}

:slotted(.case-header__description) {
  @include default-text($text-color--white, 17px, 166%, -0.035em, normal);
}
</style>

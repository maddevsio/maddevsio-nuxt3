<script setup lang="ts">
import type { PropType } from 'vue'
import type { TransformedGlossaryPost } from '~/interfaces/common/commonInterfaces'
import { GlossaryPostView } from '~/components/Glossary/Post/classes/GlossaryPostView'

const { glossaryPostContent } = defineProps({
  glossaryPostContent: {
    type: Object as PropType<TransformedGlossaryPost>,
    default: () => ({}),
  },
})

const {
  glossaryPostHead,
  glossaryPostSidebar,
  glossaryPostFooter,
  glossaryPostComponents,
} = new GlossaryPostView(glossaryPostContent)
</script>

<template>
  <div class="glossary-post-content">
    <div class="glossary-post-content__container container">
      <LazyGlossaryPostSidebar :glossary-post-sidebar-instance="glossaryPostSidebar" />
      <div class="glossary-post-content__main">
        <LazyGlossaryPostHead :glossary-post-head-instance="glossaryPostHead" />
        <LazyGlossarySlicesComponents
          v-if="glossaryPostComponents.length"
          :slices="glossaryPostComponents"
        />
        <LazyGlossaryPostFooter :glossary-post-footer-instance="glossaryPostFooter" />
      </div>
    </div>
    <BlogUIProgressBar />
  </div>
</template>

<style lang="scss" scoped>
.glossary-post-content {
  padding-bottom: 128px;
  &__container {
    display: flex;
  }

  &__main {
    max-width: 680px;
  }

  @media screen and (max-width: 1280px) {
    padding-bottom: 96px;
  }

  @media screen and (max-width: 1185px) {
    &__main {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 1185px) {
    padding-bottom: 48px;
  }
}
</style>

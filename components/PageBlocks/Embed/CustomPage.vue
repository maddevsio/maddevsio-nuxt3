<script setup lang="ts">
import type { EmbedCustomPageProps } from '~/components/PageBlocks/Embed/interfaces/IEmbedCustomPage'
import { EmbedCustomPage } from '~/components/PageBlocks/Embed/classes/EmbedCustomPage'

interface Props {
  slice: EmbedCustomPageProps
}

const props = defineProps<Props>()
const { slice } = new EmbedCustomPage(props.slice)
</script>
<template>
  <section class="embed-slice">
    <div class="embed-slice__container">
      <LazyPageBlocksEmbedBlog
        :slice="slice"
        :custom-title="true"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.embed-slice {
  background: $bgcolor--white-primary;
  width: 100%;

  &__container {
    max-width: 816px;
    margin: 0 auto 1px;
    padding: 0 24px;
  }

  :deep(.embed-slice__title) {
    @include font('Inter', 25px, 700);
    line-height: 32px;
    color: $text-color--black-oil;
    margin: 0 0 6px 0;
  }

  :deep(.embed-slice__description) {
    @include font('Inter', 15px, 400);
    color: $text-color--grey-pale;
    margin: 0;
  }
}
</style>

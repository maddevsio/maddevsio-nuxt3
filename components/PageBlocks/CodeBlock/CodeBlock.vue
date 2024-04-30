<script setup lang="ts">
import type { PropType } from 'vue'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'
import type { CodeBlockProps } from '~/components/PageBlocks/CodeBlock/interfaces/ICodeBlock'
import { CodeBlock } from '~/components/PageBlocks/CodeBlock/classes/CodeBlock'
import '~/components/PageBlocks/CodeBlock/highlights'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CodeBlockProps>,
    default: () => ({}),
  },
})

const {
  code,
  highlighter,
} = new CodeBlock(slice)

const highlight = (code: any) => highlighter(code, Prism)
</script>
<template>
  <div class="post-part single">
    <ClientOnly>
      <PrismEditor
        v-model="code"
        :highlight="highlight"
        class="code-sample"
        readonly
      />
    </ClientOnly>
  </div>
</template>
<style scoped lang="scss">
.code-sample {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 24px 0;

  :deep(.prism-editor__container) {
    background-color: whitesmoke;
  }

  :deep(.prism-editor__container),
  :deep(.prism-editor__textarea) {
    padding: 25px;
  }
}

@media only screen and (max-width: 1024px) {
  .code-sample {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>

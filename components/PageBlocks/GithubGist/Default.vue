<script setup lang="ts">
import type { PropType } from 'vue'
import type { GithubGistProps } from '~/components/PageBlocks/GithubGist/interfaces/IGithubGist'
import { GithubGist } from '~/components/PageBlocks/GithubGist/classes/GithubGist'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<GithubGistProps>,
    default: () => ({}),
  },
})

const prismic = usePrismic()

const {
  gistData,
  gistError,
  getGistData,
  setIsMounted,
  isMounted,
} = new GithubGist(slice, prismic)

onMounted(() => {
  setIsMounted(true)
  getGistData()
})
</script>
<template>
  <div
    v-if="isMounted"
    class="vue-gist"
  >
    <img
      v-if="gistError"
      id="notFound"
      height="100%"
      width="100%"
      src="https://user-images.githubusercontent.com/883233/102043641-d4817580-3d89-11eb-885d-2786373932d4.png"
      alt="404"
    >
    <div
      v-else
      v-html="gistData"
    />
  </div>
</template>
<style scoped lang="scss">
@import url("https://github.githubassets.com/assets/gist-embed-c77408be8058.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
:deep(.gist) {
  .gist-meta, .gist-data, .gist-file, .blob-num, .blob-code {
    font-family: 'IBM Plex Mono', monospace !important;
  }
}
</style>

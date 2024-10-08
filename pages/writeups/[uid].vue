<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { Writeup } from '~/components/Writeup/classes/Writeup'
import { extractWriteupData } from '~/components/Writeup/helpers/extractWriteupData'
import 'prismjs/themes/prism-tomorrow.min.css'
import type { WriteupPost } from '~/interfaces/common/commonInterfaces'

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()

const writeupService = new Writeup(config.public.ffEnvironment)

const { data: writeupData, error } = await useAsyncData('caseData', async () => {
  try {
    const writeupPageData = await writeupService.getWriteupPage(prismic, route.params.uid as string) as WriteupPost
    const pageContent = extractWriteupData(writeupPageData, config.public.domain)

    if (!pageContent.released && config.public.ffEnvironment === 'production') {
      showError({ statusCode: 404, statusMessage: 'Page not found' })
    }

    return {
      pageContent,
    }
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useClearStoresBeforeRouteLeave()

if (writeupData.value!.pageContent.schemaOrg) {
  useJsonld(() => writeupData.value!.pageContent.schemaOrg!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: writeupData.value?.pageContent.url || '',
  title: writeupData.value?.pageContent.metaTitle || '',
  description: writeupData.value?.pageContent.metaDescription || '',
  image: writeupData.value?.pageContent.ogImage,
},
[
  {
    hid: 'highlight-script',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
    body: true,
    defer: true,
    onload: () => {
      const autoloader = document.createElement('script')
      autoloader.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js'
      autoloader.defer = true
      autoloader.onload = () => {
        // eslint-disable-next-line
          if (window.Prism) window.Prism.highlightAll()
      }
      document.body.appendChild(autoloader)
    },
  },
],
))
</script>

<template>
  <div class="writeup-post">
    <WriteupPostHeader
      :author="writeupData?.pageContent?.author"
      :created-date="writeupData?.pageContent?.createdDate"
      :updated-date="writeupData?.pageContent?.updatedDate"
      :tag="writeupData?.pageContent?.tag"
      :title="writeupData?.pageContent?.title"
    />
    <LazyWriteupSlicesComponent
      :slices="writeupData?.pageContent?.slices"
    />
    <ClientOnly>
      <LazyBlogUIButtonScrollTop />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.writeup-post {
  padding-top: 170px;

  @media screen and (max-width: 768px) {
    padding-top: 120px;
  }
}
</style>

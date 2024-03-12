<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { Writeup } from '~/components/Writeup/classes/Writeup'
import { extractWriteupData } from '~/components/Writeup/helpers/extractWriteupData'
import 'prismjs/themes/prism-tomorrow.min.css'

const prismic = usePrismic()
const route = useRoute()
const { updateFooterVisible } = useFooterStore()

const writeupService = new Writeup()

const { data: writeupData, error } = await useAsyncData('caseData', async () => {
  try {
    const writeupPageData = await writeupService.getWriteupPage(prismic, route.params.uid as string)
    // @ts-ignore
    const pageContent = extractWriteupData(writeupPageData)

    // const { headerPlate } = pageContent
    //
    // if (!$cookies.get(`seenArticlePlate_${route.path}`)) {
    //   store.commit('SET_HEADER_PLATE_CONTENT', headerPlate)
    // }

    if (!pageContent.released && process.env.ffEnvironment === 'production') {
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

onBeforeRouteLeave(() => {
  updateFooterVisible(true)
})

// @ts-ignore
useHead(buildHead({
  url: writeupData.value?.pageContent.url || '',
  title: writeupData.value?.pageContent.metaTitle || '',
  description: writeupData.value?.pageContent.metaDescription || '',
  jsonLd: writeupData.value!.pageContent.schemaOrg!,
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

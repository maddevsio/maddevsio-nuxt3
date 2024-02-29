<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostContentLocker } from '~/components/Blog/interfaces/Post/IPostContentLocker'
import type { Ebook } from '~/interfaces/common/commonInterfaces'

const props = defineProps({
  contentLocker: {
    type: Object as PropType<IPostContentLocker>,
    default: () => ({}),
  },
  ebook: {
    type: Object as PropType<Ebook>,
    default: () => ({}),
  },
})

const { $eventBus } = useNuxtApp()

const {
  handleClose,
  addHandleScroll,
  showContentLocker,
  isScrolled,
  modalContentLocker,
} = props.contentLocker

$eventBus.$on('ebook-send', sendPulseTemplateId => {
  ManageCookie.setCookie({
    name: `sawModal_${ sendPulseTemplateId }`,
    value: true,
    expires: 30,
  })
})

watch(isScrolled, () => {
  showContentLocker()
})

onMounted(() => {
  addHandleScroll()
})

onUnmounted(() => {
  handleClose()
  $eventBus.$off('ebook-send')
})
</script>
<template>
  <LazyWidgetsModalEbook
    ref="modalContentLocker"
    :send-pulse-template-id="ebook.primary.sendPulseTemplateId"
    :ebook-path="ebook.primary.ebookPath"
    :ebook-name="ebook.primary.ebookName"
    :ebook-image="ebook.primary.ebookImage"
    :ebook-sub-title="ebook.primary.ebookName"
    location="Post Content Locker"
  />
</template>

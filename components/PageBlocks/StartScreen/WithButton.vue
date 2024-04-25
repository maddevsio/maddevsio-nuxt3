<script setup lang="ts">
import type { ImageField } from '@prismicio/client'
import { contactMeClickEvent } from '~/analytics/events'

interface Props {
  slice: {
    primary: {
      imageOpacity: string
      background: string
      gradientColor: string
      title: string
      subtitle: string
      image: ImageField
      btnText: string
    }
  }
}
const { slice } = defineProps<Props>()

const imageOpacity = Number(slice.primary.imageOpacity) || 0.8
const image = slice.primary.image
const background = setSliceBackground(slice.primary.background || 'black')
const gradient = setSliceGradient(slice.primary.gradientColor)
const title = slice.primary.title
const subtitle = slice.primary.subtitle
const btnText = slice.primary.btnText || 'Let`s talk'
const isShowModal = ref(false)

const modalContactMeRef = ref<{ show(): void } | null>(null)
const { emailSubject } = storeToRefs(useEmailSubjectStore())
const showModal = async () => {
  isShowModal.value = true
  await delay(200)
  if (!modalContactMeRef?.value?.show) { return }
  modalContactMeRef?.value.show()
  contactMeClickEvent.send('Start Screen Lets talk button')
}
</script>
<template>
  <PageBlocksStartScreenDefaultTemplate
    :background="background"
    :gradient="gradient"
    :image="image"
    :image-opacity="imageOpacity"
    :subtitle="subtitle"
    :title="title"
  >
    <template #button>
      <SharedUIAnimatedButton
        @click="showModal"
      >
        <span class="button-text">
          {{ btnText }}
        </span>
      </SharedUIAnimatedButton>
    </template>
  </PageBlocksStartScreenDefaultTemplate>
  <LazyClientOnly>
    <Teleport to="body">
      <NuxtLazyHydrate :on-interaction="isShowModal">
        <LazyWidgetsModalContactMe
          v-if="isShowModal"
          ref="modalContactMeRef"
          :location="'\'Let`s talk\' button, start screen component'"
          :email-subject="emailSubject"
        />
      </NuxtLazyHydrate>
    </Teleport>
  </LazyClientOnly>
</template>
<style lang="scss" scoped>
:deep(.start-screen-slice__subtitle) {
  letter-spacing: 1-px;
  margin-bottom: 50px;
}
</style>

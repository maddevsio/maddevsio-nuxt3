<script setup lang="ts">
import type { StartScreenWithButtonProps } from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenWithButton'
import { StartScreenWithButton } from '~/components/PageBlocks/StartScreen/classes/StartScreenWithButton'

interface Props {
  slice: StartScreenWithButtonProps
}
const { slice } = defineProps<Props>()

const {
  title,
  subtitle,
  imageOpacity,
  image,
  gradient,
  btnText,
  background,
} = new StartScreenWithButton(slice)

const modalContactMeRef = ref<{ show(): void } | null>(null)
// const { emailSubjectGlobal } = inject('emailSubjectGlobal')
const showModal = () => {
  if (!modalContactMeRef?.value?.show) { return }
  modalContactMeRef?.value.show()
  // contactMeClickEvent.send('Start Screen Lets talk button')
}
</script>
<template>
  <LazyPageBlocksStartScreenDefaultTemplate
    :background="background"
    :gradient="gradient"
    :image="image"
    :image-opacity="imageOpacity"
    :subtitle="subtitle"
    :title="title"
  >
    <template #button>
      <LazySharedUIAnimatedButton
        @click="showModal"
      >
        <span class="button-text">
          {{ btnText }}
        </span>
      </LazySharedUIAnimatedButton>
    </template>
  </LazyPageBlocksStartScreenDefaultTemplate>
  <LazyClientOnly>
    <Teleport to="body">
      <LazyWidgetsModalContactMe
        ref="modalContactMeRef"
        :location="'\'Let`s talk\' button, start screen component'"
        email-subject="Placeholder"
      />
    </Teleport>
  </LazyClientOnly>
</template>
<style lang="scss" scoped>
:deep(.start-screen-slice__subtitle) {
  letter-spacing: 1-px;
  margin-bottom: 50px;
}
</style>

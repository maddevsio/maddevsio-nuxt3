<script setup lang="ts">
import type { StartScreenWithButtonProps } from '~/components/StartScreen/interfaces/IStartScreenWithButton'
import { StartScreenWithButton } from '~/components/StartScreen/classes/StartScreenWithButton'

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

// const modalContactMe = ref(null)
// const { emailSubjectGlobal } = inject('emailSubjectGlobal')
const showModal = () => {
  console.log('Click show modal') // TODO: Needs finishing contact me form
  // if (!modalContactMe?.value?.show) return
  // modalContactMe?.value.show()
  // contactMeClickEvent.send('Start Screen Lets talk button')
}
</script>
<template>
  <LazyStartScreenDefaultTemplate
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
    <!--    <template #modal>-->
    <!--      <ContactMeModal-->
    <!--        ref="modalContactMe"-->
    <!--        :location="'\'Let`s talk\' button, start screen component'"-->
    <!--        :email-subject="emailSubject"-->
    <!--      />-->
    <!--    </template>-->
  </LazyStartScreenDefaultTemplate>
</template>
<style lang="scss" scoped>
:deep(.start-screen-slice__subtitle) {
  letter-spacing: 1-px;
  margin-bottom: 50px;
}
</style>

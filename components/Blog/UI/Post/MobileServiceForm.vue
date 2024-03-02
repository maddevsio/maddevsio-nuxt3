<script setup lang="ts">
import type { WidgetsModalServiceForm } from '#components'

defineProps({
  postForm: {
    type: Object,
    default: () => ({}),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
const modalPostForm = ref<InstanceType<typeof WidgetsModalServiceForm> | null>(null)
const showPostModal = () => {
  if (!modalPostForm.value.show) { return }
  modalPostForm.value.show()
}
</script>
<template>
  <span>
    <button
      aria-label="Show post form modal"
      class="show-form-button"
      type="button"
      @click="showPostModal"
    >
      <img
        :src="$getMediaFromS3('/images/Blog/svg/post-form-button-icon.svg')"
        alt="Launch icon"
        class="show-form-button__icon"
        height="30"
        width="30"
      >
    </button>
    <ClientOnly>
      <Teleport to="body">
        <LazyWidgetsModalServiceForm
          ref="modalPostForm"
          :slice="postForm"
        />
      </Teleport>
    </ClientOnly>
  </span>
</template>
<style lang="scss" scoped>
.show-form-button {
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background: #F5F7F9;
  border: 1px solid rgba(207, 207, 208, 0.4);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 2px 32px rgba(0, 0, 0, 0.16);
  position: fixed;
  bottom: 15px;
  right: 30px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1086px) {
    display: block;
  }

  @media screen and (max-width: 420px) {
    right: 15px;
  }
}
</style>

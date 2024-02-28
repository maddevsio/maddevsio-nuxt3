<script setup lang="ts">
const route = useRoute()
const shareIconLabel = ref<HTMLElement | null>(null)

const copyArticleLink = async () => {
  const link = `${ window.location.origin }${ route.path }`
  if ('share' in navigator) {
    try {
      await navigator.share({
        title: `Mad Devs: ${ document.title }`,
        url: link,
      })
    } catch {
      copyToClipboard(link)
    }
  } else {
    copyToClipboard(link)
  }

  if (shareIconLabel.value) {
    shareIconLabel.value.innerText = 'Link copied'
    setTimeout(() => {
      if (shareIconLabel.value) {
        shareIconLabel.value.innerText = 'Copy link'
      }
    }, 3000)
  }
}
</script>
<template>
  <button
    type="button"
    class="share-icon"
    @click="copyArticleLink"
  >
    <span
      ref="shareIconLabel"
      class="share-icon__label"
    >
      Copy link
    </span>
  </button>
</template>
<style lang="scss" scoped>
.share-icon {
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  @include social-network-share;

  &__label {
    @include font('Inter', 12px, 400);
    line-height: 150%;
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 81px;
    height: 28px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bgcolor--cultured;
    border-radius: 3px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  &:hover {
    & .share-icon__label {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>

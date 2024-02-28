<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>

<template>
  <div class="anchor_copy-link">
    <button
      :data-id="createAnchorID(text)"
      @click="useCopyAnchorLink"
    >
      <img
        :src="$getMediaFromS3('images/core/common/anchor.svg')"
        alt="Anchor"
        width="16"
        height="16"
      >
    </button>
    <div class="anchor_copy-link-tooltip">
      Copy link
    </div>
  </div>
</template>
<style scoped lang="scss">
.anchor_copy-link {
  button {
    display: none;
    position: absolute;
    left: -36px;
    top: 50%;
    transform: translateY(-50%);
    padding: 12px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    @media screen and (max-width: 768px) {
      left: 0;
      top: 0;
    }

    img {
      width: 16px;
      height: 16px;
      user-select: none;
      pointer-events: none;
    }
  }

  &-tooltip {
    display: none;
    position: absolute;
    left: -102px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $bgcolor--silver;
    padding: 4px 8px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0;
    line-height: 18px;
    color: $text-color--black-oil;
    transition: all 0.1s ease;
    @include font('Inter', 12px, 400);
  }

  &:hover {
    .anchor_copy-link-tooltip {
      display: block;
    }
  }
}
</style>

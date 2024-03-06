<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
const imgIndex = ref(0)
const intervalID = ref<ReturnType<typeof setInterval>>()
const img = reactive({
  x1: $getMediaFromS3('/images/Cases/nambafood/webp/ninja-sushi-slide.webp'),
  x2: $getMediaFromS3('/images/Cases/nambafood/webp/ninja-sushi-slide@2x.webp'),
  alt: 'Cases image',
})
const source = reactive({
  x1: $getMediaFromS3('/images/Cases/nambafood/jpg/ninja-sushi-slide.jpg'),
  x2: $getMediaFromS3('/images/Cases/nambafood/jpg/ninja-sushi-slide@2x.jpg'),
})

const toggleImages = () => {
  const pictures = [
    {
      img: 'ninja-sushi-slide',
      alt: 'Namba Food: Sushi Room.',
    },
    {
      img: 'sushi-room-slide',
      alt: 'Namba Food: Sushi Room.',
    },
    {
      img: 'coffee-house-slide',
      alt: 'Namba Food: Coffee House.',
    },
  ]
  img.x1 = $getMediaFromS3(`/images/Cases/nambafood/jpg/${ pictures[imgIndex.value].img }.jpg`)
  img.x2 = $getMediaFromS3(`/images/Cases/nambafood/jpg/${ pictures[imgIndex.value].img }@2x.jpg`)
  img.alt = pictures[imgIndex.value].alt
  source.x1 = $getMediaFromS3(`/images/Cases/nambafood/webp/${ pictures[imgIndex.value].img }.webp`)
  source.x2 = $getMediaFromS3(`/images/Cases/nambafood/webp/${ pictures[imgIndex.value].img }@2x.webp`)
  imgIndex.value = (imgIndex.value + 1) % pictures.length // update the counter
}

onMounted(() => {
  intervalID.value = setInterval(toggleImages, 1500)
})

onUnmounted(() => {
  if (intervalID.value) {
    clearInterval(intervalID.value)
  }
})
</script>
<template>
  <div class="case_card-content">
    <div class="case_card-content_left-column">
      <h3
        :style="{ color: '#f5f7f9' }"
        class="case_title_h4 m-8_bottom"
      >
        Mini white label
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="case_card-content_paragraph"
        color="#f5f7f9"
      >
        After business owners submit images and prices, the Namba Food team creates a customised and branded e-commerce
        website. Updates, support and maintenance are also done by Namba Food.
      </LazyCaseStudiesUITextParagraph>
      <h3
        :style="{ color: '#f5f7f9' }"
        class="case_title_h4 m-8_bottom"
      >
        Full white label
      </h3>
      <LazyCaseStudiesUITextParagraph color="#f5f7f9">
        Business partners can use Namba Food’s software and business model, adjusting for their needs, scale and region.
        Namba Food is responsible for its maintenance and helps with management and marketing.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="case_card-content_right-column">
      <img
        loading="lazy"
        :src="$getMediaFromS3(`images/core/Studies/svg/macbook-frame.svg`)"
        width="1441"
        height="790"
        alt="Macbook frame"
        class="case_card-content_macbook-frame"
      >
      <picture>
        <source
          v-if="source"
          :srcset="[source.x1 + ' ', source.x2 + ' 2x']"
          class="case_card-content_image"
          type="image/webp"
        >
        <img
          v-if="img"
          :src="img.x1"
          :srcset="[img.x2 + ' 2x']"
          :alt="img.alt || 'Image'"
          width="1028"
          height="547"
          class="case_card-content_image"
          data-testid="test-case_card-content_image"
        >
      </picture>
    </div>
  </div>
</template>
<style scoped lang="scss">
.case_card-content {
  @include grid(repeat(2, 1fr), auto, 0, 0);

  :deep(.case_card-content_paragraph.case_paragraph) {
    margin-bottom: 41px;
  }

  &_right-column {
    width: 292px;
    height: 383px;
    margin-top: auto;
    margin-left: auto;
    position: relative;
    right: -32px;
    bottom: -38px;
  }

  &_macbook-frame {
    width: 1441px;
    height: 790px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &_image {
    position: relative;
    right: -34px;
    bottom: -59px;
    border-radius: 4px;
  }

  @media screen and (max-width: 840px) {
    @include grid(repeat(1, 1fr), auto, 0, 0);

    &_left-column {
      margin-bottom: 300px;
    }

    &_right-column {
      width: 100%;
      position: absolute;
      right: -32px;
      bottom: -90px;
    }
  }

  @media screen and (max-width: 768px) {
    :deep(.case_card-content_paragraph.case_paragraph) {
      margin-bottom: 24px;
    }
  }
}
</style>

<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="card-content">
    <h3 class="card-content_title case_title_h5">
      Delivery service Nambafood
    </h3>
    <LazyCaseStudiesUITextParagraph class="card-content_paragraph m-24_bottom">
      For 5 years Namba Food actively evolves and monthly improves opportunities of software.
    </LazyCaseStudiesUITextParagraph>
    <div class="card-content_rows-wrap">
      <div class="card-content_row m-24_bottom">
        <LazyCaseStudiesUITextParagraph class="card-content_paragraph card-content_paragraph--bold">
          Yearly increase in orders:
        </LazyCaseStudiesUITextParagraph>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/yearly-increase.svg`)"
          width="191"
          height="120"
          alt="Yearly increase"
          class="card-content_chart card-content_yearly-increase"
        >
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/yearly-increase--mobile.svg`)"
          width="332"
          height="120"
          alt="Yearly increase"
          class="card-content_chart card-content_yearly-increase--mobile"
        >
      </div>
      <div class="card-content_row">
        <LazyCaseStudiesUITextParagraph class="card-content_paragraph card-content_paragraph--bold">
          Increase in sales:
        </LazyCaseStudiesUITextParagraph>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/increase-in-sales.svg`)"
          width="191"
          height="120"
          alt="Increase in sales"
          class="card-content_chart card-content_increase-in-sales"
        >
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/increase-in-sales--mobile.svg`)"
          alt="Increase in sales"
          width="332"
          height="120"
          class="card-content_chart card-content_increase-in-sales--mobile"
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-content {
  &_title {
    margin-bottom: 4px;
    color: $text-color--black-lighter;
  }

  :deep(.card-content_paragraph.case_paragraph) {
    @include default-text($text-color--black-lighter, 13px, 166%, -0.02em, normal);

    .card-content_paragraph--bold {
      margin-bottom: 10px;
      font-weight: 600;
    }
  }

  &_chart {
    width: 100%;
    height: 120px;
  }

  &_yearly-increase {
    &--mobile {
      display: none;
    }
  }

  &_increase-in-sales {
    &--mobile {
      display: none;
    }
  }

  @media screen and (max-width: 940px) {
    &_rows-wrap {
      @include grid(repeat(2, 215px), auto, 25px, 0);
      justify-content: space-between;
    }

    &_yearly-increase,
    &_increase-in-sales {
      background-position: left;
    }
  }

  @media screen and (max-width: 768px) {
    &_paragraph {
      @include default-text($text-color--black-lighter, 16px, 150%, -0.02em, normal);

      &--bold {
        @include default-text($text-color--black-lighter, 13px, 166%, -0.02em, bold);
      }
    }
  }

  @media screen and (max-width: 675px) {
    &_rows-wrap {
      @include grid(repeat(2, 1fr), auto, 25px, 0);
    }
  }

  @media screen and (max-width: 470px) {
    &_rows-wrap {
      @include grid(repeat(1, 1fr), auto, 0, 0);
    }

    &_yearly-increase {
      display: none;

      &--mobile {
        display: block;
      }
    }

    &_increase-in-sales {
      display: none;

      &--mobile {
        display: block;
      }
    }

    &_yearly-increase,
    &_increase-in-sales {
      max-width: 287px;
      background-position: left;
    }
  }
}
</style>

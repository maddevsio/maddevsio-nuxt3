<template>
  <div class="card-content">
    <h3 class="card-content_title case_title_h5">
      Restaurant Talisman
    </h3>
    <LazyCaseStudiesUITextParagraph class="card-content_paragraph">
      Restaurant Talisman successfully develops in market of Bishkek city. In 2018, directorship of the restaurant
      decided to actively promote in delivery.
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUITextParagraph class="card-content_paragraph m-24_top m-24_bottom media-m-48_top">
      By using NambaFood software only in a month, they got positive growth.
    </LazyCaseStudiesUITextParagraph>
    <div class="card-content_statistics">
      <div class="card-content_statistics-item">
        <LazyCaseStudiesUITextParagraph class="card-content_paragraph card-content_statistics-heading">
          IT expenses
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_statistics-number">
          0<span>$</span>
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_statistics-item">
        <LazyCaseStudiesUITextParagraph
          class="card-content_paragraph card-content_statistics-heading card-content_statistics-heading-increase-sales"
        >
          Increase in <br>
          sales
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_statistics-number">
          +236<span>%</span>
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_statistics-item">
        <LazyCaseStudiesUITextParagraph class="card-content_paragraph card-content_statistics-heading">
          Increase in <br>
          amount of orders
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_statistics-number">
          +142<span>%</span>
        </LazyCaseStudiesUITextParagraph>
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
  }

  &_statistics-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;

    &:nth-child(1) {
      padding-top: 0;
    }

    &:nth-child(2) {
      border-top: 1px solid $border-color--grey-cases;
      border-bottom: 1px solid $border-color--grey-cases;
    }

    &:nth-child(3) {
      padding-bottom: 0;
    }
  }

  :deep(.card-content_statistics-number.case_paragraph) {
    @include title($text-color--black-lighter, 21.25px, -0.02em);

    span {
      @include default-text($text-color--black-lighter, 17px, 28.22px, -0.035em, normal);
    }
  }

  @media screen and (max-width: 768px) {
    :deep(.card-content_paragraph.case_paragraph) {
      @include default-text($text-color--black-lighter, 16px, 150%, -0.02em, normal);
    }

    :deep(.card-content_statistics-heading.case_paragraph) {
      @include default-text($text-color--black-lighter, 13px, 166%, -0.02em, normal);

      br {
        display: none;
      }
    }
  }

  @media screen and (max-width: 325px) {
    :deep(.card-content_statistics-heading.case_paragraph) {
      br {
        display: block;
      }
    }

    :deep(.card-content_statistics-heading-increase-sales.case_paragraph) {
      br {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="card-content">
    <div class="card-content_card-description">
      <div class="card-content_description-item card-content_description-item-motorbike">
        <h3 class="case_title_h4 card-content_description-title">
          Motorbike
        </h3>
        <LazyCaseStudiesUITextParagraph
          class="card-content_paragraph"
        >
          They are fast and affordable, but they are not always convenient for white-collar workers wearing suits to
          the office, especially on rainy days.
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_description-item">
        <h3 class="case_title_h4 card-content_description-title">
          Taxi
        </h3>
        <LazyCaseStudiesUITextParagraph
          class="card-content_paragraph"
        >
          Taxis are safer and more comfortable, but less accessible because they cost much more.
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
    <div class="card-content_prices">
      <h4 class="card-content_prices-title">
        $300<span>/ month</span>
      </h4>
      <div class="card-content_price-item">
        <LazyCaseStudiesUITextParagraph class="card-content_price-heading">
          The basic fee
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_price-number">
          $0.51
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_price-item">
        <LazyCaseStudiesUITextParagraph class="card-content_price-heading">
          The kilometer price
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_price-number">
          $0.56
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_price-item">
        <LazyCaseStudiesUITextParagraph class="card-content_price-heading">
          Average kilometers
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_price-number">
          ~ 10
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-content {
  display: flex;
  justify-content: space-between;

  &_description-title {
    margin-bottom: 7px;
  }

  &_prices-title {
    @include font('Poppins', 80px, 600);
    line-height: 80px;
    letter-spacing: -2px;
    margin-bottom: 22px;

    span {
      @include font('Inter', 19px, 400);
      line-height: 26px;
      letter-spacing: -1px;
    }
  }

  &_card-description {
    max-width: 401.45px;
    padding-right: 40px;
  }

  &_prices {
    width: 273px;
  }

  &_description-item-motorbike {
    margin-bottom: 24px;
  }

  &_price-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(3) {
      border-top: 1px solid $border-color--grey-02-opacity;
      border-bottom: 1px solid $border-color--grey-02-opacity;
    }
  }

  &_price-heading,
  &_price-number {
    @include default-text($text-color--grey-pale, 15px, 44.25px, -0.035em, normal);
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;

    &_card-description {
      max-width: 100%;
      padding-right: 0;
      padding-bottom: 29px;
    }

    &_prices {
      width: 100%;
    }
  }

  @media screen and (max-width: 375px) {
    &_price-item {
      &:nth-child(3) {
        border-top: 0;
        border-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 360px) {
    &_prices-title {
      font-size: 70px;
      line-height: 70px;
      letter-spacing: -1px;

      span {
        font-size: 15px;
        line-height: 21px;
      }
    }
  }
}
</style>

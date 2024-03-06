<template>
  <div class="card-content">
    <div class="card-content_card-description">
      <div class="card-content_description-item">
        <h3 class="case_title_h4 card-content_description-title">
          Solution: GoDee
        </h3>
        <LazyCaseStudiesUITextParagraph class="card-content_paragraph card-content_paragraph-first">
          GoDee’s founders decided to make buses smarter and more user-friendly. They tackled the problem by converting
          traditional buses into a modern service provider offering a convenient and predictable ride that’s just one
          click away.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_paragraph">
          An innovative transportation solution that improves commuters’ daily lives, reduces environmental pollution
          and provides affordable commutes and stress-free service.
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
    <div class="card-content_prices">
      <h4 class="card-content_prices-title">
        $65<span>/ month</span>
      </h4>
      <div class="card-content_price-item">
        <LazyCaseStudiesUITextParagraph class="card-content_price-heading">
          One trip
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_price-number">
          $1.29
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_price-item">
        <LazyCaseStudiesUITextParagraph class="card-content_price-heading">
          Trips a day
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_price-number">
          2
        </LazyCaseStudiesUITextParagraph>
      </div>
      <div class="card-content_price-item">
        <LazyCaseStudiesUITextParagraph class="card-content_price-heading">
          Days a month
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="card-content_price-number">
          ~ 25
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

  &_description-title,
  &_prices-title,
  &_paragraph {
    color: $text-color--white-primary;
  }

  &_prices-title {
    @include font('Poppins', 80px, 600);
    line-height: 80px;
    letter-spacing: -2px;
    margin-bottom: 55px;

    span {
      @include font('Inter', 19px, 400);
      line-height: 26px;
      letter-spacing: -1px;
    }
  }

  &_paragraph-first {
    margin-bottom: 33px;
  }

  &_card-description {
    max-width: 401.45px;
    padding-right: 40px;
  }

  &_prices {
    width: 273px;
  }

  &_price-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(3) {
      border-top: 1px solid $border-color--white-02-opacity;
      border-bottom: 1px solid $border-color--white-02-opacity;
    }
  }

  &_price-heading,
  &_price-number {
    @include default-text($text-color--white-primary, 15px, 44.25px, -0.035em, normal);
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

    &_prices-title {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    &_paragraph-first {
      margin-bottom: 13px;
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

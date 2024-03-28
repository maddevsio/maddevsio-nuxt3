<template>
  <div class="card-content">
    <div class="card-content_number-block">
      <p class="card-content_title">
        60
      </p>
      <LazyCaseStudiesUITextParagraph color="#ffffff">
        Total routes
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="card-content_number-block">
      <p class="card-content_title">
        30
      </p>
      <LazyCaseStudiesUITextParagraph color="#ffffff">
        Active routes
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="card-content_number-block">
      <p class="card-content_title">
        25K
      </p>
      <LazyCaseStudiesUITextParagraph color="#ffffff">
        Passengers per month
      </LazyCaseStudiesUITextParagraph>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-content {
  display: flex;
  justify-content: space-between;

  &_number-block {
    width: 100%;
    max-width: 193px;
    text-align: center;

    &:first-child {
      padding-right: 43px;
      border-right: 1px solid $border-color--white-03-opacity;
    }

    &:last-child {
      padding-left: 43px;
      border-left: 1px solid $border-color--white-03-opacity;
    }

    @media screen and (max-width: 1440px) {
      &:first-child {
        padding-right: 4.1vw;
      }

      &:last-child {
        padding-left: 4.4vw;
      }
    }
  }

  &_title {
    @include font('Poppins', 87px, 600);
    line-height: 104%;
    letter-spacing: -0.02em;
    color: $text-color--white-primary;
  }

  @media screen and (max-width: 920px) {
    &_number-block {
      &:first-child {
        padding-right: 2.3vw;
      }

      &:last-child {
        padding-left: 4vw;
      }
    }
  }

  @media screen and (max-width: 870px) {
    &_number-block {
      &:first-child {
        padding-right: 0.3vw;
      }

      &:last-child {
        padding-left: 2.3vw;
      }
    }
  }

  @media screen and (max-width: 820px) {
    &_number-block {
      &:first-child,
      &:last-child {
        padding: 0;
        border: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 17px;
    flex-direction: column;
    align-items: center;

    &_number-block {
      margin-bottom: 70px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &_title {
      font-size: 96px;
      letter-spacing: -1px;
    }
  }
}
</style>

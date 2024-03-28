<template>
  <div class="benefits container">
    <!-- Item 1 -->
    <div class="benefits_benefit benefits_benefit-1">
      <h2 class="benefits_title">
        Sustainable engineering culture
      </h2>
      <p
        class="benefits_description"
      >
        At Mad Devs, we build an environment where teams can move sustainably and quickly by
        implementing <span
          class="yellow"
        >
          modern technologies and best practices.
        </span>
      </p>
      <div class="benefits_list">
        <p>
          Code reviews and testing, Automated CI/CD, Healthy oncall, Internal boilerplates and open-source,
          Regularly updated and reliable documentation.
        </p>
      </div>
    </div>
    <!-- END Item -->

    <!-- Item 2 -->
    <div class="benefits_benefit benefits_benefit-2">
      <h2 class="benefits_title">
        Agile development
      </h2>
      <p
        class="benefits_description"
      >
        High talent density in our <br>20+ teams creates a culture where <span class="red">collaboratively innovative and autonomous people thrive.</span>
      </p>
      <div class="benefits_list">
        <p>
          Clearly explained development goals,  Engineers contribute to backlog and roadmap, Direct, cult-the bullshit,
          communication in problem-solving, Celebrating initiatives culture, Cross-functional collaboration.
        </p>
      </div>
    </div>
    <!-- END Item -->

    <!-- Item 3 -->
    <div class="benefits_benefit benefits_benefit-3">
      <h2 class="benefits_title">
        Competitive and reliable compensation
      </h2>
      <p
        class="benefits_description"
      >
        Everybody at Mad Devs, from C-suite to junior developers, <span class="green">gets paid competitive compensation in USD.</span>
      </p>
      <div class="benefits_list">
        <p>
          Stable salary and pay day, Competitive compensation, Formal employment, Flexible payment terms, Salary, benefits and bonuses paid in USD.
        </p>
      </div>
    </div>
    <!-- END Item -->
  </div>
</template>
<style lang="scss" scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 48px;
  padding-bottom: 75px;

  @media screen and (max-width: 992px) {
    grid-gap: 24px;
    padding-bottom: 55px;
  }

  &_benefit {
    display: flex;
    flex-direction: column;
    padding: 80px;
    background-color: $bgcolor--black-pale;
    border-radius: 4px;

    &-1 {
      grid-column: 1 / 3;
    }

    &-2 {
      grid-column: 3 / 5;
    }

    &-3 {
      grid-column: 1 / 5;
      text-align: center;
      justify-content: center;
      align-items: center;

      h2,
      p,
      .benefits_list {
        max-width: 650px;
      }
    }

    @media screen and (max-width: 1340px) {
      padding: 50px;
    }

    @media screen and (max-width: 1120px) {
      padding: 32px;
    }

    @media screen and (max-width: 992px) {
      grid-column: 1 / 5 !important;
      align-items: flex-start;
      text-align: left;
    }
  }

  &_title {
    margin-bottom: 40px;
    color: $text-color--white-primary;
    @include font('Inter', 56px, 700);
    letter-spacing: -0.013em;
    line-height: 60px;

    @media screen and (max-width: 1120px) {
      font-size: 38px;
      line-height: 37px;
      margin-bottom: 19px;
      letter-spacing: -0.01em;
    }

    @media screen and (max-width: 1120px) {
      font-size: 30px;
    }
  }

  &_description {
    @include font('Inter', 28px, 700);
    line-height: 38px;
    max-width: 686px;
    color: $text-color--cultured;
    letter-spacing: -0.013em;
    margin-bottom: 40px;

    :deep(.yellow) {
      color: $text-color--yellow;
    }

    :deep(.red) {
      color: $text-color--red-dark;
    }

    :deep(.green) {
      color: $text-color--green-pale;
    }

    @media screen and (max-width: 1120px) {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 19px;
    }
  }

  &_list {
    display: block;

    p {
      letter-spacing: -0.013em;
      @include font('Inter', 17px, 400);
      line-height: 180%;
      color: $text-color--grey-opacity-40-percent;

      @media screen and (max-width: 1120px) {
        font-size: 17px;
        line-height: 28px;
      }
    }
  }
}
</style>

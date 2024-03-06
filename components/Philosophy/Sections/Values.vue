<script setup lang="ts">
import { ourPhilosophyValuesData } from '~/components/Philosophy/constants/philosophyConstants'
</script>
<template>
  <section class="our-values">
    <div class="container our-values__container">
      <h3
        class="our-values__title"
      >
        Values
      </h3>
      <LazyPhilosophyUIValuesCard
        v-for="(value, i) in ourPhilosophyValuesData"
        :key="`${value}-${i}`"
        :card-value="value"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.our-values {
  background: $bgcolor--black-pale;
  padding: 120px 0 132px;

  &__title {
    @include font('Poppins', 60px, 700);
    line-height: 125%;
    color: $text-color--white;
    margin-bottom: 108px;
  }

  @media screen and (max-width: 1100px) {
    padding: 60px 0 65px;

    &__title {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 55px 0 77px;

    &__title {
      font-size: 40px;
      line-height: 130%;
    }
  }
}
</style>

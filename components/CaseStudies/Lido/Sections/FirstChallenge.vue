<script setup lang="ts">
import { liquidityPoolData } from '~/components/CaseStudies/Lido/constants/lidoConstants'
</script>
<template>
  <section class="case-lido__first-challenge m-72_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        First Challenge: Integration with the liquidity pool
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="case-lido__first-challenge-subtitle m-24_bottom"
      >
        Liquidity pool - a contract that stores tokenized liquidity attracted from users, in tokens.
        In exchange, users receive liquidity pool tokens and rewards.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        After conducting analysis and research, we determined that 1inch has a an integrated rewards manager
        to which we could connect the rewards contract. But we had to adapt it.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        The user provides Ether via
        <a
          href="https://stake.lido.fi/"
          class="case_link-in-text"
          target="_blank"
          rel="noopener"
        >
          stake.lido.fi
        </a> to the Ethereum pool, receiving an equivalent amount of stETH tokens in return.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="lido"
            file="stake-ether"
            extension="png"
            alt="Stake Ether"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-72_top media-m-48_top">
      <LazyCaseStudiesUITextParagraph>
        The user buys some amount of DAI on stocks or from exchangers (Metamask allows to do this).
        Liquidity provider selects liquidity pool for
        <a
          href="https://app.1inch.io/#/1/dao/pools"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          1inch
        </a>. In our case, it will be a pair of DAI-stETH.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="416"
            folder="lido"
            file="1inch"
            extension="png"
            alt="1inch"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-72_top media-m-48_top">
      <LazyCaseStudiesUITextParagraph>
        It then gives access to its stETH tokens. A liquid staked Ether (stETH) contact is made through DelegateProxy.
        This allows the liquidity pool contract (Mooniswap, it is unique for each pair, it will be new) to use
        the entire balance of stETH tokens belonging to the user.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="416"
            folder="lido"
            file="provide"
            extension="png"
            alt="1inch"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-72_top media-m-48_top">
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The user then transfers tokens into the liquidity pool. Mooniswap is the deposit method of the liquidity
        pool contract. This operation transfers stETH tokens from the user's balance to the liquidity pool
        contract's balance. In exchange, the liquidity pool transfers LP tokens to the user. The LP tokens contract for each liquidity pool is unique.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The user then loads his LP tokens into the
        <a
          href="https://app.1inch.io/#/1/swap/ETH/stETH"
          target="_blank"
          class="case_link-in-text"
          rel="noopener"
        >
          farming.
        </a>
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        The user can withdraw his reward for farming stETH and DAI, withdraw all uploaded tokens (Withdraw), or exit farming entirely (Exit).
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="lido"
            file="deposit"
            extension="png"
            alt="1inch"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-48_top media-m-24_top">
      <LazyCaseStudiesUITextParagraph class="m-48_bottom">
        In Withdraw method, all tokens loaded into the pool are transferred back to the user.<br>
        During co-investment, when users request a reward, LDO and 1INCH tokens are also transferred to them.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIEmbedCard
        v-bind="liquidityPoolData"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.case-lido__first-challenge {
  .case-lido__first-challenge-subtitle {
    font-weight: bold;
  }

  & .case_image-wrapper {
    border-radius: 3px;
    overflow: hidden;
  }

  & .case_image-main-image {
    border-top: 1px solid $border-color--grey-20-percent;
  }
}
</style>

<script setup>
import { reactive, ref, computed } from "vue";
import { usePaymentStore } from "../stores/payment";

const store = usePaymentStore();
</script>

<template>
  <main class="md:px-20">
    <div
      id="title-container"
      class="mb-5 flex flex-col gap-5 md:flex-row md:justify-center md:mt-14"
    >
      <h2 class="text-2xl font-semibold w-3/4 mb-2 md:hidden">
        About Big Mac Index
      </h2>

      <div
        class="w-1/2 m-auto md:h-80 md:w-auto md:order-2 flex border shadow-md"
      >
        <img src="../assets/theeconomist-bigmacindex.jpg" alt="" class="" />
      </div>

      <div class="md:w-1/2 md:order-1">
        <h2 class="text-2xl font-semibold w-3/4 hidden md:inline mb-2">
          About Big Mac Index
        </h2>

        <p class="text-md md:text-lg mt-3 md:mt-5">
          Invented by The Economist in 1986, the Big Mac Index is a lighthearted
          guide to whether currencies are at their “correct” level, based on the
          theory of purchasing-power parity (PPP).
        </p>

        <p class="text-md md:text-lg mt-3 md:mt-5">
          It measures their value against a similar basket of goods and
          services, in this case a Big Mac. Differing prices at market exchange
          rates would imply that one currency is under or overvalued.
        </p>
      </div>
    </div>

    <p class="text-xl font-semibold w-3/4 mb-2">Found this project helpful?</p>
    <a @click.prevent="store.supportDev" href="">
      <p class="text-xl font-semibold w-3/4 mb-2">Buy me a Big Mac 😉</p>
    </a>
  </main>
</template>

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

    <p class="text-md w-3/4 mb-2 mt-5 font-semibold">
      Found this project helpful?
    </p>
    <a @click.prevent="store.supportDev" href="">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        🍔 You can buy me a Big Mac
      </button>
    </a>
  </main>

  <!-- <div
    class="fb-login-button"
    data-width=""
    data-size="large"
    data-button-type="continue_with"
    data-layout="default"
    data-auto-logout-link="false"
    data-use-continue-as="false"
    scope="public_profile,email"
    onlogin="checkLoginState()"
  ></div>

  <div @click="logout">logout</div>

  <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
  </fb:login-button> -->
</template>

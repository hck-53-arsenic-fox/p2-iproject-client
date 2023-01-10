<script setup>
import { reactive, ref, computed } from "vue";
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import axios from "axios";
import { useCountryBMI } from "../stores/countryBMI";
const baseUrl = "http://localhost:3001";

const store = useCountryBMI();
store.fetchCountries();
let selectedCountry = ref("");
</script>

<template>
  <main class="md:px-20">
    <div id="title-container" class="mb-5 flex flex-col md:flex-row md:gap-2">
      <h2 class="text-2xl font-semibold">Big Mac Index</h2>
      <form>
        <div class="flex">
          <select
            @change.prevent="store.fetchByCountry(selectedCountry)"
            v-model="selectedCountry"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 mt-2 md:m-0"
          >
            <option selected disabled value="">Choose a country</option>
            <option
              v-for="country in store.state.countries"
              :key="'country-' + country.iso_a3"
              :value="country.iso_a3"
            >
              {{ country.country }}
            </option>
          </select>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2" id="grid-container">
      <h2 class="text-md font-semibold md:hidden">
        The Indonesia IDR is -54.6% undervalued against the US dollar
      </h2>

      <div class="md:order-2">
        <BarChart v-if="store.state.rawData" />
      </div>

      <div class="md:order-1 md:flex md:flex-col md:justify-evenly">
        <h2 class="text-md font-semibold hidden md:flex md:text-2xl lg:w-3/4">
          The Indonesia IDR is -54.6% undervalued against the US dollar
        </h2>

        <p class="text-md lg:w-3/4">
          A Big Mac costs 35,000 rupiah in Indonesia and US$5.15 in the United
          States. The implied exchange rate is 6,796.12. The difference between
          this and the actual exchange rate, 14,977.50, suggests the Indonesian
          rupiah is 54.6% undervalued
        </p>
      </div>

      <div class="md:col-span-2 md:order-3">
        <p class="text-md font-semibold">Historical Data</p>
        <p class="text-sm">2000 - 2022</p>
        <div class="md:mt-5">
          <LineChart />
        </div>
      </div>
    </div>
  </main>
</template>

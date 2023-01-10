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

function handleFetchData(countryCode) {
  store.fetchSelectedCountryData(countryCode);
  store.fetchByCountry(countryCode);
}

const lastUpdate = computed(() => {
  return store.state.historicalDate[store.state.historicalDate.length - 1];
});

const lastBigMacUsd = computed(() => {
  return (store.state.latestData[1] / store.state.latestData[4]).toFixed(2);
});

const BMILastUpdate = computed(() => {
  if (!store.state.historicalBMI.length) return;
  const num = store.state.historicalBMI
    .at(store.state.historicalBMI.length - 1)
    .toFixed(1);
  const status = num > 0 ? "overvalued" : "undervalued";
  return `${num}% ${status}`;
});

const historicalDateRange = computed(() => {
  if (!store.state.historicalDate.length) return;
  return (
    store.state.historicalDate?.at(0).split("-")[0] +
    "-" +
    store.state.historicalDate
      ?.at(store.state.historicalDate.length - 1)
      .split("-")[0]
  );
});
</script>

<template>
  <main class="md:px-20">
    <div id="title-container" class="mb-5 flex flex-col md:flex-row md:gap-2">
      <h2 class="text-2xl font-semibold">Big Mac Index</h2>
      <form>
        <div class="flex">
          <select
            @change.prevent="handleFetchData(selectedCountry)"
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
      <h2 class="text-md font-semibold md:hidden">heheh</h2>

      <div class="md:order-2">
        <p class="text-md font-semibold hidden md:flex">
          Exchange Rate: Big Mac vs Actual
        </p>
        <p v-if="selectedCountry" class="text-sm hidden md:flex">
          {{ lastUpdate }}
        </p>
        <div class="md:mt-5">
          <BarChart
            v-if="
              store.state.bigMacExchangeRate && store.state.actualExchangeRate
            "
          />
        </div>
      </div>

      <div
        v-if="store.state.selectedCountryData"
        class="md:order-1 md:col-span-2 md:w-3/4 md:flex md:flex-col md:justify-evenly md:my-5"
      >
        <h2 class="text-md font-semibold hidden md:flex md:text-2xl">
          The {{ store.state.selectedCountryData.country }}
          {{ store.state.selectedCountryData.currency_code }} is
          {{ BMILastUpdate }} against the US dollar
        </h2>

        <p class="text-md">
          A Big Mac costs {{ store.state.selectedCountryData.currency_code }}
          {{ store.state.latestData[1] }} in
          {{ store.state.selectedCountryData.country }}
          and USD {{ lastBigMacUsd }} in the United States. The implied exchange
          rate is {{ store.state.latestData[4].toFixed(2) }}. The difference
          between this and the actual exchange rate,
          {{ store.state.latestData[2].toFixed(2) }}, suggests the
          {{ store.state.selectedCountryData.country }}
          {{ store.state.selectedCountryData.currency_code }} is
          {{ BMILastUpdate }}.
        </p>
      </div>

      <div class="md:order-3">
        <p class="text-md font-semibold">Historical Data</p>
        <p v-if="selectedCountry" class="text-sm">{{ historicalDateRange }}</p>
        <div class="md:mt-5">
          <LineChart
            v-if="
              store.state.historicalDate.length &&
              store.state.historicalBMI.length
            "
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useWorkingTimesStore } from "../stores/workingTimes";
import HorizontalBarChart from "../components/HorizontalBarChart.vue";

const store = useWorkingTimesStore();
store.fetchWorkingTimes();
store.fetchWorkingTimesByCountry("IDN");
let selectedCountry = ref("IDN");
</script>

<template>
  <main class="md:px-20">
    <div id="title-container" class="mb-5 flex flex-col md:gap-2">
      <h2 class="text-2xl font-semibold w-3/4 mb-2">
        Working times needed to buy a Big Mac
      </h2>

      <form>
        <div class="flex flex-row gap-3">
          <select
            @change.prevent="store.fetchWorkingTimesByCountry(selectedCountry)"
            v-model="selectedCountry"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 md:m-0"
          >
            <option selected disabled value="">Choose a country</option>
            <option
              v-for="country in store.state.countries"
              :value="country.countryCode"
            >
              {{ country.countryName }}
            </option>
          </select>

          <img
            :src="`https://countryflagsapi.com/svg/${selectedCountry}`"
            crossorigin="anonymous"
            class="border h-7 md:hidden my-auto"
          />
        </div>
      </form>
    </div>

    <div class="md:flex md:flex-row md:justify-center">
      <div
        id="detail-container"
        class="md:w-1/2 md:order-2 md:p-10 md:flex md:flex-col md:justify-center md:-mt-5"
      >
        <img
          :src="`https://countryflagsapi.com/svg/${selectedCountry}`"
          crossorigin="anonymous"
          class="border w-1/6 mb-2 hidden md:block"
        />

        <h2 class="text-lg font-semibold hidden md:inline md:w-3/4 md:mb-5">
          On average, people in
          <!-- <img
            :src="`https://countryflagsapi.com/svg/${selectedCountry}`"
            crossorigin="anonymous"
            class="inline h-4 border"
          /> -->
          {{ store.state.workingTimesByCountry.countryName }} need
          {{ store.state.workingTimesByCountry.minutesToBuyBigMac }} minutes of
          working times to be able to buy a Big Mac
        </h2>

        <div class="flex flex-row gap-5 md:text-md">
          <div>
            <i class="fa-solid fa-clock"></i>
            {{ store.state.workingTimesByCountry.minutesToBuyBigMac }} Minutes
          </div>
          <div>
            <i class="fa-solid fa-burger"></i>
            ${{ store.state.workingTimesByCountry.bigMacPriceUsd }}
          </div>
          <div>
            <i class="fa-solid fa-briefcase"></i> ${{
              store.state.workingTimesByCountry.avgWageUsd
            }}
            / Month
          </div>
        </div>
      </div>

      <img
        src="../assets/working.jpg"
        alt=""
        class="md:w-1/2 md:order-1 my-5 md:my-0"
      />
    </div>

    <div class="">
      <HorizontalBarChart class="" />
    </div>
  </main>
</template>

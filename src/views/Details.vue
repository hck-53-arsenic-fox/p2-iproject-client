<script setup>
import { reactive, ref, computed } from "vue";
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import axios from "axios";
const baseUrl = "http://localhost:3001";
</script>

<template>
  <h2 class="text-2xl font-semibold">Big Mac Index</h2>
  <form>
    <div class="flex">
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 mt-2"
      >
        <option selected disabled>Choose a country</option>
      </select>
    </div>
  </form>

  <br />
  <h2 class="text-md font-semibold">
    The Indonesia IDR is -54.6% undervalued against the US dollar
  </h2>

  <br />

  <BarChart />

  <br />

  <p class="text-md">
    A Big Mac costs 35,000 rupiah in Indonesia and US$5.15 in the United States.
    The implied exchange rate is 6,796.12. The difference between this and the
    actual exchange rate, 14,977.50, suggests the Indonesian rupiah is 54.6%
    undervalued
  </p>

  <br />
  <h2 class="text-md font-semibold">Historical Data</h2>
  <h2 class="text-sm">2000 - 2022</h2>
  <br />

  <LineChart />
</template>

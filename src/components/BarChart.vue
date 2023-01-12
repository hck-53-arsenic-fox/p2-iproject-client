<script setup>
import { ref, computed, reactive } from "vue";
import { useCountryBMI } from "../stores/countryBMI";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

const store = useCountryBMI();

const chartData = computed(() => {
  return {
    labels: [" Big Mac Exchange Rate", "Actual Exchange Rate"],
    datasets: [
      {
        data: [store.state.bigMacExchangeRate, store.state.actualExchangeRate],
        backgroundColor: ["#FB923C", "#D3D3D3"],
      },
    ],
  };
});

const chartOptions = computed(() => {
  return {
    responsive: true,
  };
});
</script>

<template>
  <Bar
    class="w-full"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

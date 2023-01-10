<script setup>
import { Line } from "vue-chartjs";
import { useCountryBMI } from "../stores/countryBMI";
import { ref, computed, reactive } from "vue";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const store = useCountryBMI();

const chartData = computed(() => {
  return {
    labels: store.state.historicalDate,
    datasets: [
      {
        data: store.state.historicalBMI,
        backgroundColor: ["#FB923C"],
      },
    ],
  };
});

const chartOptions = computed(() => {
  return {
    responsive: true,
    tension: 0.3,
    pointRadius: 3,
    pointHoverRadius: 6,
    scales: {
      y: {
        suggestedMax: 0,
      },
    },
  };
});
</script>

<template>
  <Line
    class="w-full"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

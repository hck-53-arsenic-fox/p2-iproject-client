<script setup>
import { ref, computed, reactive } from "vue";
import { useWorkingTimesStore } from "../stores/workingTimes";
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

const store = useWorkingTimesStore();

const chartData = computed(() => {
  return {
    labels: store.state.chartLabel,
    datasets: [
      {
        data: store.state.chartData,
        backgroundColor: store.state.backgroundColor,
      },
    ],
  };
});

const chartOptions = computed(() => {
  return {
    responsive: true,
    indexAxis: "y",
    height: 2000,
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

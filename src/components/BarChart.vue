<script>
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

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [" Big Mac Exchange Rate", "Actual Exchange Rate"],
        datasets: [
          {
            data: [14977.5, 6796.12],
            backgroundColor: ["#FB923C", "#808080"],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        // scales: {
        //   y: {
        //     suggestedMin: -100,
        //     suggestedMax: 100,
        //   },
        // },
      },
    };
  },
};
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

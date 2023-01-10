<script>
import { Line } from "vue-chartjs";
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

export default {
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ["2022-07-31", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [-40, -20, -12, -40, -20, -12],
            backgroundColor: "#FB923C",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            suggestedMin: -60,
            suggestedMax: 60,
          },
        },
      },
    };
  },
};
</script>

<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

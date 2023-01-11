import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const useWorkingTimesStore = defineStore("workingTimes", () => {
  const state = reactive({
    workingTimesByCountry: {},
    workingTimes: [],
    chartLabel: [],
    chartData: [],
  });

  async function fetchWorkingTimesByCountry(countryCode) {
    try {
      const { data } = await axios.get(
        `${baseUrl}/working-times/${countryCode}`
      );
      state.workingTimesByCountry = data;
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchWorkingTimes() {
    try {
      const { data } = await axios.get(`${baseUrl}/working-times`);
      state.workingTimes = data;

      const chartLabelData = data
        .map((el) => {
          return {
            countryName: el.countryName,
            minutesToBuyBigMac: el.minutesToBuyBigMac,
          };
        })
        .sort((a, b) => b.minutesToBuyBigMac - a.minutesToBuyBigMac);

      console.log(chartLabelData);

      state.chartLabel = chartLabelData.map((el) => el.countryName);
      state.chartData = chartLabelData.map((el) => el.minutesToBuyBigMac);
    } catch (error) {
      console.log(error);
    }
  }

  return { state, fetchWorkingTimes, fetchWorkingTimesByCountry };
});

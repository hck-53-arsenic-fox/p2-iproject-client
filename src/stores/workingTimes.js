import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// const baseUrl = "http://localhost:3001";
const baseUrl = "https://burgernomics-production.up.railway.app";

export const useWorkingTimesStore = defineStore("workingTimes", () => {
  const state = reactive({
    countries: [],
    workingTimesByCountry: {},
    workingTimes: [],
    chartLabel: [],
    chartData: [],
    backgroundColor: [],
  });

  async function fetchWorkingTimesByCountry(countryCode) {
    try {
      const { data } = await axios.get(
        `${baseUrl}/working-times/${countryCode}`
      );
      state.workingTimesByCountry = data;
      const index = state.chartLabel.findIndex((el) => el === data.countryName);

      state.backgroundColor = [];

      state.countries.forEach((el) => {
        state.backgroundColor.push("#D3D3D3");
      });

      state.backgroundColor[index] = "#FB923C";
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchWorkingTimes() {
    try {
      const { data } = await axios.get(`${baseUrl}/working-times`);
      state.workingTimes = data;

      state.countries = data.map((el) => {
        return {
          countryCode: el.countryCode,
          countryName: el.countryName,
        };
      });

      const chartLabelData = data
        .map((el) => {
          return {
            countryName: el.countryName,
            minutesToBuyBigMac: el.minutesToBuyBigMac,
          };
        })
        .sort((a, b) => b.minutesToBuyBigMac - a.minutesToBuyBigMac);

      state.chartLabel = chartLabelData.map((el) => el.countryName);
      state.chartData = chartLabelData.map((el) => el.minutesToBuyBigMac);
    } catch (error) {
      console.log(error);
    }
  }

  return { state, fetchWorkingTimes, fetchWorkingTimesByCountry };
});

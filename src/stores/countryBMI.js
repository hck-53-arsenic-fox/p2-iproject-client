import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const useCountryBMI = defineStore("countryBMI", () => {
  const state = reactive({
    countries: [],
    selectedCountryData: "",
    latestData: "",
    bigMacExchangeRate: "",
    actualExchangeRate: "",
    historicalDate: [],
    historicalBMI: [],
  });

  async function fetchCountries() {
    try {
      const { data } = await axios.get(`${baseUrl}/countries`);
      state.countries = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchSelectedCountryData(countryCode) {
    try {
      const { data } = await axios.get(`${baseUrl}/countries/${countryCode}`);
      state.selectedCountryData = data;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchByCountry(countryCode) {
    try {
      const { data } = await axios.get(
        `${baseUrl}/big-mac-indexes/${countryCode}`
      );
      state.bigMacExchangeRate = data.dataset.data[0][2];
      state.actualExchangeRate = data.dataset.data[0][4];
      state.historicalDate = data.dataset.data.map((el) => el[0]).reverse();
      state.historicalBMI = data.dataset.data.map((el) => el[5]).reverse();
      state.latestData = data.dataset.data[0];
    } catch (error) {
      console.log(error);
    }
  }

  return { state, fetchCountries, fetchByCountry, fetchSelectedCountryData };
});

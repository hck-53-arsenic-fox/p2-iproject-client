import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const useCountryBMI = defineStore("countryBMI", () => {
  const state = reactive({
    countries: [],
    rawData: "",
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

  async function fetchByCountry(countryCode) {
    try {
      const { data } = await axios.get(
        `${baseUrl}/big-mac-indexes/${countryCode}`
      );
      state.rawData = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return { state, fetchCountries, fetchByCountry };
});

import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    games: [],
    page_size: 4,
    count: 0,
  }),
  getters: {
    // showMore: (state) => state.page_size + 4,
  },
  actions: {
    async fetchGames(search) {
      try {
        const { data } = await axios({
          method: "GET",
          url: baseUrl + "/games",
          params: {
            page_size: this.page_size,
            search,
          },
        });
        this.games = data.results;
        this.count = data.count;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },

    async buyGame(slug) {
      try {
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  },
});

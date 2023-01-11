import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    games: [],
    page_size: 4,
    count: 0,
    isLogin: false,
  }),
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
        const { data } = await axios({
          method: "POST",
          url: baseUrl + "/games/" + slug,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },

    async handleLogin(user) {
      try {
        const { data } = await axios({
          url: baseUrl + "/login",
          method: "POST",
          data: user,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push({ name: "home" });
        this.isLogin = true;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async handleRegister(user) {
      try {
        const { data } = await axios({
          url: baseUrl + "/register",
          method: "POST",
          data: user,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push({ name: "home" });
        this.isLogin = true;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async googleLogin(response) {
      try {
        const { data } = await axios({
          url: baseUrl + "/google-login",
          method: "POST",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push({ name: "home" });
        this.isLogin = true;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    logout() {
      localStorage.clear();
      this.router.push({ name: "login" });
      this.isLogin = false;
    },
  },
});

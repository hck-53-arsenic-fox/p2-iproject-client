import { defineStore } from "pinia";
import router from "../router";
import Axios from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
      isShop: false,
      isLogin: false,
      exhibitions: [],
      artworks: {
        data: [],
      },
      isTour: false,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      router.push("/login");
    },
    // toShop() {
    //   this.is;
    // },
    async buyEvent(eventId) {
      try {
        const data = await Axios.post(
          `https://useum.up.railway.app/transaction/${eventId}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (error) {
        Report.failure(
          "Notiflix Failure",
          `${error.response.data.msg}`,
          "Okay"
        );
      }
    },
    switchPage(path) {
      window.location = path;
    },
    toTour() {
      this.isTour = true;
    },
    async login(user) {
      try {
        const { data } = await Axios.post(
          "https://useum.up.railway.app/login",
          user
        );
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        router.push({ path: "/" });
        this.isLogin = true;
      } catch (error) {
        Report.failure(
          "Notiflix Failure",
          `${error.response.data.msg}`,
          "Okay"
        );
      }
    },
    async register(user) {
      try {
        const { data } = await Axios.post(
          "https://useum.up.railway.app/register",
          user
        );
        router.push({ path: "/login" });
      } catch (error) {
        Report.failure(
          "Notiflix Failure",
          `${error.response.data.msg}`,
          "Okay"
        );
      }
    },
    googleLogin(res) {
      Axios({
        method: "POST",
        url: "https://useum.up.railway.app/google",
        headers: {
          google_token: res,
        },
      })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
          this.isLogin = true;
          router.push({ path: "/" });
        })
        .catch((err) => {
          Report.failure(
            "Notiflix Failure",
            `${err.response.data.msg}`,
            "Okay"
          );
        });
    },
    async fetchExhibitions() {
      try {
        const { data } = await Axios.get(
          "https://useum.up.railway.app/exhibitions",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.exhibitions = data;
      } catch (error) {
        Report.failure(
          "Notiflix Failure",
          `${error.response.data.msg}`,
          "Okay"
        );
      }
    },
    async fetchArtworks() {
      try {
        const { data } = await Axios.get(
          "https://useum.up.railway.app/artworks",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.artworks = data;
      } catch (error) {
        Report.failure(
          "Notiflix Failure",
          `${error.response.data.msg}`,
          "Okay"
        );
      }
    },
    async payTour(id) {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await Axios.post(
          `https://useum.up.railway.app/generate-midtrans-token/${id}`,
          {},
          {
            headers: {
              access_token,
            },
          }
        );
        const buyTicket = this.buyEvent;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            buyTicket(id);
          },
        });
      } catch (error) {
        Report.failure(
          "Notiflix Failure",
          `${error.response.data.msg}`,
          "Okay"
        );
      }
    },
  },
});

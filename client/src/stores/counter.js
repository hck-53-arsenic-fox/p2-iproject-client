import { defineStore } from "pinia";
import router from "../router";
import Axios from "axios";

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
          `http://localhost:4444/transaction/${eventId}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log("berhasil membeli tiket event");
      } catch (error) {
        console.log(error);
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
        const { data } = await Axios.post("http://localhost:4444/login", user);
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        router.push({ path: "/" });
        this.isLogin = true;
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async register(user) {
      try {
        const { data } = await Axios.post(
          "http://localhost:4444/register",
          user
        );
        router.push({ path: "/login" });
      } catch (error) {
        console.log(error.response.data);
      }
    },
    googleLogin(res) {
      Axios({
        method: "POST",
        url: "http://localhost:4444/google",
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
          console.log(err);
        });
    },
    async fetchExhibitions() {
      try {
        const { data } = await Axios.get("http://localhost:4444/exhibitions", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.exhibitions = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchArtworks() {
      try {
        const { data } = await Axios.get("http://localhost:4444/artworks", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.artworks = data;
      } catch (error) {
        console.log(error);
      }
    },
    async payTour(id) {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await Axios.post(
          `http://localhost:4444/generate-midtrans-token/${id}`,
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
        console.log(error);
      }
    },
  },
});

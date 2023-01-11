import { defineStore } from "pinia";
import router from "../router";
import Axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
      isShop: true,
      isLogin: false,
      exhibitions: [],
      artworks: {},
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    logout() {
      localStorage.clear();
      router.push("/login");
    },
    // ExitTour() {
    //   router;
    // },
    async login(user) {
      try {
        const { data } = await Axios.post("http://localhost:4444/login", user);
        localStorage.setItem("access_token", data.access_token);
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
          router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchExhibitions() {
      try {
        const { data } = await Axios.get("http://localhost:4444/exhibitions");
        this.exhibitions = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchArtworks() {
      try {
        const { data } = await Axios.get("http://localhost:4444/artworks");
        this.artworks = data;
      } catch (error) {
        console.log(error);
      }
    },
    async payTour() {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await Axios.post(
          "http://localhost:4444/generate-midtrans-token",
          {},
          {
            headers: {
              access_token,
            },
          }
        );
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            // alert("payment success!");
            console.log(result);
          },
        });
      } catch (error) {}
    },
  },
});

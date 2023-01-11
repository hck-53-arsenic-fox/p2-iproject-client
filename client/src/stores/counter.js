import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000/customer";
export const useCounterStore = defineStore("counter", {
  state() {
    return {
      products: [],
      product: {},
      isLogin: false,
      username: "",
      province: [],
      city: [],
      cost: {},
    };
  },
  actions: {
    async register(user) {
      try {
        await axios({
          method: "post",
          url: baseUrl + "/register",
          data: user,
        });
        this.router.push("/login");
        Swal.fire({
          title: "Register Berhasil",
        });
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async login(user) {
      try {
        const { data } = await axios({
          method: "post",
          url: baseUrl + "/login",
          data: user,
        });
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);
        this.username = localStorage.getItem("userName");
        this.isLogin = true;
        this.router.push("/");
        // console.log("berhasil login");
        Swal.fire({
          title: "Login Berhasil",
        });
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchProducts() {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl,
        });
        this.products = data;
        console.log(data);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchProductId(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "/detail/" + id,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.product = data;
        // console.log(this.oneNews);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async getProvince() {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "/province",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.province = data.data;
        // console.log(data.data);
      } catch (error) {
        console.log(error);
        // Swal.fire(error.response.data.message);
      }
    },
    async getCity(provinceId) {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "/city/" + provinceId,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data.data);
        this.city = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getCost(cityId) {
      console.log(cityId);
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "/cost?destination=" + cityId,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.cost = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

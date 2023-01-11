import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000/customer";
export const useCounterStore = defineStore("counter", {
  state() {
    return {
      isLogin: false,
      username: "",
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
  },
});

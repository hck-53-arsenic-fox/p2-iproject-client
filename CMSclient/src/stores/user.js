import { defineStore } from "pinia";
import axios from "axios";
const server = "http://localhost:3000/";

export const useUserStore = defineStore("user", {
  state() {
    if (localStorage.getItem("user"))
      return JSON.parse(localStorage.getItem("user"));
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      isLogin: true,
    };
  },
  actions: {
    async register(dataRegis) {
      try {
        await axios({
          method: "POST",
          url: server + "customers/register",
          data: {
            username: dataRegis.username,
            email: dataRegis.email,
            password: dataRegis.password,
            phoneNumber: dataRegis.phoneNumber,
            address: dataRegis.address,
          },
        });
        Swal.fire("Great!", "Success create a new account", "success");
        this.router.push("/");
        (this.email = ""),
          (this.password = ""),
          (this.phoneNumber = ""),
          (this.address = "");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`
        });
      }
    },
  },
});

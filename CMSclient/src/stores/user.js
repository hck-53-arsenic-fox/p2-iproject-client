import { defineStore } from "pinia";
import axios from "axios";
const server = "https://cleanmyshoes-server.ibnusyadzali.com/";

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
      role: "",
      isLogin: false,
    };
  },
  actions: {
    async register(dataRegis) {
      try {
        await axios({
          method: "POST",
          url: server + "users/register",
          data: {
            username: dataRegis.username,
            email: dataRegis.email,
            password: dataRegis.password,
            phoneNumber: dataRegis.phoneNumber,
            address: dataRegis.address,
          },
        });
        Swal.fire("Great!", "Success create a new account", "success");
        this.router.push("/login");
        (this.email = ""),
          (this.password = ""),
          (this.phoneNumber = ""),
          (this.address = "");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async login(dataLogin) {
      try {
        const { data } = await axios({
          method: "POST",
          url: server + "users/login",
          data: {
            email: dataLogin.email,
            password: dataLogin.password,
          },
        });
        this.username = data.username;
        this.isLogin = true;
        this.role = data.role;
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        this.password = "";
        this.email = "";
        Swal.fire({
          title: `Welcome on board ${data.username}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async logout() {
      try {
        Swal.fire({
          title: `Bey bye~ ${this.username}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        localStorage.clear();
        this.username = "";
        this.role = "";
        this.email = "";
        this.password = "";
        this.isLogin = false;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async googleLogin(token) {
      try {
        const { data } = await axios({
          url: server + "users/login/google",
          method: "POST",
          headers: {
            googleToken: token.credential,
          },
        });
        this.username = data.username;
        this.isLogin = true
        this.role = data.role
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        this.password = ""
        this.email = ""
        Swal.fire({
          title: `Welcome on board ${data.username}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          }
        })
        this.router.push("/")
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    }
  }
});

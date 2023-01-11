import { defineStore } from "pinia";
import axios from 'axios';
import swal from "sweetalert2";

const mainUrl = "http://localhost:3000"

export const useHawaStore = defineStore("hawa", {
  state: () => ({
    register: {
      email: '',
      password: '',
    },
  }),

  actions: {
    async navigatePage(toPage) {
      await this.router.push(toPage)
    },

    async handleRegister(input) {
      await axios({
        method: "POST",
        url: mainUrl + "/register",
        data: input,
      })
        .then((result) => {          
          swal.fire({
            title: `Akun Berhasil dibuat`,
            icon: "success",
            confirmButtonColor: "#fa98d0",
          });
          this.register = {
            email: '',
            password: '',
          }
          this.router.push('/login')
        })
        .catch((err) => {
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    
    async handleLogin(input) {
      await axios({
        method: "POST",
        url: mainUrl + "/login",
        data: input,
      })
        .then((result) => {
          
          swal.fire({
            title: `Welcome!`,
            confirmButtonColor: "#fa98d0",
          });
          localStorage.setItem("access_token", result.data.access_token);
          localStorage.setItem("email", result.data.email);
          localStorage.setItem("role", result.data.role);
          this.access_token = result.data.access_token;
          this.login.email = result.data.email;
          this.login.password = "";
          this.router.push('/')
        })
        .catch((err) => {
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    async googleLogin(credential) {
      await axios({
        method: "POST",
        url: mainUrl + "/google-sign-in",
        headers: {
          google_auth_token: credential
        }
      }).then((result) => {
        swal.fire({
          title: `Welcome!`,
          confirmButtonColor: "#fa98d0",
        });
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("role", result.data.role);
        this.access_token = result.data.access_token;
        this.login.email = result.data.email;
        this.router.push('/')
      })
      .catch((err) => {
        swal.fire({
          title: `${err.response.data.message}`,
          icon: "error",
          confirmButtonColor: "#fa98d0",
        });
      });
    },

  },
});

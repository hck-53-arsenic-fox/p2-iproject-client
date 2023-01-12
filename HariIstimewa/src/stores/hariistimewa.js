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
    dataInvitation: [],
    listLagu: []
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
          this.email = result.data.email;
          this.password = "";
console.log('berhasil');
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
        this.email = result.data.email;
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

    
    async fenchInvitaion(id) {
      await axios({
        method: "GET",
        url: mainUrl + `/invitations/${id}`,
      })
        .then(({data}) => {
          this.dataInvitation = data;

        })
        .catch((err) => {
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    
    async listMusic() {
      try {
        let { data } = await axios({
          method: "GET",
          url: mainUrl + `/musics`,
        })

        this.listLagu = data;
      } catch (error) {
        swal.fire({
            title: `${error.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
      }
    },

    async addInvitation(input) {
      await axios({
        method: "POST",
        url: mainUrl + "/invitations",
        headers: {
          access_token: localStorage.access_token
        },
        data: input,
      })
        .then((result) => {          
          swal.fire({
            title: `Undangan Berhasil dibuat`,
            icon: "success",
            confirmButtonColor: "#fa98d0",
          });
          this.router.push('/dashboard')
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

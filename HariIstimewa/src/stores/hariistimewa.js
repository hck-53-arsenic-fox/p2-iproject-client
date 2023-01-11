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
            confirmButtonColor: "#3085d6",
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
            confirmButtonColor: "#3085d6",
          });
        });
    },


  },
});

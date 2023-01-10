import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = "http://localhost:3000";
export const useCounterStore = defineStore('counter', {
  state: ()=>({
    isLogin : false,
    room : [],
    detailRoom : {}
  }),
  actions: {
    // REGISTER
    handleRegister(register) {
      axios({
        method: "post",
        url: `${BASE_URL}/register`,
        data: register,
      })
        .then((res) => {
          this.router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // LOGIN
    handleLogin(input) {
      axios({
        method: "post",
        url: `${BASE_URL}/login`,
        data: input,
      })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.router.push("/");
          this.isLogin = true;
        })
        .catch((err) => {
         console.log(err);
        });
    },

    // FETCH DATA ROOM
    fetchDataRoom() {
      axios({
        method: "get",
        url: `${BASE_URL}/room`,
      })
        .then((res) => {
          this.room = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // ROOM DETAIL BY ID
    handleDetailRoomById(id) {
      axios({
        method: "get",
        url: `${BASE_URL}/room/${id}`,
      })
        .then((res) => {
          this.detailRoom = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // LOGOUT 
    handleLogOut() {
      localStorage.clear();
      this.router.push("/");
      this.isLogin = false;
    },
  }

})

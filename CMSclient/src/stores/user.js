import { defineStore } from "pinia";
import axios from "axios";
const server = "http://localhost:3000/";

export const useUserStore = defineStore("user", {
  state() {
    if (localStorage.getItem("user"))
      return JSON.parse(localStorage.getItem("user"));
    return {
      username: "",
      isLogin: true,
          };
  },
  actions: {

  },
});

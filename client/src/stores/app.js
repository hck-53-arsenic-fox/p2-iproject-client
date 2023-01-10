import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useAppStore = defineStore("app", {
  state: () => ({
    isLoggedIn: false,
    transactions: [],
    wallets: [],
  }),
  actions: {
    checkAuth() {
      this.isLoggedIn = !!localStorage.getItem("access_token");
    },
  }
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const undeployed = "http://localhost:3000";

export const useGenshinStore = defineStore("Genshin Impact", {
  state() {
    return {
      token: "",
    };
  },

  actions: {
    async register(email, password) {
      try {
        let { data } = await axios({
          method: "POST",
          url: undeployed + "/register",
          data: { email, password },
        });
        // SUCCESS >> REDIRECT TO LOGIN
        Swal.fire({
          icon: "success",
          title: "Register Successful",
          text: "Your account is now Active!",
        });
        this.router.push({ path: "/login" });
      } catch (error) {
        let showErr = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "An Error has Occurred",
          text: showErr,
        });
      }
    },

    async login(email, password) {
      try {
        let { data } = await axios({
          method: "POST",
          url: undeployed + "/login",
          data: { email, password },
        });
        this.token = data.access_token;
        localStorage.setItem("access_token", this.token);
        // SUCCESS >> REDIRECT TO HOME
        Swal.fire({
          icon: "success",
          title: "Loggin In",
          text: "You are now logged in",
        });
        this.showButton = "logout";
        this.router.push({ path: "/" });
      } catch (error) {
        let showErr = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "An Error has Occurred",
          text: showErr,
        });
      }
    },

    logout() {
      Swal.fire({
        title: "Log out of this Account",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log out",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Successfully Logged out");
          localStorage.clear();
          this.showButton = "login";
          this.router.push("/");
        }
      });
    },

    getData(){
        
    }
  },
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const undeployed = "http://localhost:3000";

export const useGenshinStore = defineStore("Genshin Impact", {
  state() {
    return {
      token: "",
      charaList: [],
      chara: {},
      account: {}
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
          text: "Please verify your email to gain full access to this website",
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

    async verify(id){
      try {   
        let { data } = await axios({
          method: 'PATCH',
          url: undeployed + '/verify?id=' + id
        })
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: 'You are now able to gain full access to the website',
          footer: `<a href="http://localhost:5173">Take me back Home</a>`
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Are you lost?",
          footer: `<a href="http://localhost:5173">Take me back Home</a>`
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
          title: "Logging In",
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

    async getChara() {
      try {
        let {data} = await axios({
            method: 'GET',
            url: undeployed + '/characters'
        })
        this.charaList = data
      } catch (err) {
        let showErr = err.response.data.message;
        Swal.fire({
          icon: "error",
          title: "An Error has Occurred",
          text: showErr,
        });
      }
    },

    async getCharaId(id) {
        try {
            let {data} = await axios({
                method: 'GET',
                url: undeployed + '/characters/' + id
            })
            this.chara = data
        } catch (err) {
            console.log(err);
        }
    },

    async getAcc(query){
        const {uid} = query
        try {
            let {data} = await axios({
                method: 'GET',
                url: undeployed + '/account?uid=' + uid
            })
            this.account = data
        } catch (err) {
            console.log(err);
        }
    }

  },
});

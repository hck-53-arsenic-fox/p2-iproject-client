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
      weaponList: [],
      singleWeapon: {},
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
    
    async googleLogin(response){
      await axios({
          method: 'POST',
          url: undeployed + '/google-login',
          headers: {google_token: response.credential}
        })
        .then((res) => {
          // console.log(res)
          localStorage.setItem("access_token", res.data.access_token)
          this.router.push({path: '/'}) 
        })
        .catch((err) => {
          console.log(err)
        })
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

    async getWeapons() {
      try {
        let {data} = await axios({
          method: 'GET',
          url: undeployed + '/weapons'
        })
        this.weaponList = data
      } catch (err) {
        console.log(err);
      }
    },

    async weaponDetail(name){
      try {
        console.log(name);
        let {data} = await axios({
          method: 'GET',
          url: undeployed + '/weapons/' + name
        })
        this.singleWeapon = data
      } catch (err) {
        console.log(err);
      }
    },

    async getAcc(query){
        const {uid} = query
        try {
            let {data} = await axios({
                method: 'GET',
                url: undeployed + '/account?uid=' + uid,
                headers: {access_token: localStorage.getItem('access_token')}
            })
            this.account = data
        } catch (err) {
          let showErr = err.response.data.message;
          Swal.fire({
            icon: "error",
            title: "An Error has Occurred",
            text: showErr,
          });
        }
    }

  },
});

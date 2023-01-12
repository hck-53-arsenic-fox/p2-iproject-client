import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// const baseUrl = 'http://localhost:6500'
const baseUrl = "https://quirky-toes-production.up.railway.app"

export const useCounterStore = defineStore('counter',{
  state: () => ({
    access_token: localStorage.access_token || "",
    articles: [],
    teams: [],
    twoTeam: [],
    live: [],
    articles: [],
    fourArticle: [],
    role: ''

    
  }),

  actions: {
    async handleRegister(name,email,password){
      try {
        const {data} = await axios({
          method: 'POST',
          url: baseUrl + '/register',
          data: {
            name,
            email,
            password
          }
        })
        this.router.push('/login')
        Toastify({
          text: "Register Success !",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
        
      }
    },



    async handleLogin(inputLogin){
      try {
        let {data} = await axios ({
          method: 'POST',
          url: baseUrl + '/login',
          data: inputLogin
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem('role', data.role)
        this.access_token = data.access_token
        this.role = localStorage.getItem('role')
        this.router.push('/') 
        Toastify({
          text: `Welcome! ${data.email}`,
          style: {
            background: "linear-gradient(to right, #1A1A2E, #1A1A2E)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
        
      }
    },

    async handleGoogleLogin(response){
      try {
        const {data} = await axios({
          method: 'POST',
          url: baseUrl + '/googleLogin',
          headers: {
            google_token: response.credential
          }
        })
        localStorage.setItem("email", data.email)
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("role",data.role)
        this.access_token = data.access_token
        this.role = localStorage.getItem("role")
        this.router.push({name: 'home'})
        Toastify({
          text: `Welcome! ${data.email}`,
          style: {
            background: "linear-gradient(to right, #1A1A2E, #1A1A2E)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
      }
    },


    async getTeams(){
      try {
        let {data} = await axios ({
          method: 'GET',
          url: baseUrl + '/teams',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.teams = data
        this.twoTeam = data.data.slice(0,2)

      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
      }
    },
    async handleLive(){
      try {
        let {data} = await axios ({
          method: 'GET',
          url: baseUrl + '/statistic-live-match',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.live = data.matches
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
      }
    },

    async midTrans(){
      try {
        const {data} = await axios({
          method: "POST",
          url: baseUrl + "/tokenMidTrans",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        const callback = this.forSubscribe
        window.snap.pay(data.token, {
          onSuccess: function (result){
            callback()
          }
        })
        Toastify({
          text: `Success For Subscribe`,
          style: {
            background: "linear-gradient(to right, #1A1A2E, #1A1A2E)",
          },
        }).showToast();
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
      }
    },

    async forSubscribe(){
      try {
        let {data} = await axios({
          method: "PATCH",
          url: baseUrl + '/subscribe',
          headers:{
            access_token: localStorage.getItem("access_token")
          },
          data:{
            role: "Subscribe"
          }
        })
        localStorage.setItem("role", "Subscribe")
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
        
      }
    },

    async articleBasket(){
      try {
        let {data} = await axios({
          method: "GET",
          url: baseUrl + '/articles',

        })
        this.articles = data
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A1A2E)",
          },
        }).showToast();
        
      }
    },

    async handleLogut(){
      localStorage.clear()
      this.router.push('/login')
    },

  }
})

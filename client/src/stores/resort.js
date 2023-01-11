import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
let origin = 'http://localhost:3000'

export const useResortStore = defineStore('resort', {
  state() {
    return {
      resorts: [],
      resort: {},
      mapToken: "pk.eyJ1IjoiZmFsZGkwMTI2IiwiYSI6ImNsY3B0N3UxdzJvbjgzcHA4dW9xdm1pa3gifQ.f_fE0qZ7IPzVnlRm1UEibg",
      isLogin: false,

    }
  },

  actions: {
    //? Register a user
    async handleRegister(username, email, password) {
      try {
        let { data } = await axios({
          method: 'POST',
          url: `${origin}/register`,
          data: {
            username: username,
            email: email,
            password: password
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },


    //? Login a user
    async handleLogin(email, password) {
      try {
        let { data } = await axios({
          url: origin + '/login',
          method: "POST",
          data: {
            email: email,
            password: password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/resorts')
        this.isLogin = true
      } catch (error) {
        console.log(error);
      }
    },

    //? Handle Logout
    async handleLogout() {
      this.isLogin = false
      localStorage.clear()
      this.router.push('/')
    },

    //? Read all resorts
    async fetchResorts() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${origin}/resorts`,
        })
        this.resorts = data
      } catch (error) {
        console.log(error);
      }
    },

    //? Read one resort
    async fetchOneResort(id) {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${origin}/resorts/${id}`,
        })
        this.resort = data
      } catch (error) {
        console.log(error);
      }
    },

    //? Create a resort
    async createResort(value) {
      try {
        let multerData = new FormData()
        multerData.append('image', value.imageUrl)
        multerData.append('title', value.title)
        multerData.append('location', value.location)
        multerData.append('description', value.description)
        multerData.append('price', value.price)
        let { data } = await axios({
          method: 'POST',
          url: `${origin}/resorts`,
          data: multerData,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.router.push(`/resorts/${data.id}`)

      } catch (error) {
        console.log(error);
      }
    },

    //? Google Login
    async googleLogin(credential) {
      console.log(credential);
      try {
        let { data } = await axios({
          method: 'POST',
          url: origin + '/users/google-sign-in',
          headers: {
            google_auth_token: credential
          }
        })
        this.router.push('/')
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)
        this.isLogin = true
      } catch (error) {
        console.log(error);
      }

    },

  }
})



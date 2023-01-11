import { defineStore } from 'pinia'
const baseUrl = "http://localhost:3000"; 
import axios from 'axios'

export const useCounterStore = defineStore('counter',  {
    state() {
        return {

        }
    },
    actions: {
        async handleGoogleLogin(val) {
            try {
              const { data } = await axios({
                  method: "POST",
                  url: `${baseUrl}/users/login`,
                  headers: {
                    google_token: val.credential,
                  },
                })
              localStorage.setItem('access_token', data.access_token)
              this.access_token = data.access_token
              Toastify({
                  text: "Welcome to Uniqli Store",
                  style: {
                    background: "linear-gradient(to right, #00aab0, #cdf571)",
                  },
      
                  duration: 2000,
                }).showToast();
  
              this.router.push('/')
              T
              
            } catch (err) {
              Toastify({
                  text: `${err.response.data.message}`,
                  style: {
                    background: "linear-gradient(to right, #611302, #a62103)",
                  },
      
                  duration: 2000,
                }).showToast();
            }  
          }
    }
})

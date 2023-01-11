import { defineStore } from 'pinia'
const baseUrl = "http://localhost:3000"; 
import axios from 'axios'

export const useCounterStore = defineStore('counter',  {
    state() {
        return {
            access_token: localStorage.access_token || '',
            query: {
                filter: "",
                page: 0,
                search: "",
              },
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
              this.router.push('/')
              
              
            } catch (err) {
                console.log(err);
            }  
          },
          handleLogout() {
              localStorage.clear()
              this.access_token = ''
              this.router.push('/login')
                  }
    }
})

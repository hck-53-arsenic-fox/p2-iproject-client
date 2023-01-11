import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:6500'

export const useCounterStore = defineStore('counter',{
  state: () => ({
    access_token: localStorage.access_token || "",
    articles: [],
    teams: [],
    twoTeam: [],
    live: []
    
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
      } catch (error) {
        console.log(error);
        
      }
    },



    async handleLogin(inputLogin){
      try {
        let {data} = await axios ({
          method: 'POST',
          url: baseUrl + '/login',
          data: inputLogin
        })
        localStorage.setItem("access_token", data.access_token
        )
        this.access_token = data.access_token
        this.router.push('/') 
      } catch (error) {
        console.log(error)
        
      }
    },
    async getArticles(){
      try {
        let {data} = await axios ({
          method: 'GET',
          url: baseUrl + '/articles'
        })
        this.articles = data
      
      } catch (error) {
        console.log(error)
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
        console.log(twoTeam);

      } catch (error) {
        
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
        console.log(error)
      }
    },

    async handleLogut(){
      localStorage.clear()
      this.router.push('/login')
    },

  }
})

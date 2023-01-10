import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios';

export const useCounterStore = defineStore("counter", {
  state:()=>({
    isAuth: false,
    doctors:[],
    doctor:{},
    transactions:[],
  }),
  getters:{},
  actions:{

    checkAuth(){
      this.isAuth = !!localStorage.getItem('access_token')
    },

    async handleRegister(data){
      try {
        const res = await axios({
          method:"POST",
          url: 'http://localhost:3000/users/register',
          data: data
        })
        this.router.push("/login")  
      } catch (error) {
        console.log(error);
      }
    },

    async handleLogin(data){
      try {
        const res = await axios({
          method: 'POST',
          url: 'http://localhost:3000/users/login',
          data:data
        })
        localStorage.setItem('access_token', res.data.access_token)
        this.router.push('/')
        this.isAuth = true
      } catch (error) {
        console.log(error);
      }
    },

    async fetchDataDoctors(){
      try {
        const {data} = await axios({
          method: 'GET',
          url: 'http://localhost:3000/doctors'
        })
        this.doctors = data
      } catch (error) {
        console.log(error);
      }
    },

    async detailDoctors(id){
      // try {
      //   const {data} = await axios({
      //     method: "GET",
      //     url: `http://localhost:3000/doctors/${id}`
      //   })
      //   this.doctor = data
      // } catch (error) {
      //   console.log(error);
      // }

      return axios({
        method: "GET",
        url: `http://localhost:3000/doctors/${id}`
      })
    },

    async fetchDataTransaction(){
      const {data} = await axios({
        method: 'GET',
        url: 'http://localhost:3000/transactions',
        headers:{
          access_token: localStorage.getItem("access_token")
        }
      })
      this.transactions = data
    },

    async deleteDataTransaction(id){
      try {
        const res = await axios({
          method: 'DELETE',
          url:`http://localhost:3000/transactions/${id}`,
          headers:{
            access_token: localStorage.getItem("access_token")
          }
        }) 
        this.router.push('/transactions')
        this.fetchDataTransaction()
      } catch (error) {
        console.log(error);
      }
    },

    async addForm(id, data){
      try {
        const res = await axios({
          method: 'POST',
          url: `http://localhost:3000/transactions/${id}`,
          headers:{
            access_token: localStorage.getItem("access_token")
          },
  
          data:data
        })
        this.router.push('/transactions')
        
      } catch (error) {
        console.log(error);
      }
    },

    async handleLogout(){
      try {
        localStorage.clear()
        this.checkAuth()
      } catch (error) {
        console.log(error);
      }
    }
  }
});
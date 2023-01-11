import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios';

export const useCounterStore = defineStore("counter", {
  state:()=>({
    isAuth: false,
    doctors:[],
    doctor:{},
    transactions:[],
    order_Id: ''
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

    async detailTransactions(id){
      return await axios({
        method: 'GET',
        url: `http://localhost:3000/transactions/${id}`,
        headers:{
          access_token: localStorage.getItem("access_token")
        }
      })
    },

    async editData(id, data){
      const res = await axios({
        method: "PUT",
        url: `http://localhost:3000/transactions/${id}`,
        headers:{
          access_token: localStorage.getItem("access_token")
        },
        data:data
      })

      this.router.push('/transactions')
    },

    async handleGoogleLogin(response){
      try {
        const res = await axios({
          method: 'POST',
          url: "http://localhost:3000/users/google-sign-in",
          headers:{
              google_token: response
          }
        })
        localStorage.setItem("access_token", res.data.access_token)
        this.router.push("/")
        this.isAuth = true
        // this.router.push("/")
      } catch (error) {
        console.log(error);
      }
    },

    async paymentConfirm(price) {
      try {
          let { data } = await axios({
              method: 'POST',
              url: "http://localhost:3000/payments/get-token-payment",
              data: {
                  price: price
              },
              headers:{
                access_token: localStorage.getItem("access_token")
              }
          })

          // console.log(price, 'ini priceeeeeeeeeeee')


          this.order_Id = data.orderId
          window.snap.pay(`${data.token.token}`, {
              onSuccess: async (result) => {
                  await this.statusPayment()
              },
              onPending: function (result) {
                  alert("wating your payment!"); console.log(result);
              },
              onError: function (result) {
                  alert("payment failed!"); console.log(result);
              },
              onClose: function () {
                  alert('you closed the popup without finishing the payment');
              }
          })
      } catch (error) {
          console.log(error)
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
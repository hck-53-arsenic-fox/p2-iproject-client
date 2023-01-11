import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios';

export const useCounterStore = defineStore("counter", {
  state:()=>({
    isAuth: false,
    doctors:[],
    doctor:{},
    transactions:[],
    order_Id: '',
    medicines:[]
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your account has been registered',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
       })
        console.log(err);
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have login',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
      })
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data successful deleted',
          showConfirmButton: false,
          timer: 1500
        })
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'data successful added',
          showConfirmButton: false,
          timer: 1500
        })
        
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
      try {
        const res = await axios({
          method: "PUT",
          url: `http://localhost:3000/transactions/${id}`,
          headers:{
            access_token: localStorage.getItem("access_token")
          },
          data:data
        })
  
        this.router.push('/transactions')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'data successful edited',
          showConfirmButton: false,
          timer: 1500
        })
        
      } catch (error) {
        console.log(error);
      }

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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have login',
          showConfirmButton: false,
          timer: 1500
        })
        // this.router.push("/")
      } catch (error) {
        console.log(error);
      }
    },

    async paymentConfirm(price, id) {
      try {
          let { data } = await axios({
              method: 'POST',
              url: `http://localhost:3000/payments/get-token-payment/${id}`,
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
                  // await this.statusPayment()
                  this.router.push('/')
                  
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

    async fetchMedicine(){
      try {
        const {data} = await axios({
          method: 'GET',
          url: 'http://localhost:3000/medicine/categories'
        })
        console.log(data);
        this.medicines = data
  
        
      } catch (error) {
        console.log(error);
      }
    },

    async handleLogout(){
      try {
        localStorage.clear()
        this.checkAuth()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully logout',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        console.log(error);
      }
    }
  }
});
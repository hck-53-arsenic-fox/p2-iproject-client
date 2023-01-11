import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const url = 'http://localhost:3000/'

export const useCounterStore = defineStore('counter', {
  state: () => {
  return { 
    dataProduct: [],
    dataTrx: [],
    dataHistory: [],
    isLogin :false,
    imgTable: '',
    totalPrice: 0,
    dataDayTable: [],
    dataPriceTable: [],
    dataTotalSalesTable: 0
  }
  },


  getters: {
  },

  actions: {
    handleLogout(){
      localStorage.clear()
      this.router.push('/login')
    },

    async handleFormLogin(data){
      try {
        let res = await axios({
          method: 'post',
          url: url + 'users/login',
          data: data
        })
        localStorage.setItem('token', res.data.access_token)
        this.fetchProduct()
        this.router.push('/')
        this.isLogin = true
      } catch (error) {
        console.log(error);
      }
    },

    async fetchProduct(type){
      try {
        let res = await axios({
          method: 'get',
          url: url + 'products',
          params: {
            type: type
          },
          headers: {
            access_token: localStorage.getItem('token')
          }
        })
        this.dataProduct = res.data
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchTransaction(customerName){
      try {
        let res = await axios({
          method: 'get',
          url: url + 'trx/' + customerName,
          params: {customerName},
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        this.dataTrx = res.data.data
        this.totalPrice = res.data.price
      } catch (error) {
        console.log(error);
      }
    },

    async table(){
      try {
        let res = await axios({
          method: 'get',
          url: `https://quickchart.io/chart?c={type:'bar',data:{labels:[2012,2013,2014,2015, 2016],datasets:[{label:'Users',data:[120,60,50,180,120]}]}}`,
        })
        this.imgTable = res.data
      } catch (error) {
        console.log(error);
      }
    },

    async handleFormEmail(email){
      console.log(email);
      try {
        let res = await axios({
          method: 'put',
          url: url + 'users/forgotpassword',
          data: {
            email
          }
        })
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },

    async handleReset(password, token){
      try {
        let res = await axios({
          method: 'put',
          url: url + 'users/resetpassword',
          data: {
            token, 
            password
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },

    async buttonHistory(data, customerName, price){
      try {
        await axios({
          method: 'post',
          url: url + 'trx',
          data: {data, customerName},
          headers: {
            access_token: localStorage.getItem('token')
          }
        })
        this.fetchTransaction(customerName)
        this.table()
        let res = await axios({
          method: 'post',
          url: url + 'histories',
          data : {
            customerName, price
          },
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        this.router.push('/histories')
        this.fetchHistory()
      } catch (error) {
        console.log(error);
      }
    },

    async fetchHistory(){
      try {
        let res = await axios({
          method: 'get',
          url: url + 'histories',
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        this.dataHistory = res.data
        // this.fetchHistoryWeek()
      } catch (error) {
        console.log(error);
      }
    },

    async fetchHistoryWeek(){
      try {
        let res = await axios({
          method: 'get',
          url: url + 'histories/week',
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        let dataDay = []
        let dataPrice = []
        let dataTotalSales = 0
        res.data.map(el => {
          dataDay.push(el.date)
          dataPrice.push(el.price)
          dataTotalSales += +el.price
        })
        this.dataDayTable = dataDay,
        this.dataPriceTable = dataPrice,
        this.dataTotalSalesTable = dataTotalSales
      } catch (error) {
        console.log(error);
      }
    },

    async handleSendEmail(dataTrx, customerName, totalPrice, email){
      console.log('yu');
      console.log(dataTrx);
      try {
        let res = await axios({
          method: 'post',
          url: url + 'trx/email',
          data: {
            dataTrx, customerName, totalPrice, email
          },
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },

    async handleGoogleLogin(response){
      try {
          let res = await axios ({
              method: 'POST',
              url: url + 'users/googleLogin',
              headers: {
                google_token: response,
              }
          })
          localStorage.setItem('token', res.data.access_token)
          localStorage.setItem('email', res.data.email)
          this.router.push({name: 'home'})
      } catch (error) {
        console.log(error);
      }
    },

    async handleFormRegister(email, password){
      try {
        let res = await axios({
          method: 'post',
          url: url + 'users/register',
          data: {
            email, password
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    }



  },
  })

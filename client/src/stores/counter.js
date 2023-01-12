import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const url = 'http://localhost:3000/'
import Notiflix from 'notiflix';

export const useCounterStore = defineStore('counter', {
  state: () => {
  return { 
    dataProduct: [],
    dataTrx: [],
    dataHistory: [],
    imgTable: '',
    totalPrice: 0,
    dataDayTable: [],
    dataPriceTable: [],
    dataTotalSalesTable: 0,
    dataHistoryDate: [],
    qrCode : '',
    imgWA : ''
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
        Notiflix.Notify.success('Welcome! :)', {
          timeout: 1000
        });
        this.fetchProduct()
        this.router.push('/')
        this.imgWA(res.data.noHp)
      } catch (error) {
        Notiflix.Report.failure(
          `${error.response.data.message}`,
          'Please try again!',
          'Okay',
        );
        console.log(error);
      }
    },

    // async imgWA(phone){
    //   try {
    //     let res = await axios({
    //       method: 'GET',
    //       url: 'https://whatsapp-profile-pic.p.rapidapi.com/wspic/url',
    //       params: {phone: phone},
    //       headers: {
    //         'X-RapidAPI-Key': 'aa9f45c161msh8b76244fe7f5a3dp1ee4ecjsn4c91517029fc',
    //         'X-RapidAPI-Host': 'whatsapp-profile-pic.p.rapidapi.com'
    //       }
    //     })
    //     this.imgWA = res.data 
    //     console.log(this.imgWA);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    async fetchProduct(type){
      try {
        Notiflix.Loading.dots()
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
        Notiflix.Loading.remove()
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
        Notiflix.Notify.success('Check Your Email', {
          timeout: 3000
        });
      } catch (error) {
        Notiflix.Report.failure(
          `${error.response.data.message}`,
          'Please try again!',
          'Okay',
        );
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
        Notiflix.Notify.success('Success Change Password', {
          timeout: 2000
        });
        this.router.push('/login')
      } catch (error) {
        Notiflix.Report.failure(
          `${error.response.data.message}`,
          'Please try again!',
          'Okay',
        );
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
        // this.table()
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
        Notiflix.Notify.success('Success Create Transactions!', {
          timeout: 1000
        });
      } catch (error) {
        Notiflix.Report.failure(
          `${error.response.data.message}`,
          'Please try again!',
          'Okay',
        );
        console.log(error);
      }
    },

    async fetchHistory(){
      try {
        Notiflix.Loading.dots()
        let res = await axios({
          method: 'get',
          url: url + 'histories',
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        Notiflix.Loading.remove()
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
        Notiflix.Notify.success('Success Send Email', {
          timeout: 2000
        });
      } catch (error) {
        Notiflix.Report.failure(
          `${error.response.data.message}`,
          'Please try again!',
          'Okay',
        );
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

    

    async handleFormRegister(email, password, noHp){
      try {
        let res = await axios({
          method: 'post',
          url: url + 'users/register',
          data: {
            email, password, noHp
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },

    async FetchHistoryDate(date){
      try {
        let res = await axios({
          method: 'get',
          url : url + 'histories/' + date,
          data: {
            date
          },
          headers: {
            access_token: localStorage.getItem('token'),
          }
        })
        this.dataHistoryDate = res.data,
        this.handleQrCode(date)
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    },

    async handleQrCode(date){
      try {
        let data  = await axios({
          method: 'get',
          url: 'https://api.happi.dev/v1/qrcode',
          params: {
            apikey: '4aa80dOotGFMJXUPzMlW4GGfOYwbyY7sFugs9Z3ePT2WuEVWiSFIPbBf',
            data: 'https://ngacir-app.web.app/history/' + date,
            width: 80, 
          }
        })
        this.qrCode = data.data.qrcode
      } catch (error) {
        console.log(error);
      }
    },

    // async formatDate(date){
    //   try {
    //     const encodedParams = new URLSearchParams();
    //     encodedParams.append("date", date);
    //     encodedParams.append("type", "TYPE_26");
    //     let res = await axios({
    //       method: 'POST',
    //       url: 'https://date-time-format-conversion1.p.rapidapi.com/date',
    //       headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'X-RapidAPI-Key': 'aa9f45c161msh8b76244fe7f5a3dp1ee4ecjsn4c91517029fc',
    //         'X-RapidAPI-Host': 'date-time-format-conversion1.p.rapidapi.com'
    //       },
    //       data: encodedParams
    //     }) 
    //     console.log(res.data.data);

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // async handleDownload(date){
    //   console.log('masuk');
    //   try {
    //     let key = '925bcb845a6eb9fa124605463b4222a3'
    //     let halaman = `https://ngacir-app.web.app/history/` + date
    //     let res = await axios({
    //       method: 'POST',
    //       url: 'https://url-html-to-pdf.p.rapidapi.com/api/v1/pdf/url-to-pdf',
    //       headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': 'aa9f45c161msh8b76244fe7f5a3dp1ee4ecjsn4c91517029fc',
    //         'X-RapidAPI-Host': 'url-html-to-pdf.p.rapidapi.com'
    //       },
    //       data: '{"url":"https://ngacir-app.web.app/history/2023-01-09","pdf":{"width":1000,"height":1400}}'
    //     })
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }



  },
  })

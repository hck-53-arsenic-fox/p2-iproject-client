// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      dataAnime: [],
      isLogin: false
    }
  },
  actions: {
    async fecthData() {
      try {
        let { data } = await axios({
          url: 'http://localhost:3000/anime',
          method: 'GET',
        })
        this.dataAnime = data
      } catch (err) {
        console.log(err)
      }
    },

    async registerUser(form) {
      try {
        // console.log( form );
        let { data } = await axios({
          url: 'http://localhost:3000/register',
          method: 'POST',
          data: form
        })
        // console.log( data )
        this.router.push('/login')
      } catch (err) {
        console.log(err.response.data.message)
      }
    },

    async loginUser(form) {
      try {
        let { data } = await axios({
          url: 'http://localhost:3000/login',
          method: 'POST',
          data: form
        })
        // console.log( data )
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (err) {
        console.log(err.response.data.message)
      }
    },

    async midstrans(form) {
      try {
        let { data } = await axios({
          url: 'http://localhost:3000/generate-midtrans-token',
          method: 'POST',
          data: form
        })
        let registUser = this.registerUser
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            registUser(form)
            // console.log(form, 'myTrand');
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })

      } catch (err) {
        console.log(err);
      }
    }
  }
})

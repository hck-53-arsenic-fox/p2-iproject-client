import { defineStore } from 'pinia'
import axios from 'axios'
const localhost = 'http://localhost:3000'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,
      courses: [],
      myCourses: []
    }
  },
  actions: {
    async loginUser(user) {
      try {
        let { email, password } = user
        let { data } = await axios({
          method: 'post',
          url: `${localhost}/users/login`,
          data: {
            email,
            password
          }
        })
        localStorage.setItem('access_token', data.access_token);
        this.isLogin = true;
        this.router.push('/')
      } catch (error) {
        console.log(error);
      }
    },

    async logoutUser() {
      try {
        localStorage.clear();
        this.isLogin = false;
        this.router.push('/login');
      } catch (error) {
        console.log(error);
      }
    },

    async getPayment() {
      try {

        const { data } = await axios({
          method: 'post',
          url: `${localhost}/bills/generateMidtrans`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data, '<<<<');

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            console.log('SUKSES');
            alert("payment success!"); console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log('PENDING');
            alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log('ERROR');
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            console.log('CLOSE');
            alert('you closed the popup without finishing the payment');
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
  }
})
import { defineStore } from 'pinia'
import axios from 'axios'
const localhost = 'http://localhost:3000'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,
      username: '',
      neighbors: [],
      id: 0,
      userBill: []
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
        // console.log(data, 'ININININ DATATATA');
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.emailUser);
        localStorage.setItem('id', data.id);
        this.isLogin = true;
        this.username = localStorage.getItem('username');
        this.id = localStorage.getItem('id');
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

    async getPayment(id) {
      try {
        let changeStatus = () => {
          axios({
            url: `${localhost}/bills/${id}`,
            method: "patch",
            headers: { access_token: localStorage.access_token },
          })
            .then((msg) => {
              this.fetchEachUserBill()
              // let { data } = msg;
            })
            .catch((err) => {
              console.log(err);
            });
        };

        const { data } = await axios({
          method: 'post',
          url: `${localhost}/bills/generateMidtrans/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data, '<<<<');

        window.snap.pay(data.midtransToken.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            // console.log('SUKSES');
            Swal.fire({
              title: "Success!",
              text: "payment success!",
              icon: "success",
              confirmButtonText: "OK",
            });
            return changeStatus();
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            // console.log('PENDING');
            // alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            // console.log('ERROR');
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            // console.log('CLOSE');
            // alert('you closed the popup without finishing the payment');
            Swal.fire({
              title: "Oopss ..!",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        })
      } catch (error) {
        console.log(error);
      }
    },

    async registerUser(user) {
      // console.log(user, 'USUSUSUSUSSU');
      try {
        const multerData = new FormData();
        multerData.append("image", user.image);
        multerData.append("username", user.username);
        multerData.append("email", user.email);
        multerData.append("password", user.password);
        multerData.append("homeNumber", user.homeNumber);
        const { data } = await axios({
          method: 'post',
          url: `${localhost}/users/register`,
          data: multerData
        })
        this.router.push('/login')
        Swal.fire({
          title: "Success!",
          text: "Register success!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },

    async fetchNeighbor() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${localhost}/users`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data, '<<<');
        this.isLogin = true
        this.neighbors = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },

    async fetchEachUserBill() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${localhost}/bills`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data, '<<<<');
        this.userBill = data.userBill
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },

    async getNeigh(name) {
      try {
        let { data } = await axios({ url: `${localhost}/users/search`, params: { name: name }, method: 'get', headers: { access_token: localStorage.access_token } })
        console.log(data);
        // console.log(name);
        this.neighbors = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    }

  }
})
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Toastify from "toastify-js";


const BASE_URL = "http://localhost:3000";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    room: [],
    detailRoom: {},
    qrCode: {},
    food: [],
    transaction: []
  }),
  actions: {
    // REGISTER
    handleRegister(register) {
      axios({
        method: "post",
        url: `${BASE_URL}/register`,
        data: register,
      })
        .then((res) => {
          this.router.push("/login");
          Toastify({
            text: `success create account`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },
    // LOGIN
    handleLogin(input) {
      axios({
        method: "post",
        url: `${BASE_URL}/login`,
        data: input,
      })
        .then((res) => {
          Toastify({
            text: `Hola ${res.data.email}, Long time no see! `,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.router.push("/");
          this.isLogin = true;
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },

    // GOOGLELOGIN
    handleGoogleLogin(response) {
      axios({
        method: "POST",
        url: `${BASE_URL}/googleSignIn`,
        headers: {
          google_token: response.credential,
        },
      })
        .then((res) => {
          Toastify({
            text: `Hola ${res.data.email}, Long time no see! `,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.isLogin = true;
          this.router.push("/");
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },

    // FETCH DATA ROOM
    fetchDataRoom() {
      axios({
        method: "get",
        url: `${BASE_URL}/room`,
      })
        .then((res) => {
          this.room = res.data;
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },

    // ROOM DETAIL BY ID
    handleDetailRoomById(id) {
      axios({
        method: "get",
        url: `${BASE_URL}/room/${id}`,
      })
        .then((res) => {
          this.detailRoom = res.data;
          this.handleQrCode(id);
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },

    // HANDLE QR-CODE
    handleQrCode(id) {
      axios({
        method: "get",
        url: "https://api.happi.dev/v1/qrcode",
        params: {
          apikey: "18e25c87m8KH3du3w6mEXDesLnU6JtdrLgaXiwm06vIWOUlaC82tz1xx",
          data: `http://localhost:3000/room/${id}`,
          width: 50,
        },
      })
        .then((res) => {
          this.qrCode = res.data;
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },
    // LOGOUT
    handleLogOut() {
      Toastify({
        text: `see u next time!`,
        style: {
          background: "linear-gradient(to right, #362207, #222831)",
        },
      }).showToast();
      localStorage.clear();
      this.router.push("/");
      this.isLogin = false;
    },

    // CHANGE FORMAT CURRENCY
    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },

    // FETCH DATA PIZZA (THIRD API)
    fetchDataFood() {
      axios({
        method: "GET",
        url: "https://pizza-and-desserts.p.rapidapi.com/pizzas",
        headers: {
          "X-RapidAPI-Key":
            "0e583854eamsh7f19937962c2f5cp1f7294jsn9502051301df",
          "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
        },
      })
        .then((res) => {
          this.food = res.data
        })
        .catch((err) => {
          Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
        });
    },

    // HANDLE PAYMENT
    handlePayment(id, price){
      axios({
        method: "POST",
          url: `${BASE_URL}/createMidtransToken/${price}`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{Toastify({
        text: `yashhh! success payment`,
        style: {
          background: "linear-gradient(to right, #362207, #222831)",
        },
      }).showToast();
        const status = this.handleStatus;
        window.snap.pay(res.data.token, {
          onSuccess: function (result) {
            status(id);
            location.reload();
          },
        });
      })
      .catch((err)=>{
        Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
      })
    },

    // HANDLE STATUS PAID
    handleStatus(id){
      axios({
        method: "PATCH",
          url: `${BASE_URL}/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        Toastify({
          text: `wohooo! thankyou for payment. lets verified your self!`,
          style: {
            background: "linear-gradient(to right, #362207, #222831)",
          },
        }).showToast();
        this.handleFetchTransaction()
      })
      .catch((err)=>{
        Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
      })
    },

    // HANDLE TRANSACTIONS
    handleTransaction(id){
      if (!localStorage.access_token){
        this.router.push('/login')
      } else {
        this.handleAddTransactions(id)
      }
    },
    // HANDLE ADDTRANSACTIONS
    handleAddTransactions(id){
      axios({
        method: "POST",
          url: `${BASE_URL}/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        Toastify({
          text: `yasss! your room waiting to payment`,
          style: {
            background: "linear-gradient(to right, #362207, #222831)",
          },
        }).showToast();
        this.router.push("/cart")
      })
      .catch((err)=>{
        Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
      })
    },

    // HANDLE FETCH TRANSACTIONS
    handleFetchTransaction(){
      axios({
        method: "get",
          url: `${BASE_URL}/transactions`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        this.transaction = res.data
      })
      .catch((err)=>{
        Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
      })
    },

    // HANDLE ADD IDENTITY
    handleAddIdentity(id, value){
      let multerData = new FormData()
      multerData.append("image", value.image)
      multerData.append("phoneNumber", +value.phoneNumber)
      axios({
        method: "post",
          url: `${BASE_URL}/identityUsers/${id}`,
          data: multerData,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        Toastify({
          text: `yesss! happy staycation!`,
          style: {
            background: "linear-gradient(to right, #362207, #222831)",
          },
        }).showToast();
        this.handleFetchTransaction()
        this.router.push('/cart')
      })
      .catch((err)=>{
        Toastify({
            text: `${err.response.data.message}`,
            style: {
              background: "linear-gradient(to right, #362207, #222831)",
            },
          }).showToast();
      })
    }
  },
});

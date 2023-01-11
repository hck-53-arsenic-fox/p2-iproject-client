import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

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
        })
        .catch((err) => {
          console.log(err);
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
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.router.push("/");
          this.isLogin = true;
        })
        .catch((err) => {
          console.log(err);
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
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.isLogin = true;
          this.router.push("/");
        })
        .catch((err) => {
          console.log(err);
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
          console.log(err);
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
          console.log(err);
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
          console.log(err);
        });
    },
    // LOGOUT
    handleLogOut() {
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
          console.log(err);
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
      .then((res)=>{
        const status = this.handleStatus;
        window.snap.pay(res.data.token, {
          onSuccess: function (result) {
            status(id);
            location.reload();
          },
        });
      })
      .catch((err)=>{
        console.log(err);
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
        this.handleFetchTransaction()
      })
      .catch((err)=>{
        console.log(err);
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
        this.router.push("/cart")
      })
      .catch((err)=>{
        console.log(err);
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
        console.log(err);
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
        this.handleFetchTransaction()
        this.router.push('/cart')
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
});

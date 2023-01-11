import { defineStore } from "pinia";
const baseUrl = "http://localhost:3000";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      access_token: localStorage.access_token || "",
      query: {
        filter: "",
        page: 0,
        search: "",
      },
      allPage: '',
      products: [],
      categories: [],
      detailProduct: {},
      carts: []
    };
  },
  actions: {
    async postCart(amount, id){
        try {
            console.log(amount,'<<<  ini amount');
            await axios({
                method: "POST",
                url: `${baseUrl}/cart/${id}`,
                headers:{
                    access_token: localStorage.getItem("access_token")
                },
                data: {
                    amount
                }
            })

            this.router.push('/')

        } catch (err) {
            console.log(err);
        }
    },
    async handleDetailbyId(id) {
        try {
            const {data} = await axios ({
                method: 'GET',
                url: `${baseUrl}/products/${id}` 
            })  
            this.detailProduct = data 
        } catch (err) {
            console.log(err);
        }
    },
    async midtrans(id) {
      try {
        const {data} = await axios ({
            method: 'GET',
            url: `${baseUrl}/cart/payment/${id}`,
            headers:{
              access_token: localStorage.getItem("access_token")
          }
        })
        snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            alert("payment success!"); 
            console.log(result);
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
    ,
    async handleGoogleLogin(val) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          headers: {
            google_token: val.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.access_token = data.access_token;
        this.router.push("/");
 
        Swal.fire({
          title: 'Sweet!',
          text: 'Modal with a custom image.',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      } catch (err) {
        console.log(err);
      }
    },
    handleLogout() {
      localStorage.clear();
      this.access_token = "";
      this.router.push("/login");
    },
    async fetchProducts() {
      try {
        let queryProduct = this.query;
        if (!queryProduct.filter) {
          delete queryProduct.filter;
        }
        if (!queryProduct.page) {
          delete queryProduct.page;
        }
        if (!queryProduct.search) {
          delete queryProduct.search;
        }

        this.router.replace({ name: "home", query: queryProduct });
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products`,
          params: queryProduct,
        });
        this.products = data.rows;
        this.allPage = Math.ceil(data.count / 6);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteCart(id) {
      try {
        await axios ({
          method: 'DELETE',
          url: `${baseUrl}/cart/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchCart()
        this.router.push('/cart')
      } catch (err) {
        console.log(err);
      }
    }
    ,
    async fetchCategory() {
        try {
            const {data} = await axios ({
                method: 'GET',
                url: `${baseUrl}/categories`
            })
            this.categories = data
        } catch (err) {
            console.log(err);
        }
    },
    async fetchCart() {
      try {
          const {data} = await axios ({
              method: 'GET',
              url: `${baseUrl}/cart`,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
          })
          this.carts = data
      } catch (err) {
          console.log(err);
      }
  }
  },
});

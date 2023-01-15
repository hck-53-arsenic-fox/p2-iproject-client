import { defineStore } from "pinia";
const baseUrl = "https://nikopetstore-production.up.railway.app";
// const baseUrl = "http://localhost:3000";
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
      allPage: "",
      products: [],
      categories: [],
      detailProduct: {},
      carts: [],
      wishlist: [],
      bengal: [],
    };
  },
  created() {},
  actions: {
    async postCart(amount, id) {
      try {
        await axios({
          method: "POST",
          url: `${baseUrl}/cart/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            amount,
          },
        });

        this.router.push("/");
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async handleDetailbyId(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products/${id}`,
        });
        this.detailProduct = data;
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async theCatApi() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products/bengal`,
        });
        this.bengal = data;
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async midtrans(id) {
      try {
        const tr = {};
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/cart/payment/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.router.push("/");
        snap.pay(data.token, {
          onSuccess: (result) => {
            /* You may add your own implementation here */
            
            Swal.fire({
              title: "Sweet!",
              text: `${result.status_message}`,
              imageUrl: "https://cataas.com/cat/cute/says/Aww...",
              imageHeight: 200,
              imageAlt: "Custom image",
            });
            this.deleteCart(id);
          },
        });
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
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
          title: "Welcome to Neko Store",
          text: " new cat food upcoming next wednesday",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
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
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async deleteCart(id) {
      try {
        await axios({
          method: "DELETE",
          url: `${baseUrl}/cart/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchCart();
        this.router.push("/cart");
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async fetchCategory() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/categories`,
        });
        this.categories = data;
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async fetchCart() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/cart`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.carts = data;
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async fetchwishlist() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/wishlist`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.wishlist = data;
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async postWishlist(id) {
      try {
        await axios({
          method: "POST",
          url: `${baseUrl}/wishlist/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        });
        Swal.fire({
          title: "Sweet!",
          text: `Successfully added to your Wishlist`,
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        this.router.push("/");
      } catch (err) {
                Swal.fire({
          title: "Sorry..",
          text: " You already add this to your wishlist",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    async deleteWishlist(id) {
      try {
        await axios({
          method: "DELETE",
          url: `${baseUrl}/wishlist/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchwishlist();
        this.router.push("/wishlist");
      } catch (err) {
                Swal.fire({
          title: "Error",
          text: " Something went wrong",
          imageUrl: "https://cataas.com/cat/cute/says/Aww...",
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    }
  },
});

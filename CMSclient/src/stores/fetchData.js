import { defineStore } from "pinia";
import axios from "axios";
const server = "http://localhost:3000/";

export const useFetchStore = defineStore("fetch", {
  state() {
    return {
      services: [],
      myOrders: [],
      myOrderDetail: {}
    };
  },
  actions: {
    async fetchServices() {
      try {
        const { data } = await axios({
          method: "GET",
          url: server + "services",
        });
        this.services = data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMyOrders() {
      try {
        const { data } = await axios({
          method: "GET",
          url: server + "orders/myOrder",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myOrders = data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchOrderDetail(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: server + `orders/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myOrderDetail = data;
        this.router.push(`/detail/${id}`)
      } catch (error) {
        console.log(error);
      }
    },
  },
});

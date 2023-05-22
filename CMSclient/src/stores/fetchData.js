import { defineStore } from "pinia";
import axios from "axios";
const server = "https://cleanmyshoes-server.ibnusyadzali.com/";

export const useFetchStore = defineStore("fetch", {
  state() {
    return {
      services: [],
      myOrders: [],
      allOrders: [],
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

    async fetchAllOrders() {
      try {
        const { data } = await axios({
          method: "GET",
          url: server + "orders/",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.allOrders = data;
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
      } catch (error) {
        console.log(error);
      }
    },
  },
});

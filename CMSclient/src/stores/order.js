import { defineStore } from "pinia";
import axios from "axios";
const server = "http://localhost:3000/";

export const useOrderStore = defineStore("order", {
  state() {
    return {
      shoesBrand: "",
      shoesSize: "",
      shoesColor: "",
      shoesMaterial: "",
      phoneNumberPIC: "",
      photo: "",
      pickUpAddress: "",
      ServiceId: "",
      status: "",
      photoAfter: "",
    };
  },
  actions: {
    async createOrder(orderData) {
      try {
        const { data } = await axios({
          method: "Post",
          url: server + "orders",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            shoesBrand: orderData.shoesBrand,
            shoesSize: orderData.shoesSize,
            shoesColor: orderData.shoesColor,
            shoesMaterial: orderData.shoesMaterial,
            phoneNumberPIC: orderData.phoneNumberPIC,
            photo: orderData.photo,
            pickUpAddress: orderData.pickUpAddress,
            ServiceId: orderData.ServiceId,
          },
        });
        this.shoesBrand = "";
        this.shoesSize = "";
        this.shoesColor = "";
        (this.shoesMaterial = ""),
          (this.phoneNumberPIC = ""),
          (this.photo = ""),
          (this.pickUpAddress = ""),
          (this.ServiceId = "");
        this.router.push("/services");
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatusOrder(updateData, id) {
      try {
        const { data } = await axios({
          method: "PATCH",
          url: server + `orders/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            status: updateData.status,
            photoAfter: updateData.photoAfter,
          },
        });
        this.status =''
        this.photoAfter=''
        this.router.push("/log");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

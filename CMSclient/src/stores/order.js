import { defineStore } from "pinia";
import axios from "axios";
const server = "http://localhost:3000/";
// const server = "https://cleanmyshoes-production.up.railway.app/";

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
            let dataMulter = new FormData();
            dataMulter.append("photoImage", orderData.photo);
            dataMulter.append("shoesBrand", orderData.shoesBrand);
            dataMulter.append("shoesSize", orderData.shoesSize);
            dataMulter.append("shoesColor", orderData.shoesColor);
            dataMulter.append("shoesMaterial", orderData.shoesMaterial);
            dataMulter.append("phoneNumberPIC", orderData.phoneNumberPIC);
            dataMulter.append("pickUpAddress", orderData.pickUpAddress);
            dataMulter.append("ServiceId", orderData.ServiceId);
        
        const { data } = await axios({
          method: "Post",
          url: server + "orders",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: dataMulter,
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
        let dataMulter = new FormData();
        dataMulter.append("photoImage", updateData.photoAfter);
        dataMulter.append("status", updateData.status);
        const { data } = await axios({
          method: "PATCH",
          url: server + `orders/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: dataMulter,
        });
        this.status = "";
        this.photoAfter = "";
        this.router.push("/log");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

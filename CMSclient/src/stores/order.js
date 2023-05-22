import { defineStore, mapActions } from "pinia";
import axios from "axios";
import { useFetchStore } from "./fetchData";
// const server = "http://localhost:3000/";
const server = "https://cleanmyshoes-server.ibnusyadzali.com/";

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
    ...mapActions(useFetchStore, ['fetchMyOrders']),
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
        this.router.push("/history");
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
    async updateStatusPayment(updateData, id) {
      try {
        const { data } = await axios({
          method: "PATCH",
          url: server + `orders/payment/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            status: updateData,
          },
        });
        this.status = "";
        await this.fetchMyOrders()
      } catch (error) {
        console.log(error);
      }
    },

    async paymentMidtrans(id) {
      try {
        const { data } = await axios({
          url: server + `orders/${id}`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        window.snap.pay(`${data.token}`, {
          onSuccess: async (result) => {
            /* You may add your own implementation here */
            let updateData = "Paid";
            await this.updateStatusPayment(updateData, id);
            // alert("payment success!");
            // console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});

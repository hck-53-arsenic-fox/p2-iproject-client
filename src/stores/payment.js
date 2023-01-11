import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
const baseUrl = "http://localhost:3001";

export const usePaymentStore = defineStore("payment", () => {
  const state = reactive({});

  async function supportDev() {
    try {
      const { data } = await axios.post(`${baseUrl}/midtrans-token`);
      console.log(data);

      const toast = useToast();

      window.snap.pay(data.token, {
        onSuccess: function (result) {
          toast.success("Thanks for the treat!");
          console.log(result);
        },

        onError: function (result) {
          toast.error("Oops.. payment failed");
          console.log(result);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { state, supportDev };
});

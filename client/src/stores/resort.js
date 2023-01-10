import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
let origin = 'http://localhost:3000'

export const useResortStore = defineStore('resort', {
  state() {
    return {
      resorts: [],
      resort: {},
      mapToken: "pk.eyJ1IjoiZmFsZGkwMTI2IiwiYSI6ImNsY3B0N3UxdzJvbjgzcHA4dW9xdm1pa3gifQ.f_fE0qZ7IPzVnlRm1UEibg"

    }
  },

  actions: {
    //? Read all resorts
    async fetchResorts() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${origin}/resorts`,
        })
        this.resorts = data
      } catch (error) {
        console.log(error);
      }
    },

    //? Read one resort
    async fetchOneResort(id) {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${origin}/resorts/${id}`,
        })
        console.log(data);
        this.resort = data
      } catch (error) {
        console.log(error);
      }
    }


  }
})



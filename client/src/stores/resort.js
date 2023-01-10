import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
let origin = 'http://localhost:3000'

export const useResortStore = defineStore('resort', {
  state() {
    return {
      resorts: []
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
    }


  }
})



import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const undeployed = 'http://localhost:3000'

export const useGenshinStore = defineStore('Genshin Impact', {
  state(){
    return {
        token: '',
    }
  },

  actions: {
    
  }
})

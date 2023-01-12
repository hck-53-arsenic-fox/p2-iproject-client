import { defineStore } from "pinia";
import axios from 'axios'
const server = 'http://localhost:3000/'

export const useOrderStore = defineStore('order', {
    state(){
        return{
        }
    },
    actions:{
        async fetchServices(){
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: server + 'orders'
                })
                this.services = data
            } catch (error) {
                console.log(error)
            }
        },
    }

})
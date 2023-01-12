import { defineStore } from "pinia";
import axios from 'axios'
const server = 'http://localhost:3000/'

export const useFetchStore = defineStore('fetch', {
    state(){
        return{
            services: [],
        }
    },
    actions:{
        async fetchServices(){
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: server + 'services'
                })
                this.services = data
            } catch (error) {
                console.log(error)
            }
        },
    }

})
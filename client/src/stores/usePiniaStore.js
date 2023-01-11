import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000/users"
const urlAPI_1 = "https://api.api-ninjas.com/v1/planets="

export const usePiniaStore = defineStore("piniaStore", {
    state: () => ({
        isLogin: false,
        dataPlanets: [],
        dataAstros: []
    }),
    actions: {
        async register(dataRegister){
            try {
                await axios({
                    method: "POST",
                    url: `${baseUrl}/register`,
                    data: dataRegister
                })
                Swal.fire({
                    title: 'Register success, please Login',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                this.router.push('/login')
            } catch (error) {
                console.log(error);
            }
        }
    }
})
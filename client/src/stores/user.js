import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state() {
        return {
            email: '',
            password: '',
            acces_token:''
        }
    },
    actions: {
        async login(dataLogin) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/user/login',
                    data: {
                        email: dataLogin.email,
                        password: dataLogin.password
                    }
                })
                Swal.fire({
                    title: 'Success Login',
                    text: `Welcome`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                this.router.push('/')
                this.email = ''
                this.password = ''
                this.acces_token = data.acces_token
                localStorage.setItem("acces_token", data.acces_token)
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        },
        async register(dataRegister) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/user/register',
                    data: {
                        username: dataRegister.username,
                        email: dataRegister.email,
                        password: dataRegister.password
                    }
                })
                Swal.fire({
                    title: 'Success Register',
                    text: `Lets Login`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                this.router.push('login')
                this.username= ''
                this.email= ''
                this.password= ''
            } catch (error) {
                console.log(error);
            }
        }
    }
})
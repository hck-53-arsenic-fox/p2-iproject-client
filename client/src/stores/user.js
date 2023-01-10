import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const useUserStore = defineStore('user', {
    state: () => {
        return {

        }
    },
    getters: {

    },
    actions: {
        async handleRegister(dataRegister) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${baseUrl}/register`,
                    data: dataRegister
                })
                console.log('Success Register')
                this.router.push('/login')
            } catch (error) {
                console.log(error)
            }
        },
        async handleLogin(dataLogin) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${baseUrl}/login`,
                    data: dataLogin
                })
                console.log('Success Login')
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async handleLogOut() {
            localStorage.clear()
            this.router.push('/login')
        }
    },
})
import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isSubs: false,
            oneProfile: {},
            allFighters: [],
            allEvents: {}
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
        },
        async changePaymentStatus() {
            try {
                const { data } = await axios({
                    method: 'PATCH',
                    url: `${baseUrl}/subscription`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.oneProfile.isSubscribed = true
            } catch (error) {
                console.log(error)
            }
        },
        async subscribe() {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${baseUrl}/generate-midtrans-token`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                window.snap.pay(data.token, {
                    onSuccess: (result) => {
                        /* You may add your own implementation here */
                        console.log('Success')
                        this.changePaymentStatus()
                    }
                })
            } catch (error) {
                console.log(error)
            }
        },
        async profile() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/profile`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.oneProfile = data
            } catch (error) {
                console.log(error)
            }
        },
        async fetchFighter() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/fighters`
                })
                this.allFighters = data
            } catch (error) {
                console.log(error)
            }
        },
        async fetchAllEvents() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/events`
                })
                this.allEvents = data
            } catch (error) {
                console.log(error)
            }
        }
    },
})
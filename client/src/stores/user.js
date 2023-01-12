import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = "https://kpp-service-production.up.railway.app"
// const baseUrl = 'http://localhost:3000'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            oneProfile: {},
            allFighters: [],
            allEvents: {},
            allLogs: [],
            totalPage: 0,
            oneFighter: {},
            winRate: 0,
            allVideo: []
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
        async changePaymentStatus(id) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${baseUrl}/subscription`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        competitionId: id
                    }
                })

                this.fetchLogs()
            } catch (error) {
                console.log(error)
            }
        },
        async subscribe(id) {
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
                        this.changePaymentStatus(id)
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
        async fetchAllEvents(index, search) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/events`,
                    params: {
                        page: `6,${index}`,
                        search: search
                    },
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.allEvents = data.items
                this.totalPage = data.totalPage
            } catch (error) {
                console.log(error)
            }
        },
        async fetchLogs() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/logs`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.allLogs = data
            } catch (error) {
                console.log(error)
            }
        },
        async fetchOneFighter(id) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/fighters/${id}`
                })
                this.oneFighter = data
                this.winRate = Math.floor(data.win / (data.win + data.lose + data.draw) * 100)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchYoutubeVideo() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/youtube`
                })
                this.allVideo = data.items
            } catch (error) {
                console.log(error)
            }
        },
        async googleLogin(response) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${baseUrl}/google`,
                    headers: {
                        google_token: response.credential
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        }
    },
})
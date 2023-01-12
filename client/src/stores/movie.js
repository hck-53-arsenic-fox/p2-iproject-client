import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

let BASE_URL = `http://localhost:3000/users`

export const useMovieStore = defineStore('counter', {
    state: () => ({
        movies: [],
        movie: {},
        theaters: [],
        theater: {},
        commingsoon: [],
        access_token: ''
    }),

    actions: {
        async readAllMovie() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${BASE_URL}/movies`
                })
                this.movies = data.rows
            } catch (error) {
                console.log(error)
            }
        },

        async readMovieById(id) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${BASE_URL}/movies/${id}`
                })
                this.movie = data
            } catch (error) {
                console.log(error);
            }
        },

        async readAllTheater() {
            try {
                const { data } = await axios({
                    url: `${BASE_URL}/theaters`,
                    method: 'GET'
                })
                this.theaters = data
            } catch (error) {
                console.log(data);
            }
        },

        async readTheaterById(id) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${BASE_URL}/theaters/${id}`
                })
                this.theater = data
            } catch (error) {
                console.log(error);
            }
        },

        async readMovieCommingSoon(){
            try {
            let {data} = await axios({
                method: 'GET', 
                url: `${BASE_URL}/commingsoon`
            })
               this.commingsoon = data
            } catch (error) {
                console.log(error);
            }
        },

        async Login(email, password) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}/login`,
                    data: {
                        email,
                        password
                    }
                })
                localStorage.setItem("access_token", data.access_token)
                this.access_token = data.access_token
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },

        async GetOtp(telepon) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}/otp`,
                    data: { telepon }
                })
            } catch (error) {
                console.log(error);
            }
        },

        async Register(otp, name, email, password, address, telepon) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}/register`,
                    data: {
                        otp, name, email, password, address, telepon
                    }
                })
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },

        async createTicket(id, seatNumber) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}/cinema/${id}`,
                    data: {
                        seatNumber
                    },
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }, 

        async editStatus(){
            try {
                const {data} = await axios({
                    method: 'PATCH', 
                    url: `${BASE_URL}/editstatus/2`, 
                    data: {
                        status: 'Paid'
                    }, 
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data);
            } catch (error) {
                console.log(error);   
            }
        },

        async tokenMidTrans(){
            try {
                const {data} = await axios({
                    method: 'POST', 
                    url: `${BASE_URL}/checkout/1`, 
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                // console.log(data);
                const callback = this.editStatus;
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        callback();
                    },
                });
            } catch (error) {
                console.log(error)
            }
        }
    }
})

import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from "vue-toastification";

const baseUrl = 'http://localhost:3000'
// const baseUrl = 'https://enbie-production.up.railway.app'

const toast = useToast();

export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        following: [],
        onePlayer: {},
        userProfile: {},
        isPro: false,
        teams: [],
    }),
    actions: {
        logout() {
            localStorage.clear()
            this.router.push('/login')
        },

        loginNavbar() {
            console.log(this.status);
            this.router.push('/login')
        },

        async login(formLogin) {
            console.log(formLogin, '<----- formLogin');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/users/login`,
                    method: 'post',
                    data: formLogin
                })

                // console.log(data, '<----- data login');
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('username', data.username)
                toast.success("You're in mate");

                this.router.push('/')
            } catch (error) {
                // console.log(error, '<---- error login');
                toast.error(error.response.data.message);
            }
        },

        async loginGoogle(response) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: baseUrl + '/users/google-login',
                    headers: { google_token: response }
                })
                console.log(data, '<--- data google login');
                localStorage.setItem('access_token', data.access_token)

                toast.success("You're in mate");
                

                this.router.push('/')
            } catch (error) {
                toast.error(error.response.data.message);
                // console.log(error, '<<---- google login');
                // const msg = error.response.data.message
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: `${error}`
                // })
            }
        },

        async register(formRegister) {
            console.log('masukkkk register');
            console.log(formRegister, '<---- formREGISTER');
            try {
                const multerData = new FormData();
                multerData.append("imgProfile", formRegister.imgProfile);
                multerData.append("username", formRegister.username);
                multerData.append("email", formRegister.email);
                multerData.append("password", formRegister.password);

                const { data } = await axios({
                    url: `${baseUrl}/users/register`,
                    method: 'post',
                    data: multerData
                })

                toast.success("Welcome to the gang!");

                this.router.push('/login');

            } catch (error) {
                // console.log(error, '<----- error register');
                toast.error(error.response.data.message);
            }
        },

        async fetchPlayers() {
            try {
                const { data } = await axios({
                    url: `${baseUrl}/players`,
                    method: 'get',
                    headers: { access_token: localStorage.access_token }
                })

                // toast.success("You're in mate");
                
                this.players = data
            } catch (error) {
                // console.log(error, '<---- error fetchPlayers');
                
                toast.error(error.response.data.message);
            }
        },

        async fetchOnePlayer(id) {
            console.log(id, '<----- id fetchOnePlayer');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/players/${id}`,
                    method: 'get',
                    headers: { access_token: localStorage.access_token }
                })

                console.log(data, '<---- data fetchOnePlayer');

                this.onePlayer = data
                this.router.push(`/players/${id}`)
            } catch (error) {
                // console.log(error, '<---- error fetchOnePlayer');
                
                toast.error(error.response.data.message);
            }
        },

        async addFavorite(playerId) {
            console.log(playerId, '<---- playerId addFavorite');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/users/${playerId}`,
                    method: 'post',
                    headers: { access_token: localStorage.access_token }
                })

                toast.success("You followed this player");
                // console.log(data, '<------- data addFavorite');
                this.router.push('/users/user/following')
            } catch (error) {
                // console.log(error, '<---- error addFavorite');
                
                toast.error(error.response.data.message);
            }
        },

        async changeStatusPro() {
            try {
                const { data } = await axios({
                    url: `${baseUrl}/users/status`,
                    method: 'patch',
                    data: { status: 'Pro' },
                    headers: { access_token: localStorage.access_token }
                })

                // console.log(data, '<----- data changeStausPro');
                toast.success("You are a pro member now!");
                

                this.fetchUserProfile()
                this.router.push('/users/asd')
            } catch (error) {
                // console.log(error, '<---- error di changeStatus');
                
                toast.error(error.response.data.message);
            }
        },

        async upgradeMemberPro() {
            try {
                // window.snap.pay('TRANSACTION_TOKEN_HERE', {
                //     onSuccess: function (result) {
                //         /* You may add your own implementation here */
                //         alert("payment success!"); console.log(result);
                //     },
                //     onPending: function (result) {
                //         /* You may add your own implementation here */
                //         alert("wating your payment!"); console.log(result);
                //     },
                //     onError: function (result) {
                //         /* You may add your own implementation here */
                //         alert("payment failed!"); console.log(result);
                //     },
                //     onClose: function () {
                //         /* You may add your own implementation here */
                //         alert('you closed the popup without finishing the payment');
                //     }
                // })

                const { data } = await axios({
                    method: "post",
                    url: baseUrl + "/users/MidtransToken",
                    headers: {
                        access_token: localStorage.access_token
                    },
                })

                console.log(data, '<---- data midtrans');
                const cb = this.changeStatusPro;

                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        // toast.success("Payment Success");
                        console.log('SUKSESSS BAYAR!!!');
                        cb();
                    },
                });
            } catch (error) {
                console.log(error, '<---- error upgrade Member');
            }
        },

        async fetchFollowing(username) {
            console.log(username, '<---- username');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/users/following`,
                    method: 'get',
                    headers: { access_token: localStorage.access_token }
                })

                // console.log(data, '<----- data fetchFollowing');
                this.following = data
            } catch (error) {
                // console.log(error, '<---- error fetch following');
                
                toast.error(error.response.data.message);
            }
        },

        async fetchUserProfile(username) {
            // console.log(username, '<----- usrname   ');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/users/${username}`,
                    method: 'get',
                    headers: { access_token: localStorage.access_token }
                })

                // console.log(data, '<---- data fetchUserProfie');
                this.userProfile = data
            } catch (error) {
                // console.log(error, '<---- error fetchUserProfile');
                
                toast.error(error.response.data.message);
            }
        },

        async fetchTeams() {
            try {
                const { data } = await axios({
                    url: `https://www.balldontlie.io/api/v1/teams`,
                    method: 'get',
                })

                console.log(data, '<----');
                this.teams = data
            } catch (error) {
                // console.log(error, '<---- error fetchTeams');
                toast.error(error.response.data.message);
            }
        }
    },
})
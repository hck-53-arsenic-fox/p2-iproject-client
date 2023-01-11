import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        following: [],
        onePlayer: {},
        userProfile: {},
    }),
    actions: {
        logout() {
            localStorage.clear()
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

                console.log(data, '<----- data login');
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('username', data.username)
                this.router.push('/')
            } catch (error) {
                console.log(error, '<---- error login');
            }
        },

        async register(formRegister) {
            console.log('masukkkk register');
            console.log(formRegister, '<---- formREGISTER');
            try {
<<<<<<< HEAD
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

                this.router.push('/login');
=======

>>>>>>> feat/user-profile
            } catch (error) {
                console.log(error, '<----- error register');
            }
        },

        async fetchPlayers() {
            try {
                const { data } = await axios({
                    url: `${baseUrl}/players`,
                    method: 'get',
                    headers: { access_token: localStorage.access_token }
                })

                console.log(data, '<---- data fetchPlayers');
                this.players = data
            } catch (error) {
                console.log(error, '<---- error fetchPlayers');
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
                console.log(error, '<---- error fetchOnePlayer');
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

                console.log(data, '<------- data addFavorite');
                this.router.push('/users/user/following')
            } catch (error) {
                console.log(error, '<---- error addFavorite');
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

                console.log(data, '<----- data changeStausPro');
                
                this.fetchUserProfile()
                this.router.push('/users/asd')
            } catch (error) {
                console.log(error, '<---- error di changeStatus');
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

                console.log(data, '<----- data fetchFollowing');
                this.following = data
            } catch (error) {
                console.log(error, '<---- error fetch following');
            }
        },

        async fetchUserProfile(username) {
            console.log(username, '<----- usrname   ');
            try {
                const { data } = await axios({
                    url: `${baseUrl}/users/${username}`,
                    method: 'get',
                    headers: { access_token: localStorage.access_token }
                })

                console.log(data, '<---- data fetchUserProfie');
                this.userProfile = data
            } catch (error) {
                console.log(error, '<---- error fetchUserProfile');
            }
        }
    },
})
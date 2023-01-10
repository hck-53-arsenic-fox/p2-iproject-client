import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        favorite: [],
        onePlayer: {},
    }),
    actions: {
        logout() {
            localStorage.clear()
            this.router.push('/login')
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
                const {data} = await axios({
                    url: `${baseUrl}/players/${id}`,
                    method: 'get',
                    headers: {access_token: localStorage.access_token}
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
                    headers: {access_token: localStorage.access_token}
                })

                console.log(data, '<------- data addFavorite');
                this.router.push('/players/favorites')
            } catch (error) {
                console.log(error, '<---- error addFavorite');
            }
        }
    },
})
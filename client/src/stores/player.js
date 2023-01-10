import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        favorite: [],
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
        }
    },
})
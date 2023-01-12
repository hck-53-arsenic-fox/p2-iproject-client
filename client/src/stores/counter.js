import { defineStore } from 'pinia'
import axios from 'axios'
export const useAnimeStore = defineStore("post", {
    state() {
        return {
            isLogin: false,
            listsOfAnime: [],
            user: {},
            videos: [],
            subscribes:false
        };
    },
    actions: {
        async fetchAnime(search) {
            try {
                let urls
                if (!search) {
                    urls = `vestal-tent-production.up.railway.app/anime/popular`
                }
                else {
                    urls = `vestal-tent-production.up.railway.app/anime?q=${search}`
                }
                const { data } = await axios({
                    method: "GET",
                    url: urls,
                });
                this.listsOfAnime = data.data
            } catch (error) {
                console.log(error)
            }
        },
        async changeStatus() {
            try {
                const { data } = await axios({
                    method: "PATCH",
                    url: `vestal-tent-production.up.railway.app/users/status`,
                    headers: {
                        accesstoken: localStorage.getItem("acess_Token")
                    }
                })
            } catch (error) {
                console.log(error)
            }
        },
        async subscribe() {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `vestal-tent-production.up.railway.app/users/generate-mid-trans-token`,
                    headers: {
                        accesstoken: localStorage.getItem("acess_Token")
                    }
                })
                window.snap.pay(data.token, {
                    onSuccess: async (result)=> {
                        /* You may add your own implementation here */

                        alert("payment success!"); console.log(result);
                        await this.changeStatus()
                        this.subscribes=true
                    },
                })
            }
            catch (error) {
                console.log(error)
            }
        },
        async handleLogin(dataLogin) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: "vestal-tent-production.up.railway.app/users/login",
                    data: dataLogin
                })
                localStorage.setItem("acess_Token", data.acessToken)
                this.isLogin = true
                this.user = data
                this.router.push("/")
            } catch (error) {
                console.log(error)
            }
        },
        handleLogOut() {
            this.isLogin = false
            localStorage.clear()
            this.sweetAlertSuccess("Success Log Out")
            this.router.push("/")
        },
        async register(dataSignUp) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `vestal-tent-production.up.railway.app/users/register`,
                    data: dataSignUp
                })
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async showVideo() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `vestal-tent-production.up.railway.app/anime/videos`
                })
                this.videos = data
            } catch (error) {
                console.log(error)
            }
        }
    }
})
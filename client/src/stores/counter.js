import { defineStore } from 'pinia'
import axios from 'axios'
export const useAnimeStore = defineStore("post", {
    state() {
        return {
            isLogin: false,
            listsOfAnime: [],
            user: {}
        };
    },
    actions: {
        async fetchAnime(search) {
            try {
                let urls
                if (!search) {
                    urls = `http://localhost:3000/anime/popular`
                }
                else {
                    urls = `http://localhost:3000/anime?q=${search}`
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
                    url: `http://localhost:3000/users/status`,
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
                    url: `http://localhost:3000/users/generate-mid-trans-token`,
                    headers: {
                        accesstoken: localStorage.getItem("acess_Token")
                    }
                })
                const cb = this.changeStatus
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        cb()
                        alert("payment success!"); console.log(result);
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
                    url: "http://localhost:3000/users/login",
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
        async postById(postId) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://open-cup-production.up.railway.app/pub/posts/${postId}`
                })
                this.post = data
            } catch (error) {
                console.log(error)
            }
        },
        async register(dataSignUp) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `https://open-cup-production.up.railway.app/pub/register`,
                    data: dataSignUp
                })
                this.sweetAlertSuccess("Register Success")
                this.router.push('/')
            } catch (error) {
                this.sweetAlertFailed(error.response.data.message)
            }
        },
    }
})
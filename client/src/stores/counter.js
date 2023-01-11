import { defineStore } from 'pinia'
import axios from 'axios'
export const useAnimeStore = defineStore("post", {
    state() {
        return {
            isLogin:false,
            listsOfAnime: [],
        };
    },
    actions: {
        async fetchAnime(search) {
            try {
              let urls
              if(!search){
                urls=`http://localhost:3000/characters/showPopular`
              }
              else{
                urls=`http://localhost:3000/characters?q=${search}`
              }
                const { data } = await axios({
                    method: "GET",
                    url:urls,
                });
                this.listsOfAnime = data.data
            } catch (error) {
                console.log(error)
            }
        },
        async handleLogin(dataLogin) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: "https://open-cup-production.up.railway.app/pub/login",
                    data: dataLogin
                })
                localStorage.setItem("acess_Token", data.acessToken)
                localStorage.setItem("userName", data.userName)
                this.isLogin=true
                this.sweetAlertSuccess("Success Login")
                this.router.push("/")
            } catch (error) {
                this.sweetAlertFailed(error.response.data.message)
            }
        },
        handleLogOut() {
            this.isLogin=false
            localStorage.clear()
            this.sweetAlertSuccess("Success Log Out")
            this.router.push("/")
        },
        async postById(postId){
            try {
                const{data}=await axios({
                    method:"GET",
                    url:`https://open-cup-production.up.railway.app/pub/posts/${postId}`
                })
                this.post=data
            } catch (error) {
                console.log(error)
            }
        },
        async register(dataSignUp){
            try {
                const {data}=await axios({
                    method:"POST",
                    url:`https://open-cup-production.up.railway.app/pub/register`,
                    data:dataSignUp
                })
                this.sweetAlertSuccess("Register Success")
                this.router.push('/')
            } catch (error) {
                this.sweetAlertFailed(error.response.data.message) 
            }
        },
    }
})
import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state() {
        return {
            email: '',
            password: '',
            acces_token:'',
            movieFav:[]
        }
    },
    actions: {
        async login(dataLogin) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/user/login',
                    data: {
                        email: dataLogin.email,
                        password: dataLogin.password
                    }
                })
                Swal.fire({
                    title: 'Success Login',
                    text: `Welcome`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                this.router.push('/')
                this.email = ''
                this.password = ''
                this.acces_token = data.acces_token
                localStorage.setItem("acces_token", data.acces_token)
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        },
        async register(dataRegister) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/user/register',
                    data: {
                        username: dataRegister.username,
                        email: dataRegister.email,
                        password: dataRegister.password
                    }
                })
                Swal.fire({
                    title: 'Success Register',
                    text: `Lets Login`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                this.router.push('login')
                this.username= ''
                this.email= ''
                this.password= ''
            } catch (error) {
                console.log(error);
            }
        },
        async Fav(id){
            try {
                const { data }= await axios({
                    method:"POST",
                    url:'http://localhost:3000/movie/favorite/'+id,
                    headers:{
                        acces_token: localStorage.getItem('acces_token')
                    }
                })
                Swal.fire({
                    title: 'Success Add To Favorite',
                    text: `Add more If You Want`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: "Movie Already Added",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        },
        async bookmark(){
            try {
                const { data }= await axios({
                    method:"GET",
                    url:'http://localhost:3000/movie/favorite/allfavorite',
                    headers:{
                        acces_token: localStorage.getItem('acces_token')
                    }
                })
                this.movieFav = data
            } catch (error) {
                console.log(error);
            }
        },
        async deleteFav(id){
            try {
                const { data } = await axios({
                    method:'DELETE',
                    url:'http://localhost:3000/movie/favorite/'+id,
                    headers:{
                        acces_token: localStorage.getItem('acces_token')
                    }
                })
                Swal.fire({
                    title: 'Success Delete',
                    text: `delete movie succes`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                this.bookmark()
                this.router.push('/favorite')
            } catch (error) {
                console.log(error);
            }
        }
    }
})
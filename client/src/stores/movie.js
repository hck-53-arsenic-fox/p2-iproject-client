import { defineStore } from "pinia";
import axios from 'axios'

export const useMovieStore = defineStore('movie',{
    state(){
        return{
            movieDetail:{},
            movies:[],
            totalMovie : 20,
            currentPage : 1,
            totalPage : 0,
            rowsPerPage : 5,
            query:{
                page:1
            },
            qr:'',
            qrtype:''
        }
    },
    actions:{
        async fetchMovies(){
            try {
                const apakek = this.query

                if(!apakek.page){
                    delete apakek.page
                }
                this.router.replace({name:"home",query:apakek})
                const { data } = await axios({
                    method:'GET',
                    url: `http://localhost:3000/movie/allmovie`,
                    params:{page:this.query.page},
                    headers:{
                        acces_token : localStorage.getItem("acces_token")
                    }
                })
                this.movies = data.movies
                this.totalMovie = data.count
                this.currentPage = this.query.page
                this.totalPage = data.totalPage
                this.rowsPerPage = data.rowsPerPage
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMovieDetail(id){
            try {
                const { data } = await axios({
                   method:'GET',
                   url:"http://localhost:3000/movie/detail/"+id,
                   headers:{
                    acces_token : localStorage.getItem("acces_token")
                   } 
                })
                this.movieDetail = data
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: "Your Status Not Premium",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        },
        async qrCode(id){
            try {
                const response  = await axios({
                    method:'POST',
                    url:'http://localhost:3000/genqr/'+id
                }) 
                
                this.qrtype=response.headers['content-type']
                this.qr=response.data
            } catch (error) {
                console.log(error);
            }
        },
        async status(){
            try {
                let { data }=await axios({
                    method:"POST",
                    url:'http://localhost:3000/movie/genmidtoken',
                    headers:{
                        acces_token : localStorage.getItem("acces_token")
                    }
                })
                console.log(data);
                window.snap.pay(`${data.midtransToken.token}`, {
                    onSuccess:async (result) =>{
                      /* You may add your own implementation here */
                      await this.changeStat()
                    },
                    onPending: function(result){
                      /* You may add your own implementation here */
                      alert("wating your payment!"); console.log(result);
                    },
                    onError: function(result){
                      /* You may add your own implementation here */
                      alert("payment failed!"); console.log(result);
                    },
                    onClose: function(){
                      /* You may add your own implementation here */
                      alert('you closed the popup without finishing the payment');
                    }
                  })
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: "This account Already Premium",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        }, 
        async changeStat(){
            try {
                const { data }=await axios({
                    method:'PATCH',
                    url:'http://localhost:3000/movie/payment',
                    headers:{
                        acces_token : localStorage.getItem("acces_token")
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
})

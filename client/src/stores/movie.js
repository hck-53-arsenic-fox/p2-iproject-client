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
            }
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
                   url:"http://localhost:3000/customer/allmovie/"+id 
                })
                this.qrCode(`http://localhost:5173/detail/${id}`)
                this.movieDetail = data
            } catch (error) {
                console.log(error);
            }
        } 
    }
})

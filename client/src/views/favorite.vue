<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';
export default{
    computed:{
        ...mapState(useUserStore,['movieFav'])
    },
    methods:{
        ...mapActions(useUserStore,['bookmark','deleteFav'])
    },
    created(){
        this.bookmark()
    }
}
</script>

<template>
    <div class="container mx-auto mt-4">
      <div class="row">
        <div class="col-md-4" v-for="movieFavs in movieFav" :key="movieFavs.id" >
          <div class="card" style="width: 18rem;" >
            <img :src="movieFavs.Movie.image" class="card-img-top box"
              alt="...">
            <div class="card-body">
              <div class="d-flex flex-row">
                <h5 class="card-title limit-text1">Title: {{movieFavs.Movie.title}}</h5>
              </div>
              <p class="card-text limit-text">Synopsis: {{movieFavs.Movie.description}}</p>
              <p class="card-text">Rating: {{movieFavs.Movie.rating}}/10</p>
              <p class="card-text">Year: {{movieFavs.Movie.year}}</p>
              <button @click="deleteFav(movieFavs.id)" class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body" >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
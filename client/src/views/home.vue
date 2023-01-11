<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';
import { useMovieStore } from '../stores/movie';
import navbarVue from '../views/navbar.vue';

export default {
  computed:{
    ...mapState(useMovieStore,['movies','movieDetail','totalPage','query']),
    ...mapWritableState(useUserStore,['acces_token']),
    ...mapWritableState(useMovieStore,['query'])
  },
  methods:{
    ...mapActions(useMovieStore,['fetchMovies','status']),
    ...mapActions(useUserStore,['Fav']),
    qPage(val){
      this.query.page = val
      this.fetchMovies()
    }
  },
  created(){
    this.fetchMovies()
    this.acces_token=localStorage.getItem('acces_token')
  },
  components:{
    navbarVue
  }
}
</script>
<template>
  <navbarVue></navbarVue>
  <div class="container mx-auto mt-4">
    <div class="row ">
      <div class="col-md-4 " v-for="movie in movies" :key="movie.id">
        <div class="card " style="width: 18rem;" >
          <img :src="movie.image" class="card-img-top box"
            alt="...">
          <div class="card-body">
            <p class="card-text limit-text1">{{ movie.title }}</p>
            <p class="card-text limit-text">{{ movie.description }}</p>
            <a href="#" @click="$router.push('/detail/'+movie.id)" class="btns mr-2"><i class="fas fa-link"></i> See Detail</a>     <span v-if="acces_token" style="font-size: small;">Watch? Scan Barcode</span><span v-if="!acces_token" style="font-size: small;">LOGIN for watch</span>
            <br><br>
            <div  @click="Fav(movie.id)">
            <button v-if="acces_token" type="button" class="btn btn-warning">
              <i class="fa-solid fa-heart" style="font-size: x-small;"> Favorite</i>
            </button> <i v-if="acces_token" style="font-size: x-small;"> Add This Movie to Your Favorite </i>
          </div>
          <button v-if="acces_token " @click="status(10000)" type="button" class="btn btn-warning">
            <i class="fa-solid fa-dollar-sign" style="font-size: x-small;"> Payment</i>
          </button> <i v-if="acces_token" style="font-size: x-small;"> Subscribe for see detail </i>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div style="margin-left: 40%;">
      <nav aria-label="...">
        <ul class="pagination">
          <!-- <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li> -->
          <li v-for="value in +totalPage" :key="value.id" class="page-item active"><a class="page-link" @click.prevent="qPage(value)">{{value}}</a></li>
          <!-- <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>
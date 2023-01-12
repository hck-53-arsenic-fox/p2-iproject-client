<script>
import { mapState , mapActions } from 'pinia';
import { useMovieStore } from '../stores/movie';
    export default{
        name: 'DetailMovie', 
        computed: {
            ...mapState(useMovieStore, ['movie'])
        }, 
        methods: {
            ...mapActions(useMovieStore, ['readMovieById'])
        }, 
        created(){
            this.readMovieById(this.$route.params.id)
        }
    }
</script>

<template>
    <div class="container p-3 bg-light my-3 content">
  <section id="detail">
    <div class="row px-3 py-2">
      <div class="col-1">
        <img src="../assets/d17.png" width="50">
      </div>
      <div class="col-11">
        <h5>{{ movie.title }}</h5>

      </div>
    </div>
    <hr>
    <div class="row mb-3">
      <div class="col-md-3 col-6">
        <img :src="movie.imageUrl" style="width: 100%;">
      </div>
      <div class="col-md-9 col-6">
        <h5 class="mb-2">&#x1F552; {{ movie.duration }}</h5>
        <div class="mb-2">
          <a href="" class="btn btn-outline-secondary">2D</a>
        </div>
        <div class="mb-2">
          <a href="" class="btn btn-success">PLAYING AT</a>
        </div>
        <div class="mb-2">
          <a href="" class="btn btn-success">BUY TICKET</a>
        </div>
        <div class="mb-2">
          <a :href="movie.trailer"  target="_blank" class="btn btn-success">TRAILER</a>
        </div>
      </div>
    </div>
    <p> {{ movie.description }}</p>
    <div class="list">
      <h5>Producer:</h5>
      <p>{{ movie.producer }}</p>
    </div>
    <div class="list">
      <h5>Director:</h5>
      <p>{{ movie.director }}</p>
    </div>
    <div class="list">
      <h5>Writer:</h5>
      <p>{{ movie.writer }}</p>
    </div>
    <div class="list">
      <h5>Cast:</h5>
      <p>{{ movie.cast }}</p>
    </div>
    <div class="list">
      <h5>Distributor:</h5>
      <p>{{ movie.distributor }}</p>
    </div>
  </section>
</div>

</template>
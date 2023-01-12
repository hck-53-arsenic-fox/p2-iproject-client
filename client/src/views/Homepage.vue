<script>
import { mapActions, mapState } from 'pinia';
import { useMovieStore } from '../stores/movie';
import Card from '../components/Card.vue';
    export default{
        name: 'Homepage', 
        components: {
            Card
        },
        methods: {
            ...mapActions(useMovieStore , ['readAllMovie'])
        },
        computed: {
            ...mapState(useMovieStore, ['movies'])
        },
        created(){
            this.readAllMovie()
        }
    }
</script>

<template>
<div class="container p-3 bg-light mb-3 content">
  <header>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/banner1.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/banner3.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/banner1.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </header>
  <section id="movie">
    <div class="row">
        <Card v-for="el in movies" :key="el.id" :item="el"/>
    </div>
  </section>
</div>
</template>
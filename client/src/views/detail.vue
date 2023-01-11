<script>
import { mapActions, mapState } from 'pinia';
import { useMovieStore } from '../stores/movie';

export default{
  computed:{
    ...mapState(useMovieStore,['movieDetail','qr'])
  },
  methods:{
    ...mapActions(useMovieStore,['fetchMovieDetail','qrCode'])
  },
  created(){
    this.fetchMovieDetail(this.$route.params.id)
    this.qrCode(this.$route.params.id)
  }
}
</script>

<template>
       <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3" id="dashboard-section" >
      <div class="card w-75" >
        <div class="text-center">
    <iframe width="910" height="380" poster:="" :src="movieDetail.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
    <div class="card-body">
      <h5 class="card-title">Title: {{movieDetail.title}}</h5>
      <p class="card-text">Synopsis: {{movieDetail.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="background-color: grey;"> Genre:<span v-for="gen in movieDetail.genre"> {{ `${gen} ` }} </span></li>
      <li class="list-group-item" style="background-color: grey;">Rating: {{movieDetail.rating}}/10</li>
      <li class="list-group-item" style="background-color: grey;">Year: {{movieDetail.year}}</li>
      <li class="list-group-item" style="background-color: grey;">Writer: <span v-for="wrt in movieDetail.writers"> {{ `${wrt}   ` }} </span></li>
      <li class="list-group-item" style="background-color: grey;">director:<span v-for="dire in movieDetail.director"> {{ `${dire} ` }} </span></li>

      <li class="list-group-item text-center" style="background-color: grey;"><img :src="`data:image/png;base64${this.qr}`" alt="" width="100"></li>
      <li class="list-group-item text-center" style="background-color: grey;">
        <button @click="$router.push('/')" type="button" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;">Back</button></li>
    </ul>
  </div>
  </section>
  
  </template>
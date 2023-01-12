<script>
import { mapActions , mapState } from 'pinia';
import { useMovieStore } from '../stores/movie';
import DetailMovieInTheater from '../components/DetailMovieInTheater.vue';
export default{
        name: 'DetailTheater', 
        components: {
            DetailMovieInTheater
        },
        methods: {
            ...mapActions(useMovieStore , ['readTheaterById'])
        }, 
        computed: {
            ...mapState(useMovieStore, ['theater'])
        }, 
        created(){
            this.readTheaterById(this.$route.params.id)
        }
    }
</script>

<template>

    <div class="container p-3 bg-light my-3 content">
<section id="detail-theater">
  <h1 class="pt-2"></h1>
  <h4>
   {{ theater[0].name }} <br>
   {{ theater[0].location }} <br>
   {{ theater[0].address }} <br>
    TELEPON : {{ theater[0].phoneNumber }}
  </h4>
  <h3> Price For Today: Rp. {{ theater[0].price }},-</h3>
  <hr>
    <DetailMovieInTheater v-for="el in theater[1]" :key="el.id" :item="el"/>
</section>
</div>
</template>
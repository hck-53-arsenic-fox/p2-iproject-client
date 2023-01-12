<script>
import { useMovieStore } from '../stores/movie';
import { mapActions , mapState } from 'pinia';
import Card from '../components/Card.vue';
    export default{
        name: 'Comming Soon', 
        components: {
            Card
        }, 
        computed: {
            ...mapState(useMovieStore, ['commingsoon'])
        }, 
        methods: {
            ...mapActions(useMovieStore , ['readMovieCommingSoon'])
        }, 
        created(){
            this.readMovieCommingSoon()
        }
    }
</script>

<template>
    <div class="container p-3 bg-light mb-3 content">
        <section id="movie">
         <div class="row">
             <Card v-for="el in commingsoon" :key="el.id" :item="el"/>
        </div>
  </section>
    </div>
</template>
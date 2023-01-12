<script>
import TheaterCard from '../components/TheaterCard.vue';
import { mapActions , mapState } from 'pinia';
import { useMovieStore } from '../stores/movie';
    export default{
        name: "Theater", 
        methods: {
            ...mapActions(useMovieStore, ['readAllTheater'])
        }, 
        computed: {
            ...mapState(useMovieStore , ['theaters'])
        }, 
        created(){
            this.readAllTheater(this.$route.params.id)
        },
        components: {
            TheaterCard
        }
    }
</script>

<template>
    <div class="container p-3 bg-light my-3 content">
      <section id="theater">
        <div class="list-group list-group-flush">
            <TheaterCard  v-for="el in theaters" :key="el.id" :item="el"/>
        </div>
       </section>
    </div>
</template>
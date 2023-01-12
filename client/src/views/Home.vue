<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import {usePiniaStore} from '../stores/usePiniaStore.js'
import PlanetCard from '../components/PlanetCard.vue'

export default {
    name: "Home",
    components: {
        
    },
    computed: {
        ...mapState(usePiniaStore, ["dataPlanets"]),
        ...mapWritableState(usePiniaStore, ["queryPlanets"])
    },
    methods: {
        ...mapActions(usePiniaStore, ["planetaryInfo"]),
        handleSearch(){
            this.planetaryInfo()
        }
    },
    created() {
        // this.planetaryInfo()
    }
}
</script>

<template>
    <div class="flex justify-center ...">
    <div class="form-control input-group-lg">
  <div class="input-group">
    <input v-model="this.queryPlanets.search" type="text" placeholder="Search your planet here…" class="input input-bordered" />
    <button @click.prevent="handleSearch" class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{{ dataPlanets[0].name }}</h1>
      <p class="py-3">mass: {{ dataPlanets[0].mass }}</p>
      <p class="py-1">radius: {{ dataPlanets[0].radius }}</p>
      <p class="py-1">period: {{ dataPlanets[0].period }}</p>
      <p class="py-1">temperature: {{ dataPlanets[0].temperature }}</p>
      <p class="py-1">distance_light_year: {{ dataPlanets[0].distance_light_year }}</p>
    </div>
  </div>
</div>

</template>
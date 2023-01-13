<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import {usePiniaStore} from '../stores/usePiniaStore.js'
import PlanetCard from '../components/PlanetCard.vue'

export default {
    name: "Home",
    components: {
        PlanetCard
    },
    computed: {
        ...mapState(usePiniaStore, ["dataPlanets", "dateAndTime"]),
        ...mapWritableState(usePiniaStore, ["queryPlanets", "dataUser"])
    },
    methods: {
        ...mapActions(usePiniaStore, ["planetaryInfo", "getProfile", "timeStamper", "subscribe"]),
        handleSearch(){
            this.planetaryInfo()
        }
    },
    created() {
        this.getProfile()
        this.timeStamper()
    }
}
</script>

<template>
  
  <img src="../solar-space-wallpaper.jpg" class="-z-50 fixed w-screen h-screen" style="opacity: .7;" alt="">

<!-- <p> {{ dateAndTime }} {{ dataUser.name }}. Explore the planets you are curious about. Don't forget to Subscribe to see more of our galleries</p> -->

<div class="container flex">

<div>
  <a v-if="dataUser.isSubscribed === true" href=""><RouterLink to=/AstroPage><h1 style="color:darkslategray">Explore the Asto Gallery</h1></RouterLink></a>
  <a v-else-if="!dataUser.isSubscribed" @click.prevent="subscribe" href=""><h1>Click to subscribe and explore our Gallery</h1></a>
</div>

  <!-- <div class="input-group">
    <input v-model="this.queryPlanets.search" type="text" placeholder="Search your planet here…" class="input input-bordered" />
    <button @click.prevent="handleSearch" class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div> -->


  <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
      <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
    </div>
  </div>
</div>

  <div v-if="dataPlanets[0]" class="hero-content text-center py-100">
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



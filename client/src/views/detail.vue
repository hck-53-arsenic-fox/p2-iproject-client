<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"


export default {
  name: 'detail',
  components: {

  },
  computed: {
    ...mapState(useResortStore, ['resort', 'mapToken'])
  },
  methods: {
    ...mapActions(useResortStore, ['fetchOneResort']),
  },
  created() {
    this.fetchOneResort(this.$route.params.id)

  },
  beforeUpdate() {
    mapboxgl.accessToken = this.mapToken;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.resort.geometry.coordinates,
      zoom: 15
    })
    new mapboxgl.Marker()
      .setLngLat(this.resort.geometry.coordinates)
      .addTo(map);


  }
}

</script>

<template>
  <section class="flex items-center justify-center h-screen bg-[#EBF1FF] bg-cover">

    <!-- card container -->
    <div
      class="relative flex flex-col m-6 space-y-10 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 md:m-0 md:h-5/6 md:w-5/6 bg-opacity-50 h-full w-full divide-x-2">

      <!-- left side -->
      <div class="flex basis-1/3 p-4 md:p-5 bg-white w-full rounded-2xl flex-col justify-center">

        <!-- Top -->
        <div class="p-2 m-2 rounded-xl">

        </div>

        <!-- bottom -->
        <div class="w-full rounded-xl p-2 m-1 justify-center items-center">
          <textarea class="rounded-lg border-gray-100 bg-[#EBF1FF] align-center ml-4" name="" id="" cols="40"
            rows="5"></textarea>
          <div class="flex items-center justify-center mt-2">
            <button class="bg-[#05B384] hover:bg-[#06D6A0] py-2 px-5 text-white rounded-xl mt-2">
              Add Review
            </button>
          </div>
        </div>



      </div>

      <!-- right side -->
      <div class="flex flex-col basis-2/3 p-4 md:p-5 bg-white w-full h-full rounded-2xl">

        <!-- top -->
        <div class="flex flex-col justify-center items-center py-4">
          <h2 class="mb-3 text-4xl font-light p-3">{{ resort.title }}</h2>
          <img :src="resort.imageUrl" alt="" class="rounded object-cover duration-200 w-80 hover:scale-105">
        </div>

        <!-- bottom -->
        <div class="flex flex-col justify-center items-center p-4">
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            {{ resort.description }}
          </p>
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            {{ resort.price }}
          </p>
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            {{ resort.location }}
          </p>
        </div>


      </div>

    </div>
  </section>

</template>



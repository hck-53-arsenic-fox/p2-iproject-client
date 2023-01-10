<script>
import mapboxgl from "mapbox-gl"
import CreateOrder from "../components/CreateOrder.vue";
import { mapWritableState, mapActions, mapState, storeToRefs  } from 'pinia'
import { useGeoStore } from '../stores/geoData'
import "mapbox-gl/dist/mapbox-gl.css"

export default {
  components:{
    CreateOrder,
  },
  computed:{
    ...mapState(useGeoStore, ['access_token', 'coords']),
    // ...mapWritableState(useGeoStore,['access_token', 'coords']),
  },
  data(){
    return {
    }
  },

  props:['sections'],
  emits:['activatedMenu'],
  data(){
    return {
    }
  },
  methods: {
    activatedMenu(section){
      this.$emit('activatedMenu', section)
    },
    ...mapActions(useGeoStore, ['rGeocode']),
  },
  mounted() {
    mapboxgl.accessToken = this.access_token
    // if ("geolocation" in navigator) { 
    //   navigator.geolocation.getCurrentPosition(position => {
    //     const originGeoPosition = {
    //       lon:position.coords.longitude, 
    //       lat:position.coords.latitude
    //     }

    //     const map = new mapboxgl.Map({
    //       container: 'map', // container ID
    //       style: 'mapbox://styles/fahmifachrizal/clbt6yvqv000e14nwjfr82h8i', // style URL
    //       center: [originGeoPosition.lon, originGeoPosition.lat],
    //       zoom: 14
    //     })

    //     this.rGeocode({ geoPosition:originGeoPosition, type:'origin' })
    //     const originMarker = new mapboxgl.Marker({ color: '#0284c7' })
    //       .setLngLat([originGeoPosition.lon, originGeoPosition.lat])
    //       .addTo(map);

        
    //     let destinationMarker = []
    //     map.on('click', (e) => {
    //       if (destinationMarker.length) {
    //         destinationMarker.forEach((marker) => marker.remove())
    //         destinationMarker=[]
    //       }
    //       const destinationGeoPosition = {
    //         lon:e.lngLat.lng,
    //         lat:e.lngLat.lat
    //       }
    //       this.rGeocode({ geoPosition:destinationGeoPosition, type:'destination' })
    //       const currentMarker = new mapboxgl.Marker({ color: '#f87171' })
    //         .setLngLat([destinationGeoPosition.lon, destinationGeoPosition.lat])
    //         .addTo(map);
    //         destinationMarker.push(currentMarker);

    //         // most southwestern and most northeastern points
    //         let bbox = [
    //           [Math.min(originGeoPosition.lon, destinationGeoPosition.lon), Math.min(originGeoPosition.lat, destinationGeoPosition.lat)],
    //           [Math.max(originGeoPosition.lon, destinationGeoPosition.lon), Math.max(originGeoPosition.lat, destinationGeoPosition.lat)]
    //         ]
    //         map.fitBounds(bbox, { padding:{top: 300, bottom: 100, left: 100, right: 100} })
    //     })

    //   })
    // } else {'Location not found'}

    
    // map.addControl(
    //   new MapboxDirections({
    //     accessToken: mapboxgl.accessToken,
    //     controls: {
    //       instructions: false,
    //       profileSwitcher: false,
    //     },
    //     styles:styles
    //   }),
    //   'top-left'
    // )
  },
};
</script>

<template>
  <div class="bg-white h-screen lg:hidden">

    <div id='mapSelection' class="h-[calc(100%_-_6rem)] w-full relative" >
      <!-- <div id="map" class="h-full w-full bg-black"></div> -->
      <img src="../assets/images/staticBackground.png" alt="static" class="h-full object-cover" />

      <div class="w-full absolute top-0 p-2 rounded-xl">
        <div class="w-full rounded-xl mb-4">
            <form>
            <div class="flex grid-cols-5 w-full rounded-xl outline outline-1 outline-slate-200 shadow-lg">
              <div class="grid-rows-2 w-12 rounded-xl">
                <div class="h-12 w-full bg-white rounded-t l-xl">
                  <span class="grid text-sky-600 text-xl place-items-center py-4 shadow-lg"><i class="fa-solid fa-circle-user"></i></span>
                </div>
                <div class="h-12 w-full bg-white rounded-bl-xl">
                  <span class="grid text-red-400 text-2xl place-items-center py-3 shadow-lg"><i class="fa-solid fa-location-dot"></i></span>
                </div>
              </div>
    
              <div class="col-span-4 w-full">
                <input type="text" placeholder="Origin" :value="coords?.origin.address" class="m-0 h-12 w-full border-none focus:ring-0 focus:outline-none text-slate-600">
                <input type="text" placeholder="Destination" :value="coords?.destination.address" class="m-0 h-12 w-full border-none focus:ring-0 focus:outline-none text-slate-600">
              </div>
    
              <div class="h-24 px-2 bg-white grid place-items-center rounded-r-xl">
                <span class="text-xl text-slate-600"><i class="fa-solid fa-arrows-up-down"></i></span>
              </div>
            </div>
          </form>
          </div>
  
        <div class="w-full h-6 z-50 grid justify-center items-center duration-1000 transition-opacity">
          <span class="text-xs text-slate-600 bg-white p-2 px-4 rounded-full border shadow-md">Tap on map to add destination</span>
        </div>
      </div>


      <div @click="activatedMenu('homePage')" class="absolute bottom-0 p-2 shadow-xl">
        <div class="bg-white px-1 rounded-xl">
            <i class="fa-solid fa-caret-left px-1"></i>
            <i class="fa-solid fa-house px-1"></i>
        </div>
      </div>
    </div>

    <!-- Create Order -->
    <CreateOrder @activatedMenu="activatedMenu" :sections="sections" class="z-50"/>
  </div>
</template>

<!-- <style>
.mapboxgl-ctrl-top-left {
  width: 100% !important; 
  padding: 10px !important;
}

.mapboxgl-ctrl,
.mapboxgl-ctrl-directions {
  width: 100% !important;
  margin: 0 !important;
  max-width: 100% !important;
}

.directions-icon-depart{
  background-image: url() !important;
}

.directions-icon-depart:before {
  font-family:'FontAwesome' !important;
  content: "\f192" !important;
  color:white !important;
}

.directions-icon-arrive{
  background-image: url() !important;
}

.directions-icon-arrive:before {
  font-family:'FontAwesome' !important;
  content: "\f3c5" !important;
  color:white !important;
}
</style> -->
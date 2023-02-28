<template>
  <GoogleMap
    id="map"
    ref="mapRef"
    :api-key="map.key"
    :center="map.center"
    :zoom="map.zoom"
  >
    <CustomMarker
      v-for="coordinate in coordinates"
      :options="{
        position: {
          lat: coordinate.position.lat,
          lng: coordinate.position.lng,
        },
      }"
      :key="coordinate.i"
      class="test-hover"
    >
      <div
        class="placemarker h-[180px] w-[120px] group hover:cursor-pointer hover:z-100 hover:scale-125 duration-150"
      >
        <div
          class="placemarker h-[150px] w-[120px] flex flex-col items-center bg-gradient-to-r from-[#b8e994] to-[#bdc3c7] rounded-md shadow-lg p-3 duration-150"
        >
          <img
            class="rounded-lg h-[80px] w-[100px]"
            :src="
              coordinate.image
                ? coordinate.image
                : 'https://via.placeholder.com/150'
            "
            alt="icon"
          />
          <p class="text-xs">{{ coordinate.name }}</p>
        </div>
      </div>
    </CustomMarker>
  </GoogleMap>
</template>

<script>
import {
  ref,
  watchEffect,
  watch,
  onBeforeMount,
  reactive,
  onMounted,
} from "vue";
import {
  GoogleMap,
  Marker,
  MarkerCluster,
  CustomMarker,
  // clearMarkers
} from "vue3-google-map";
import { debounce } from "vue-debounce";
import { useTravelokalStore } from "../stores/travelokal";
let timeOut = null;

export const sleep = async (timeInMillis) => {
  return new Promise((resolve, _) => {
    timeOut = setInterval(() => {
      // clearTimeout(timeOut);
      resolve();
    }, timeInMillis);
  });
};
// error uncaught in promise

export default {
  components: { GoogleMap, Marker, MarkerCluster, CustomMarker },
  props: ["type"],
  setup() {
    const mapRef = ref(null);
    const coordinates = reactive([]);
    // const { values } = computed(() => {
    //   return
    // });
    const store = useTravelokalStore();

    // console.log(values[0].position, "locatoins");
    const map = {
      key: "AIzaSyDyR0h23wRzww-WoRxAYAernH9Ll9We7ZY ",
      center: {
        lat: -6.260745,
        lng: 106.7814398,
      },
      zoom: 15,
    };

    // const placeMarkers = store.places.map((place) => {
    //   console.log(store.places, "storeplaces");
    //   //     // console.log(store.places);
    //   return {
    //     position: {
    //       lat: place.latitude,
    //       lng: place.longitude,
    //     },
    //   };
    // });
    // console.log(placeMarkers, "placeMarker");

    watchEffect(() => {
      // console.log(store.places, "storeplaces");
      //     // console.log(store.places);
      // i want to remove marker when i change the type
      // help me to code them

      if (!store.places.length) return;
      store.places.forEach((place) => {
        // console.log(place, "places");
        coordinates.push({
          name: place.name,
          image: place.photo?.images?.small.url,
          position: {
            lat: +place.latitude,
            lng: +place.longitude,
          },
        });
      });
      store.getWeatherData();
      // console.log(coordinates, "coordinates");
    });
    // console.log(map.center);

    // const markerOptions = { position: map.center, label: "L", title: "LADY LIBERTY" };

    const stopWatch = watchEffect(() => {
      const isReady = mapRef.value ? mapRef.value.ready : false;

      if (!isReady) return;

      const gmap = mapRef.value.map;
      // console.log(map.center, "asdasdasd");
      mapRef.value.map.setCenter({
        lat: map.center.lat,
        lng: map.center.lng,
      });

      gmap.addListener("zoom_changed", () => {
        console.log("Map: Zoom:", gmap.getZoom());
      });
      // gmap.addListener("center_changed", async () => {
      //   const center = gmap.getCenter();
      //   // console.log(gmap.getBounds());
      //   await sleep(1000);
      //   clearTimeout(timeOut);
      //   // console.log("Map: Center: (", center.lat(), ",", center.lng(), ")");
      // });
      gmap.addListener("bounds_changed", () => {
        // await sleep(1000);
        // clearTimeout(timeOut);
        debounce((val) => {
          // console.log(val)
          const { Ia, Ua } = gmap.getBounds();
          // console.log( gmap.getBounds(), "bounds");
          map.center.lat = store.currentPosition.latCenter;
          map.center.lng = store.currentPosition.lngCenter;
          store.boundaries.bl_latitude = Ua.lo;
          store.boundaries.tr_latitude = Ua.hi;
          store.boundaries.bl_longitude = Ia.lo;
          store.boundaries.tr_longitude = Ia.hi;
          // console.log(boundaries);
        }, 500)(1);
        // console.log(gmap.getBounds());
      });

      stopWatch();
    });

    watch(store.boundaries, (newVal, oldVal) => {
      // console.log(newVal, "<<<<<");
      //fetch data disini
      store.getPlacesData();
    });

    watch(
      () => store.type,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          coordinates.splice(0);
          mapRef.value.clearMarkers();
        }
      }
    );

    onMounted(() => {
      map.center.lat = +store.currentPosition.latCenter;
      map.center.lng = +store.currentPosition.lngCenter;
      store.gmap = mapRef;
      // console.log(mapRef, "mapref");
      (mapRef.value.center.lat = +store.currentPosition.latCenter),
        (mapRef.value.center.lng = +store.currentPosition.lngCenter);
    });
    // console.log(coordinates, "coordinates");
    return { map, mapRef, coordinates };
  },
};
</script>

<style>
.test-hover:hover {
  z-index: 200;
}

html,
body,
#app,
#map {
  height: 100%;
}

body {
  margin: 0;
}

.placemarker {
  clip-path: polygon(0 0, 100% 0, 100% 82%, 51% 100%, 0 84%);
}
</style>

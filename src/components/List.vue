<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useTravelokalStore } from "../stores/travelokal";

export default {
  computed: {
    ...mapState(useTravelokalStore, ["places"]),
    ...mapWritableState(useTravelokalStore, ["type", 'rating']),
  },
  data() {
    return {
      typeFilter: "hotels",
      ratingFilter: 4.5,
      // placesComponent: []
    };
  },
  methods: {
    setType(event) {
      this.type = event.target.value;
    },
    setRating(event) {
      this.rating = event.target.value;
    },
    ...mapActions(useTravelokalStore, ["getPlacesData", 'filteredPlaces', 'addBookmark']),
    bookmarkPlace(location_id) {
      this.addBookmark(location_id)
    }
  },
  created() {},
  watch: {
    type(newType, oldType) {
      if (newType !== undefined) {
        // console.log(newType, "newType");
        
        this.type = newType;
        this.getPlacesData();
      }
    },
    rating(newRating, oldRating) {
      if (newRating !== undefined) {
        // console.log(newRating, "newRating");
        this.rating = newRating;
        // this.filteredPlaces();
      }
    },
  },
};
</script>

<template>
  <div class="">
    <div class="h-[60px] pt-4">
      <h1 class="text-center text-lg">Restaurants, Hotels & Attractions arround you</h1>
    </div>
    <!-- options -->
    <div class="flex justify-between pb-3">
      <div>
        <form action="">
          <label for="" class="ml-2">Type</label>
          <select name="" id="" :value="type" @change="setType($event)" class="w-[150px] ml-2">
            <option value="restaurants" :selected="type === 'restaurants'">Restaurants</option>
            <option value="hotels" :selected="type === 'hotels'">Hotels</option>
            <option value="attractions" :selected="type === 'attractions'">Attractions</option>
          </select>
        </form>
      </div>
      <div>
        <form action="">
          <label for="" class="mr-2">Rating</label>
          <select name="" id="" :value="rating" @change="setRating($event)" class="w-[150px] mr-2">
            <option value="0" :selected="rating == 0">All</option>
            <option value="3" :selected="rating == 3">Above 3.0</option>
            <option value="4" :selected="rating == 4">Above 4.0</option>
            <option value="4.5" :selected="rating == 4.5">Above 4.5</option>
          </select>
        </form>
      </div>
    </div>
    <!-- card -->
    <div class="h-screen overflow-scroll bg-slate-200">
      <div
        v-for="place in places"
        :key="place.id"
        class="my-3"
        :id="`card-${place.id}`"
      >
        <div class="max-w-2xl mx-auto">
          <div
            class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 w-full justify-center mx-auto"
          >
            <a href="#">
              <img
                class="rounded-t-lg rounded-t-md w-full h-48 object-cover"
                :src="
                  place.photo
                    ? place.photo.images.medium.url
                    : 'https://source.unsplash.com/250x300?restaurant'
                "
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5 mt-3">
              <a href="#">
                <h3
                  class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"
                >
                  {{ place.name ? place.name : "No name" }}
                </h3>
              </a>
              <hr class="" />
              <div class="flex justify-between items-center mt-2.5 mb-5">
                <span>Rating</span>
                <div>
                  <span>{{ place.rating ? place.rating : "no rating" }} /</span>
                  <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
                    >5.0</span
                  >
                </div>
              </div>
              <div class="flex justify-between items-center mt-2.5 mb-5">
                <span>Price</span>
                <div>
                  <span class="text-lg text-gray-900 dark:text-white mr-3">{{
                    place.price_level ? place.price_level : "no price"
                  }}</span>
                </div>
              </div>
              <div class="flex items-center mt-2.5 mb-5 text-sm">
                <span>{{ place.ranking ? place.ranking : "no ranking" }}</span>
              </div>
              <div class="items-center justify-between mb-4">
                <p
                  class="text-slate-700 dark:text-slate-400 text-[0.7rem] rounded"
                >
                  <!-- show location -->
                  {{ place.address ? place.address : "no location" }}
                  || {{ place.phone ? place.phone : "no contacts" }}
                </p>
              </div>
              <div class="flex justify-between">
                <a
                  :href="place.website"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
                  target="_blank"
                >
                  Website
                </a>
                <a
                  :href="place.web_url"
                  class="text-slate-800 bg-[#1dd1a1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                >
                  Trip Advisor
                </a>
              </div>
              <div>
                <button
                @click="bookmarkPlace(place.location_id)"
                  href=""
                  class="text-slate-800 bg-[#feca57] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-3"
                >
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

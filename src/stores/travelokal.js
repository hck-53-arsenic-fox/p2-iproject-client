import { defineStore } from "pinia";
import axios from "axios";

export const useTravelokalStore = defineStore("travelokal", {
  state() {
    return {
      places: [],
      type: "restaurants",
      boundaries: {
        bl_latitude: +"11.847676",
        tr_latitude: +"12.838442",
        bl_longitude: +"109.095887",
        tr_longitude: +"109.149359",
      },
      currentPosition: {
        latCenter: 0,
        lngCenter: 0,
      },
      maps: null
    };
  },
  actions: {
    async getPlacesData() {
      console.log(this.type, "di store");
      try {
        const placeUrl = `https://travel-advisor.p.rapidapi.com/${this.type}/list-in-boundary`;
        const options = {
          params: {
            bl_latitude: this.boundaries.bl_latitude,
            tr_latitude: this.boundaries.tr_latitude,
            bl_longitude: this.boundaries.bl_longitude,
            tr_longitude: this.boundaries.tr_longitude,
            currency: "IDR",
          },
          headers: {
            "X-RapidAPI-Key":
              "fb09e2e600mshc49247d9a15f1a6p1cbb72jsn83ad031385e8",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        };
        const { data } = await axios.get(placeUrl, options);
        // console.log(data.data);
        this.places = data.data;
        // console.log(data.data[0].photo.images.medium.url);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

import { defineStore } from 'pinia'
import axios from 'axios'
const access_token = "pk.eyJ1IjoiZmFobWlmYWNocml6YWwiLCJhIjoiY2xic2E5ejEyMjJkeTNwbGNqNncwb25xZSJ9.mFqVnQKZzXFHUYlAbL3dug"

export const useGeoStore = defineStore("geo", {
  state(){ 
    return {
      access_token:access_token,
      coords: {
        origin: { address: '', lon:'', lat:''},
        destination: { address: '', lon:'', lat:''}
      }
    }
  },

  actions: {

    async rGeocode({ geoPosition, type }){
      await axios({
          method: "GET",
          url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${geoPosition.lon},${geoPosition.lat}.json?types=neighborhood&access_token=${access_token}`
        })
        .then(({ data }) => {
          this.coords[type].address = data.features[0].place_name
          this.coords[type].lon = data.features[0].center[0]
          this.coords[type].lat = data.features[0].center[1]
        }).catch((err) => {
          console.log(err)
        })
    }
  },
});

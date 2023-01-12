import { defineStore } from "pinia";
import axios from "axios";
// import { nextTick } from "vue";
const server = "http://localhost:3000";

export const useTravelokalStore = defineStore("travelokal", {
  state() {
    return {
      places: [],
      type: "restaurants",
      rating: 4.5,
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
      maps: null,
      weather: {},
      place: {},
      bookMarks: [],
      isLogin: false,
    };
  },
  persist: true,
  actions: {
    async getPlacesData() {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${server}/places`,
          data: {
            type: this.type,
            bl_latitude: this.boundaries.bl_latitude,
            tr_latitude: this.boundaries.tr_latitude,
            bl_longitude: this.boundaries.bl_longitude,
            tr_longitude: this.boundaries.tr_longitude,
          },
        });
        this.places = data;
        // this.getWeatherData()
      } catch (error) {
        console.log(error);
      }
    },

    // async filteredPlaces() {
    //   try{
    //     const filteredPlace = this.places.filter((place) => place.rating > this.rating);
    //     this.places = filteredPlace;
    //   } catch(error) {
    //     console.log(error);
    //   }
    // }
    async getWeatherData() {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${server}/weather`,
          data: {
            lat: this.currentPosition.latCenter,
            lng: this.currentPosition.lngCenter,
          },
        });
        // console.log(data);
        // console.log(data, 'weather di store');
        this.weather = data;
      } catch (error) {
        console.log(error);
      }
    },

    async register(registerForm) {
      // console.log(registerForm);
      try {
        const { data } = await axios({
          method: "POST",
          url: `${server}/user/register`,
          data: registerForm,
        });
        this.router.push("/login");
        // console.log(data);
        Swal.fire({
          icon: "success",
          title: "Register successful, plaese login",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async login(loginForm) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${server}/user/login`,
          data: loginForm,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        Swal.fire({
          icon: "success",
          title: "Welcome",
        });
        this.router.replace("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async addBookmark(locationId) {
      try {
        // console.log(locationId);
        const place = this.places.filter((el) => {
          if (el.location_id == locationId) {
            // console.log(el);
            return {
              name: el.name,
              type: el.ranking_category,
              image_url: el.photo.images.medium.url,
              website: el.website,
              trip_advisor: el.web_url,
              price: el.price_level,
              ranking: el.ranking,
              location_id: el.location_id,
            };
          }
        });
        this.place = place[0];

        // console.log(place);
        const { data } = await axios({
          method: "POST",
          url: `${server}/bookmark`,
          data: {
            name: this.place.name,
            type: this.place.ranking_category,
            image_url: this.place.photo.images.medium.url,
            website: this.place.website,
            trip_advisor: this.place.web_url,
            price: this.place.price_level,
            ranking: this.place.ranking,
            location_id: this.place.location_id,
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        Swal.fire({
          icon: "success",
          title: "Bookmark added",
        });
        // console.log(data);
        // console.log(location_id);
        console.log("Berhasil menambahkan bookmark");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async getBookmark() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${server}/bookmark`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.bookMarks = data;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteBookmark(bookmark_id) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: `${server}/bookmark/${bookmark_id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.getBookmark();
        // console.log("berhasil delete");
        Swal.fire({
          icon: "success",
          title: "Bookmark deleted",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async logout() {
      try {
        localStorage.clear();
        Swal.fire({
          icon: "success",
          title: "See you later",
        });
        this.isLogin = false;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async handleGoogleLogin(googleCred) {
      // console.log(googleCred);
      try {
        const { data } = await axios({
          method: "post",
          url: `${server}/user/googleLogin`,
          headers: {
            google_token: googleCred,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        Swal.fire({
          icon: "success",
          title: "Welcome",
        });
        this.router.replace("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});

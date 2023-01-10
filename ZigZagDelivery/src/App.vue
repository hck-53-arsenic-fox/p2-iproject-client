<script>
// import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import axios from "axios"
import LandingPage from "./views/LandingPage.vue";
import HomePage from "./views/HomePage.vue";
import DestinationPage from "./views/DestinationPage.vue";
import OrderDetailPage from "./views/OrderDetailPage.vue";
const access_token = "pk.eyJ1IjoiZmFobWlmYWNocml6YWwiLCJhIjoiY2xic2E5ejEyMjJkeTNwbGNqNncwb25xZSJ9.mFqVnQKZzXFHUYlAbL3dug"

export default {
  components: {
    LandingPage,
    HomePage,
    DestinationPage,
    OrderDetailPage,
  },
  data() {
    return {
      sections: {
        loginPage: true,
        homePage: false,
        destinationPage: false,
        orderPage:false,
        modal: false
      },
    }
  },
  methods: {

    async activatedMenu(section) {
      Object.keys(this.sections).forEach(el => {
        this.sections[el] = false
      })
      if (section === 'loginPage') {
        localStorage.clear()
        this.sections.loginPage = true
      } else {
        this.sections[section] = true
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <LandingPage v-if="sections.loginPage" @activatedMenu="activatedMenu"/>
  <HomePage v-if="sections.homePage" 
    @activatedMenu="activatedMenu"
    :sections="sections"
    :class="{'overflow-hidden':sections.modal}"
  />
  <DestinationPage v-if="sections.destinationPage"
    @activatedMenu="activatedMenu"
    :sections="sections"
  />
  <OrderDetailPage v-if="sections.orderPage" 
  />
</template>

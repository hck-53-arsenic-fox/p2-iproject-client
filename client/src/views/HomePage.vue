<script>
import { mapActions, mapState } from 'pinia';
import Carousel from '../components/Carousel.vue';
import { usePlayerStore } from '../stores/player';

export default {
  name: "HomePage",
  components: { Carousel, Carousel },
  methods: {
    ...mapActions(usePlayerStore, ['fetchPlayers']),
  },
  computed: {
    ...mapState(usePlayerStore, ['players'])
  },
  created() {
    this.fetchPlayers()

  },
}
</script>

<template>
  <div class="site-wrap">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>



    <section class="showcase">
      
    </section>


    <div class="intro-section" id="home-section" style="background-color: #ccc; position: relative; overflow: hidden;">
      <div class="video-container">
        <video autoplay muted loop style="position: absolute; width: 100%;">
          <source src="../assets/intro-video.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div class="container">

        <div class="row align-items-center">
          <div class="col-lg-12 mx-auto text-center" data-aos="fade-up">
            <h1 class="mb-3">Find the best player around the world</h1>
            <p class="lead mx-auto desc mb-5">See best of the best ENBI E players from various parts of the state</p>
            <p class="text-center">
              <RouterLink to="/players" class="btn btn-outline-white py-3 px-5">Get Started</RouterLink>
            </p>
          </div>
        </div>

      </div>
    </div>


    <div class="site-section">
      <div class="container">

        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-8 section-heading">
            <span class="subheading">ENBI E</span>
            <h2 class="heading mb-3">THIS IS US!</h2>
            <p>The official site of the National Basketball Association. Follow the action on ENBI E scores, schedules,
              stats, news, Team and Player news.
              The ENational BIsketball Essociation (ENBI E) is a professional basketball league in North America. The
              league is composed of 30 teams (29 in the United States and 1 in Canada) and is one of the major
              professional sports leagues in the United States and Canada. It is the premier men's professional
              basketball league in the world.
            </p>
          </div>
        </div>

        <!-- Slider -->
        <div class="owl-carousel nonloop-block-14 block-14" data-aos="fade">
          <!-- <Carousel /> -->

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
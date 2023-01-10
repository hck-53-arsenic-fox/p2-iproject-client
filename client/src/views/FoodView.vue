<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import CardFood from '../components/CardFood.vue';

export default {
    components: {CardFood},
    methods: {
        ...mapActions(useCounterStore, ['fetchDataFood'])
    },
    computed: {
        ...mapState(useCounterStore, ['food'])
    },
    created(){
        this.fetchDataFood()
    }
}
</script>

<template>
    <!-- DETAIL FOOD -->
    <div class="d-flex justify-content-center flex-column">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide vh-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner mt-2" style="height: 580px">
          <div class="carousel-item active">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/07/22/0703/CGKPH-P0029-Afternoon-Tea-Set.jpg/CGKPH-P0029-Afternoon-Tea-Set.16x9.jpg?imwidth=1920"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://image-tc.galaxy.tf/wijpeg-9wuv9i4l0lj441s88y19dqimp/standard.jpg?crop=0%2C20%2C2000%2C1500"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://image-tc.galaxy.tf/wijpeg-d7nn05epnh3wepeofwedx9w35/standard.jpg?crop=0%2C20%2C2000%2C1500"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5 flex-column">
      <center>
        <h2 style="border-bottom: solid 1px black; max-width: 300px">
            Dining
        </h2>
        <p class="mt-3" style="width: 600px">
            With its innovative bars and restaurants, BlackDoorz Jakarta offers a new level of luxury experiences to culinary connoisseurs. A variety of intimate and stylish drinking, dining, and entertainment venues the majority with outdoor spaces present unique concepts and new experiences. Whichever the venue, the focus remains on providing carefully crafted, delicious food and drinks made from the finest and freshest seasonal and organic ingredients. On the weekends, rock out with our DJ until late and unwind with a refreshing signature martini or premium glass of champagne.
        </p>
      </center>
    </div>
<div class="container row row-cols-2 row-cols-md-3 g-4 mt-3" style="margin-left:5%;">
<CardFood v-for="item in food" :key="item.id" :item="item"/>
</div>
</template>
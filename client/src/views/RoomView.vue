<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Card from "../components/Card.vue"

export default {
    components : {Card},
    methods: {
        ...mapActions(useCounterStore, ['fetchDataRoom'])
    },
    computed : {
        ...mapState(useCounterStore, ['room'])
    },
    created(){
        this.fetchDataRoom()
    }
}
</script>

<template>
    <!-- ROOM PAGE -->
<div class="container mb-5" style="margin-top:85px">
      <div class="d-flex justify-content-between gap-5">
        <div class="mt-4" style="width:1000px">
            <h3 class="title">Rooms & Suites</h3>
            <p class="text">
              Experience the finest in luxury hotel stays at BlackDoorz Jakarta, with 220 oversized rooms, including 36 suites within our smoke free property. Sophisticated, spacious and contemporary guest rooms, designed with Indonesian touches and materials, all with uninterrupted views of Jakarta starting from the 25th floor. Unwind in the deep-soaking marble bath, with custom Le Labo® products, or enjoy the large, flat-screen TVs and integrated media hub. Upgrade your stay with one of our elegant suites, many featuring additional spaces such as dining and sitting areas.
            </p>
        </div>
        <div class="">
          <img
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280"
            class="img-fluid rounded"
            alt="..."
            width="1000"
          />
        </div>
      </div>
    </div>
    <div
    class="container row row-cols-2 row-cols-md-2 g-4"
    style="margin-left: 5%"
  >
    <Card v-for="item in room" :key="item.id" :item="item"/>
  </div>

</template>
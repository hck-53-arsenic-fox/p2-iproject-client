<script>
import { mapActions, mapState } from "pinia";
import CardTransaction from "../components/CardTransaction.vue";
import { useCounterStore } from "../stores/counter";
export default {
  components: { CardTransaction },
  methods: {
    ...mapActions(useCounterStore, ["handleFetchTransaction"]),
  },
  computed: {
    ...mapState(useCounterStore, ["transaction"]),
  },
  created() {
    this.handleFetchTransaction();
  },
};
</script>

<template>
  <div class="d-flex justify-content-center" style="margin-top: 80px">
    <h1 style="border-bottom: solid 2px black; max-width: 450px">CART</h1>
  </div>
  <div class="container mt-3 d-flex justify-content-center">
    <button
      type="button"
      class="btn btn-warning mt-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      style="margin-left: 10px"
    >
      How to Booking BlackDoorz?
    </button>
    <!-- modal section -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Booking BlackDoorz?
            </h1>
            <button
              type="button"
              class="btn-close btn-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li>Pay with all payment methods</li>
              <li>Verified Identity (with ID Card)</li>
              <li>Enjoy and feel the luxury of BlackDoorz</li>
              <li>Happy staycation!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-warning mt-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal-Facilites"
      style="margin-left: 10px"
    >
      Amenities At Blackdoorz?
    </button>
    <!-- modal section -->
    <div
      class="modal fade"
      id="exampleModal-Facilites"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Amenities at Blackdoorz
            </h1>
            <button
              type="button"
              class="btn-close btn-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li>Free Internet Access</li>
              <li>Free Parking</li>
              <li>On Site Restaurants</li>
              <li>Room Service</li>
              <li>Fitness Center</li>
              <li>Pool</li>
              <li>Spa</li>
              <li>Business Services</li>
              <li>Laundry</li>
              <li>Concierge</li>
              <li>Meeting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-warning mt-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal-Area"
      style="margin-left: 10px"
    >
    Area Attractions around BlackDoorz?
    </button>
    <!-- modal section -->
    <div
      class="modal fade"
      id="exampleModal-Area"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
                Area Attractions
            </h1>
            <button
              type="button"
              class="btn-close btn-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
                Located in the heart of Jakarta, BlackDoorz Jakarta allows you to explore the city in all ways from shopping, to cultural destinations, to outdoor recreation.  
            </p>
            <ul>
              <li>Galeri Indonesia Kaya, 4.4 MI / 7.06 KM AWAY</li>
              <li>The Indonesia National Gallery, 1.6 MI / 2.63 KM AWAY</li>
              <li>Plaza Indonesia Shopping Center, 4.3 MI / 6.89 KM AWAY</li>
              <li>Grand Indonesia Shopping Town, 4.4 MI / 7.15 KM AWAY</li>
              <li>National Monument (Indonesia), 1.6 MI / 2.56 KM AWAY</li>
              <li>Istiqlal Mosque, 3.6 MI / 5.79 KM AWAY</li>
              <li>Senayan National Golf Club, 5.5 MI / 8.93 KM AWAY</li>
              <li>Jakarta Aquarium, 4.5 MI / 7.24 KM AWAY</li>
              <li>Kidzania Jakarta, 5.8 MI / 9.27 KM AWAY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container row row-cols-2 row-cols-md-3 g-4 mt-3 mb-5"
    style="margin-left: 5%"
  >
    <CardTransaction v-for="item in transaction" :key="item.id" :item="item" />
  </div>
</template>

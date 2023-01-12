<script>
import { useFetchStore } from "../stores/fetchData";
import { mapActions, mapState } from "pinia";
export default {

  computed: {
    ...mapState(useFetchStore,['myOrderDetail'])
  },
  methods: {
    ...mapActions(useFetchStore,['fetchOrderDetail'])
  },
  created(){
    this.fetchOrderDetail(this.$route.params.id)
  }
};
</script>

<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="fontstyle">Your Order Detail {{ myOrderDetail.orderIdNumber }}</h1>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-around">
    <div class="card1" style="border-radius: 1rem;">
      <div class="row g-3 align-items-start pt-3 ps-3">
        <div class="col-auto text-end">
          <h6>Customer Name:</h6>
          <h6>Phone Number:</h6>
          <h6>Shoes Brand:</h6>
          <h6>Shoes Size:</h6>
          <h6>Shoes Color:</h6>
          <h6>Shoes Material:</h6>
          <h6>Service Name:</h6>
          <h6>Order Status:</h6>
          <h6>Order Date:</h6>
          <h6>Estimated Complete Date:</h6>
          <h6>Complete Date:</h6>
        </div>
        <div class="col-auto text-start">
          <h6>{{ myOrderDetail.User.username }}</h6>
          <h6>{{ myOrderDetail.User.phoneNumber }} <span v-if="myOrderDetail.phoneNumberPIC"> or {{ myOrderDetail.phoneNumberPIC }}</span></h6>
          <h6>{{ myOrderDetail.shoesBrand }}</h6>
          <h6>{{ myOrderDetail.shoesSize }}</h6>
          <h6>{{ myOrderDetail.shoesColor }}</h6>
          <h6>{{ myOrderDetail.shoesMaterial }}</h6>
          <h6>{{ myOrderDetail.Service.name }}</h6>
          <h6>{{ myOrderDetail.status }}</h6>
          <h6>{{ myOrderDetail.createdAt }}</h6>
          <h6>{{ myOrderDetail.estimatedDate }}</h6>
          <h6>{{ myOrderDetail.completedDate }}</h6>
        </div>
      </div>
      <div class="row g-3 align-items-start pt-3 px-3">
        <div class="col-auto text-center">
          <h4>Before</h4>
          <img 
          class="p-2 mb-3 card-size" style="border-radius: 1rem;"
          :src="myOrderDetail.photo" alt="">
        </div>
        <div class="col-auto text-center">
          <h4>After</h4>
          <img 
          class="p-2 card-size" style="border-radius: 1rem;"
          :src="myOrderDetail.photoAfter" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

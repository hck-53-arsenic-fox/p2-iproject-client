<script>
export default {};
</script>

<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="fontstyle">Your Order Detail</h1>
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
          <h6>Order Date:</h6>
          <h6>Order Status:</h6>
          <h6>Complete Date:</h6>
        </div>
        <div class="col-auto text-start">
          <h6>Ibnu</h6>
          <h6>87186273612</h6>
          <h6>Nike</h6>
          <h6>43 EUR</h6>
          <h6>Black</h6>
          <h6>Leather</h6>
          <h6>Premium Cleaning</h6>
          <h6>Now</h6>
          <h6>On Process</h6>
          <h6>3 days ETC</h6>
        </div>
      </div>
      <div class="row g-3 align-items-start pt-3 px-3">
        <div class="col-auto text-center">
          <h4>Before</h4>
          <img 
          class="p-2 mb-3 card-size" style="border-radius: 1rem;"
          src="../assets/istockphoto-1250208695-612x612.jpeg" alt="">
        </div>
        <div class="col-auto text-center">
          <h4>After</h4>
          <img 
          class="p-2 card-size" style="border-radius: 1rem;"
          src="../assets/istockphoto-629962200-612x612.jpeg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

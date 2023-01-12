<script>
    export default {
        name: "DetailMovieinTheater", 
        data(){
          return {
            id: this.$route.params.theaterId,
          }
        },
        props: ["item"]
    }
</script>

<template>
  <div class="row mb-3">
    <div class="col-md-2 col-6">
      <img :src="item.imageUrl" style="width: 100%;">
    </div>
    <div class="col-md-10 col-6">
        <a href="" class="btn btn-outline-secondary">2D</a>
        <a href="" class="ms-2 btn btn-outline-secondary">D17+</a>
      <p class="mt-2">&#x1F552; {{ item.duration }}  Minutes</p>
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <h2>10-01-2023</h2>
  </div>
  <div class="button mt-3">
    <a href="" v-for="el in item.schedule"  @click.prevent="$router.push(`/checkout/${el.id}`)" class="ms-1 btn btn-secondary">{{ el.time }}</a>
  </div>
  <hr>
</template>


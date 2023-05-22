<script>
export default {
  props: ["el"],
  methods: {
    // async getImgUrl(imagePath) {
    //   require("@/assets/" + imagePath);
    // },
  },
};
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card card1 border mx-5 mb-2">
      <img
        :src="el.image"
        class="card-img-top px-3 pt-3"
      />
      <div class="card-body">
        <h5 class="card-title">{{ el.name }}</h5>
        <p class="card-text">
          <span class="">Price:</span> Rp {{ el.price }} <br />
          <span class="">Estimated Day to Finish:</span>
          {{ el.estimatedDay }} Days
        </p>
      </div>
    </div>
  </div>
</template>

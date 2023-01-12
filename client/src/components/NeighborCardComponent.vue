<script>
export default {
  name: "NeighborCardComponent",
  props: ["neighbor"],
};
</script>

<template>
  <!-- NeighborCard -->
  <div class="col-4 mb-3">
    <div class="card p-3 rounded-3">
      <div class="row align-items-center">
        <div class="col-5">
          <img
            :src="neighbor.image"
            alt="logo"
            class="mx-auto d-block"
            style="width: 100px"
          />
        </div>
        <div class="col-7">
          <h5 class="mb-0">{{ neighbor.username }}</h5>
          <p class="mb-0">
            Home Number : <strong>{{ neighbor.homeNumber }}</strong>
          </p>
          <p class="mb-0">
            Email : <strong>{{ neighbor.email }}</strong>
          </p>
          <RouterLink to="/chat" class="mb-0">
            <span class="badge rounded-pill bg-success text-light">Chat</span>
            <!-- <span class="badge rounded-pill bg-warning text-dark">Tuesday</span> -->
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- End of NeighborCard -->
</template>

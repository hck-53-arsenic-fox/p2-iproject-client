<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {

  computed: {
    ...mapState(useCounterStore, ["detailRoom"]),
  },
  methods: {
    ...mapActions(useCounterStore,  ["handleDetailRoomById"]),
  },
  created() {
    this.handleDetailRoomById(this.$route.params.id);
}
}
</script>

<template>
    <!-- DETAIL CARD -->
<div class="container mb-5" style="margin-top:160px">
      <div class="d-flex justify-content-between gap-5">
        <div class="mt-4" style="width:1000px">
            <h2 class="title">{{ detailRoom.name }}</h2>
            <p class="text mt-3">
             {{ detailRoom.description }}
            </p>
            <h5 class="mt-3">
              Rp. {{detailRoom.price}}/Night
            </h5>
        <button class="btn btn-warning mt-3">Booking Now</button>

        </div>
        <div class="">
          <img
            :src="detailRoom.imageUrl"
            class="img-fluid rounded"
            alt="..."
            width="1000"
          />
        </div>
      </div>
    </div>
</template>
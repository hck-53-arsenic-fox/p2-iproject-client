<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["detailRoom", "qrCode"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["handleDetailRoomById"]),
  },
  created() {
    this.handleDetailRoomById(this.$route.params.id);
  },
};
</script>

<template>
  <!-- DETAIL CARD -->
  <div class="container mb-5" style="margin-top: 160px">
    <div class="d-flex justify-content-between gap-5">
      <div class="mt-4" style="width: 1000px">
        <h2 class="title">{{ detailRoom.name }}</h2>
        <p class="text mt-3">
          {{ detailRoom.description }}
        </p>
        <h5 class="mt-3">Rp. {{ detailRoom.price }}/Night</h5>
        <button class="btn btn-warning mt-3">Booking Now</button>
        <!-- Vertically centered modal -->
        <button
          type="button"
          class="btn btn-warning mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="margin-left: 10px"
        >
          <img src="../assets/qrcode.svg" alt="" />
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
                  Scan QR Code - BlackDoorz
                </h1>
                <button
                  type="button"
                  class="btn-close btn-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <img :src="qrCode.qrcode" alt="" />
              </div>
            </div>
          </div>
        </div>
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

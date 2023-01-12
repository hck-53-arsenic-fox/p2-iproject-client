<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["getUser"]),
  },
  computed: {
    ...mapState(useAppStore, ["user"]),
  },
  mounted() {
    this.getUser();
  },
};
</script>

<template>
  <div>
    <h1>Your Profile</h1>
  </div>
  <div class="row">
    <div class="col-12 p-4 mb-4 card">
      <form class="form text-dark">
        <div class="form-group">
          <label for="name">User Name</label>
          <input class="form-control" id="user" v-model="user.user" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" id="email" v-model="user.email" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: left;
  }
}
</style>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from '../stores/user';

export default {
  data() {
    return {
      dataRegis: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    async back() {
        this.$router.push("/");
    },
    ...mapActions(useUserStore, ["register"]),
    async regis() {
      this.register(this.dataRegis)
    }
  },
};
</script>

<template>
  <!-- register page -->
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 my-2 text-center">
          <h3 class="fontstyle">Create your account</h3>
        </div>
      </div>
    </div>

    <div
      class="container-fluid d-flex justify-content-center card card1 col-md-4 text-center"
      style="border-radius: 1rem"
    >
      <h3 class="mt-1">Sign up</h3>
      <hr />
      <form>
        <div class="text-center">
          <div class="col-9 d-flex flex-column mx-auto">
            <div class="form-outline mb-2">
              <input
                type="text"
                id="registerName"
                class="form-control"
                v-model="dataRegis.username"
              />
              <label class="form-label" for="registerName">Username</label>
            </div>

            <div class="form-outline mb-2">
              <input
                type="email"
                id="registerEmail"
                class="form-control"
                v-model="dataRegis.email"
              />
              <label class="form-label" for="registerEmail">Email</label>
            </div>

            <div class="form-outline mb-2">
              <input
                type="password"
                id="registerPassword"
                class="form-control"
                v-model="dataRegis.password"
              />
              <label class="form-label" for="registerPassword">Password</label>
            </div>

            <div class="form-outline mb-2">
              <input
                type="text"
                id="registerPhoneNumber"
                class="form-control"
                v-model="dataRegis.phoneNumber"
              />
              <label class="form-label" for="registerPhoneNumber"
                >Phone Number</label
              >
            </div>
            <div class="form-outline mb-2">
              <textarea
                type="textarea"
                id="registerAddress"
                class="form-control"
                aria-label="With textarea"
                rows="2"
                v-model="dataRegis.address"
              ></textarea>
              <label class="form-con" for="registerAddress">Address</label>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-outline-primary btn-block mb-3 col-4 me-3 border text-white"
            @click.prevent="regis"
          >
            Sign up
          </button>
          <button
            @click.prevent="back"
            type="button"
            class="btn btn-outline-danger btn-block mb-3 col-4 border text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- End register page -->
</template>

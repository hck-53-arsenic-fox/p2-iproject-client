<script>
import { RouterLink } from "vue-router";
import { mapWritableState, mapState, mapActions} from "pinia";
import { usePiniaStore } from "../stores/usePiniaStore.js";
import Swal from "sweetalert2";


export default {
  name: "Navbar",
  computed: {
    ...mapWritableState(usePiniaStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(usePiniaStore, ["subscribe"]),
    logout() {
      Swal.fire({
        icon: "success",
        title: "See you",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/login");
      localStorage.clear();
      this.isLogin = false;
    },
  },
};
</script>

<template>



<nav class="dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6 bg-orange-200">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="#" class="text-blue-800 dark:text-white" aria-current="page"><RouterLink to="/">Home</RouterLink></a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white" @click.prevent="logout">Logout</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white"></a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white"></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

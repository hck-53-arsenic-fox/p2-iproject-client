<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useGameStore } from "../stores/game";
import { useUserStore } from "../stores/user";
export default {
  computed: {
    ...mapState(useUserStore, ['isLogin']),
  },
  methods: {
    ...mapActions(useUserStore, ['logout'])
  }
}
</script>

<template>
  <header
    class="px-12 py-4 flex items-center justify-between bg-neutral-800 text-white"
  >
    <div class="text-3xl">
      <strong class="text-red-600">GAME</strong
      ><span class="font-semibold">RENT</span>
    </div>

    <div>
      <ul class="flex gap-4 items-center p-2">
        <li>
          <RouterLink to="/" href="">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/games" href="">Games</RouterLink>
        </li>
        <li>
          <RouterLink to="/console" href="">Console</RouterLink>
        </li>
        <li v-if="isLogin">
          <RouterLink to="/cart" href="">Cart</RouterLink>
        </li>
        <li v-if="isLogin">
          <RouterLink to="/forum" href="">Forum</RouterLink>
        </li>
        <li v-if="!isLogin">
          <RouterLink to="/login" href="">Login</RouterLink>
        </li>
        <li v-if="isLogin">
          <a @click.prevent="logout" href="">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>

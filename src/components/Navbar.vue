<script>
import { RouterLink } from "vue-router";
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
        <li>
          <RouterLink to="/cart" href="">Cart</RouterLink>
        </li>
        <li>
          <RouterLink to="/login" href="">Login</RouterLink>
        </li>
        <li>
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>

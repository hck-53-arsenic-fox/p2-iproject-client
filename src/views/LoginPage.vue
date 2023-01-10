<script>
import {RouterLink} from 'vue-router'
</script>
<template>
  <!-- LOGIN PAGE -->
  <section class="px-12 py-4">
    <div class="text-2xl">
      <RouterLink to="/" href="">
        <strong class="text-red-600">GAME</strong
        ><span class="font-semibold">RENT</span>
      </RouterLink>
    </div>
    <div class="w-fit mx-auto mt-24">
      <form>
        <div
          class="rounded-xl w-[280px] px-3 py-2 border-[3px] border-neutral-900 tracking-wider text-center hover:-translate-y-1 flex items-center justify-center"
        >
          <div>
            <img src="../assets/img/google_logo.png" alt="google-icon" width="30" />
          </div>
          <p class="font-semibold">Continue with Google</p>
        </div>
        <div class="text-center p-3">or</div>
        <div>
          <input
            type="text"
            placeholder="Email"
            class="rounded-xl w-[280px] px-3 py-2 appearance-none border-[3px] border-neutral-900 focus:border-red-500 focus:outline-none placeholder:tracking-wider tracking-wider"
          />
        </div>
        <div class="mt-4">
          <input
            type="password"
            placeholder="Password"
            class="rounded-xl w-[280px] px-3 py-2 appearance-none border-[3px] border-neutral-900 focus:border-red-500 focus:outline-none placeholder:tracking-wider tracking-wider"
          />
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="rounded-xl w-[280px] px-3 py-2 appearance-none border-[3px] border-neutral-900 bg-neutral-900 tracking-wider text-white hover:-translate-y-1"
          >
            <strong>Login</strong>
          </button>
        </div>
        <div class="mt-3 text-center text-sm">
          No Account ?
          <a href="" class="text-blue-500 hover:underline">Create One</a>
        </div>
      </form>
    </div>
  </section>
</template>

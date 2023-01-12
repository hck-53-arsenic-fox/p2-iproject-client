<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapWritableState(useUserStore, ["text", "messages"]),
    ...mapState(useUserStore, ['userForum'])
  },
  methods: {
    ...mapActions(useUserStore, ["joinForum", "sendMessage"]),
    changeLR() {
      (this.prev = false), (this.next = true);
    },
  },
  created() {
    this.joinForum();
  },
};
</script>

<template>
  <section class="px-12 py-4">
    <div class="text-2xl">
      <RouterLink to="/" href="">
        <strong class="text-red-600">GAME</strong
        ><span class="font-semibold">RENT</span>
      </RouterLink>
    </div>

    <div class="font-semibold tracking-widest">Live Chat</div>
  </section>

  <section
    class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10"
  >
    <!-- Component Start -->
    <div
      class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden"
    >
      <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
        <div class="text-xs text-center">Type something</div>
        <div v-for="message in messages">
          <!-- KANAN -->
          <div v-if="message.user == userForum" class="flex w-full mt-2 space-x-3 max-w-xs">
            <div>
              <div class="text-xs text-gray-500 leading-none mb-2">
                {{ message.user }}
              </div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">{{ message.text }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- KIRI -->
          <div v-if="message.user !== userForum" class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="text-xs text-gray-500 leading-none mb-2">
                {{ message.user }}
              </div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">{{ message.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-300 p-4">
        <input
          v-model="text"
          @keyup.enter="sendMessage"
          class="flex items-center h-10 w-full rounded px-3 text-sm"
          type="text"
          placeholder="Type your message…"
        />
      </div>
    </div>
    <!-- Component End  -->
  </section>
</template>

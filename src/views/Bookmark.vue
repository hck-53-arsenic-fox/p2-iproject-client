<script>
import Header from "../components/Header.vue";
import { mapActions, mapState } from "pinia";
import { useTravelokalStore } from "../stores/travelokal";

export default {
  computed: {
    ...mapState(useTravelokalStore, ["bookMarks"]),
  },
  methods: {
    ...mapActions(useTravelokalStore, ["getBookmark", 'deleteBookmark']),
  },
  components: {
    Header,
  },
  created() {
    this.getBookmark();
  },
};
</script>

<template>
  <section>
    <Header />
  </section>
  <section class="text-gray-600 body-font">
    <div class="px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 md:w-1/3"
          v-for="bookmark in bookMarks"
          :key="bookmark.id"
        >
          <div
            class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center transition-all duration-400 hover:scale-110"
              :src="bookmark.image_url"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                {{ bookmark.type }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                {{ bookmark.name }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ bookmark.price }}
              </p>
              <p class="leading-relaxed mb-3">
                {{ bookmark.ranking }}
              </p>
              <div class="flex items-center flex-wrap justify-between">
                <a
                  :href="bookmark.website"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
                  target="_blank"
                >
                  Website
                </a>
                <a
                  :href="bookmark.trip_advisor"
                  class="text-slate-800 bg-[#1dd1a1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                >
                  Trip Advisor
                </a>
              </div>
              <div>
                <button
                  @click="deleteBookmark(bookmark.id)"
                  href=""
                  class="text-slate-800 bg-[#feca57] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-3"
                >
                  Delete Bookmark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

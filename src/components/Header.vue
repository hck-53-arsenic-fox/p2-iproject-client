<script>
export default {};
</script>

<template>
  <nav class="z-0 relative" x-data="{open:false,menu:false, lokasi:false}">
    <div class="relative z-10 bg-[#2e86de] shadow">
      <div class="px-2 sm:px-4 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center px-2 lg:px-0">
            <a class="flex-shrink-0" href="#">
                <span><h1>Travelokal</h1></span>
            </a>
            <div class="hidden lg:block lg:ml-2">
              <div class="flex">
                <a
                  href="#"
                  class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-[#2980b9] hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Location
                </a>
              </div>
            </div>
          </div>
          <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end right-0">
            <span class="ml-4 px-3 py-2 rounded-md text-lg leading-5 font-medium text-slate-800 focus:outline-none focus:text-white focus:bg-gray-700"><h1 class="align-middle">Explore new places</h1></span>
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search </label>
              <form method="get" action="#" class="relative z-50">
                <button
                  type="submit"
                  id="searchsubmit"
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  name="s"
                  id="s"
                  class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-blue-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          <div class="flex lg:hidden">
            <button
              @click="menu = !menu"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div x-show="menu" class="block md:hidden">
        <div class="px-2 pt-2 pb-3">
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Location
          </a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Article
          </a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Recipe
          </a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Promo
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

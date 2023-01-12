<script>
import { mapActions } from 'pinia';
import { useHawaStore } from '../stores/hariistimewa';

export default {
    name: 'Nabvar',
    
    methods: {
        ...mapActions(useHawaStore, ['navigatePage']),
    }
}
</script>

<template>
    <header class="sticky top-0 z-50 shadow-md shadow-pink-200">
        <div class="w-full text-gray-700 bg-white ">
            <div class="flex  max-w-screen-xl mx-auto items-center justify-between flex-row px-6 lg:px-8">
                <div class="items-center p-4">
                    <img src="../assets/img/logo-hi.png" width="100" alt="">
                </div>
                <nav class="">
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-pink-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-pink-200 focus:outline-none focus:shadow-outline"
                        href="#!">Home</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-pink-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-pink-200 focus:outline-none focus:shadow-outline"
                        href="#!">Portfolio</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-pink-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-pink-200 focus:outline-none focus:shadow-outline"
                        href="#!">Harga</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-pink-900 focus:text-gray-900 hover:bg-pink-200 focus:bg-pink-200 focus:outline-none focus:shadow-outline"
                        href="#!">Tema</a>
                </nav>
                <nav class="bg-pink-200 p-2 rounded-md shadow-md shadow-pink-200 border border-pink-300">
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-pink-900 focus:text-gray-900 focus:bg-pink-200 focus:outline-none focus:shadow-outline"
                    @click.prevent="navigatePage('/login')" >Login</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-white rounded-lg hover:text-white focus:text-gray-900 hover:bg-pink-400 focus:bg-pink-200 focus:outline-none focus:shadow-outline"
                    @click.prevent="navigatePage('/register')" >Register</a>
                </nav>
            </div>
        </div>
    </header>
</template>
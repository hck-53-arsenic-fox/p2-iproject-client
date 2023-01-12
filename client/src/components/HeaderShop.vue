<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

    export default{
        name : "NavShop",
    }
</script>
<template>
    <div class="flex justify-between items-center px-16 py-7 drop-shadow-lg shadow-sm">
        <div class="flex pl-4 gap-x-5 text-sm">
            <div class="border-b border-transparent hover:border-white duration-300">
                <router-link  to="/artist">
                    <p>Artists</p>
                </router-link>
            </div>
            <div class="border-b border-transparent hover:border-white duration-300">
                <router-link  to="/exhibitions">
                    <p>Events</p>
                </router-link>
            </div>
            <div class="border-b border-transparent hover:border-white duration-300">
                <router-link to="/" >
                    <p>Home</p>
                </router-link>
            </div>
            <div class="border-b border-transparent hover:border-white duration-300">
                <router-link to="/tour" >
                    <p>Tour</p>
                </router-link>
            </div>
        </div>
        <div class="flex absolute" style="right: 45%;">
            <img src="../assets/letter_u_building_modern_business_logo-removebg-preview.png" alt="" width="30" class="">
            <p class="text-2xl font-semibold">EDITIONS</p>
        </div>
        <div class="flex gap-x-4">
            <p>Search</p>
            <p>Cart</p>
        </div>
    </div>
</template>
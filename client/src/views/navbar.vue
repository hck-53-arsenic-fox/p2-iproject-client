<script>
import { def } from "@vue/shared";
import {mapActions, mapState, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default{
    name:"navbar",
    computed:{
        ...mapWritableState(useCounterStore, ['isAuth'])
    },
    methods:{
        ...mapActions(useCounterStore, ['handleLogout'])

    }
}
</script>

<template>
        <!-- header section starts-->
        <nav>
            <div class="nav-container">
                <header>
                <a class="logo"><i class='bx bx-plus-medical' ></i>Youandmie.</a>
        
                <ul class="navbar">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/doctors">Our Doctors</RouterLink></li>
                    <li><RouterLink to="/about">About Us</RouterLink></li>
                    <li><RouterLink to="/medicine">Medicine</RouterLink></li>
                </ul>
        
                <div class="header-icons">
                    <a v-if="isAuth" @click.prevent="handleLogout"><i class='bx bxs-door-open' ></i></a>
                    <RouterLink v-if="!isAuth" to="/login"><i class='bx bxs-user'></i></RouterLink>
                    <RouterLink to="/transactions"><i class='bx bx-basket' ></i></RouterLink>
                </div>
            </header>
            </div>
        </nav>
    <!-- header section ends-->
</template>
<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user'

export default {
    name: 'App',
    data() {
        return {
            isLogin: false
        }
    },
    created() {
        if (localStorage.access_token) {
            this.isLogin = true
        }
    },
    methods: {
        ...mapActions(useUserStore, ['handleLogOut'])
    }
}
</script>

<template>
    <nav class="navbar sticky-top bg-black" style="width: 100%;">
        <div class="container-fluid">
            <RouterLink to="/">
                <img src="../assets/logo.png" style="width:90px;height:50px">
            </RouterLink>
            <div class="d-flex">
                <div style="margin-right: 20px;">
                    <RouterLink to="/event" style="color: white;text-decoration: none;" v-if="isLogin">EVENTS</RouterLink>
                </div>
                <div style="margin-right: 20px;">
                    <RouterLink to="/ranking" style="color: white;text-decoration: none;">RANKINGS</RouterLink>
                </div>
                <div style="margin-right: 20px;">
                    <a href="#" style="color: white;text-decoration: none;" v-if="isLogin" @click.prevent="handleLogOut">LOGOUT</a>
                </div>
                <div style="margin-right: 20px;">
                    <RouterLink to="/login" style="color: white;text-decoration: none;" v-if="!isLogin">LOGIN
                    </RouterLink>
                </div>
                <div style="margin-right: 20px;">
                    <RouterLink to="/register" style="color: white;text-decoration: none;" v-if="!isLogin">REGISTER</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
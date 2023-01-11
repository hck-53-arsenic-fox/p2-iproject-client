<script>
import { mapActions, mapState } from 'pinia';
import { usePlayerStore } from '../stores/player';

export default {
    name: 'NavbarTwo',
    methods: {
        ...mapActions(usePlayerStore, ['fetchUserProfile'])
    },
    computed: {
        ...mapState(usePlayerStore, ['userProfile'])
    },
    created() {
        this.fetchUserProfile()
    }
}
</script>

<template>
    <header class="site-navbar py-3  js-sticky-header site-navbar-target" style="background-color: black;" role="banner">

        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <div class="site-logo"><RouterLink to="/">ENBI E<span>.</span> </RouterLink></div>
                <div class="ml-auto">
                    <nav class="site-navigation position-relative text-right" role="navigation">
                        <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                            <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
                            <li><RouterLink to="/players" class="nav-link">Players</RouterLink></li>
                            <li><a @click.prevent="$router.push('/users/' + userProfile.username + '/following')" class="nav-link" style="cursor: pointer;">Following</a></li>
                            <li><a @click.prevent="$router.push('/users/' + userProfile.username)" class="nav-link" style="cursor: pointer;">My Profile</a></li>
                            <li><RouterLink to="/login" class="nav-link">Login</RouterLink></li>
                            <li><a @click.prevent="logout" class="nav-link" >Logout</a></li>
                        </ul>
                    </nav>
                    <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"><span
                            class="icon-menu h3"></span></a>
                </div>

            </div>
        </div>

    </header>
</template>
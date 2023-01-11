<script>
import { mapActions, mapState } from 'pinia';
import NavbarTwo from '../components/NavbarTwo.vue';
import { usePlayerStore } from '../stores/player';

    export default {
    name: "UserProfile",
    components: { NavbarTwo },
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
    <NavbarTwo />

    <pre>{{ userProfile }}</pre>
    <h1 style="padding-top:200px;">user profile</h1>
</template>
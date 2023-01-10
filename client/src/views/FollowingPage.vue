<script>
import { mapActions, mapState } from 'pinia';
import FavoriteCard from '../components/FavoriteCard.vue';
import NavbarTwo from '../components/NavbarTwo.vue';
import { usePlayerStore } from '../stores/player';

export default {
    name: "FollowingPage",
    methods: {
        ...mapActions(usePlayerStore, ["fetchFollowing"])
    },
    computed: {
        ...mapState(usePlayerStore, ["following"])
    },
    created() {
        this.fetchFollowing();
    },
    components: { FavoriteCard, NavbarTwo }
}
</script>

<template>
    <NavbarTwo />
    
    <div class="site-section" id="classes-section">
        <div class="container mt-5">
            <div class="row justify-content-center text-center mb-5">
                <div class="section-heading">
                    <h2 class="heading mb-3">Followed player</h2>
                </div>
            </div>
            <!-- Card -->
            <FavoriteCard v-for="follow in following" :key="follow.id" :follow="follow" />
            
            
        </div>
    </div>

</template>

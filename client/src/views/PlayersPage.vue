<script>
import { mapActions, mapState } from 'pinia';
import { usePlayerStore } from '../stores/player'
import PlayerCard from '../components/PlayerCard.vue';

export default {
    name: "PlayersPage",
    components: { PlayerCard },
    methods: {
        ...mapActions(usePlayerStore, ['fetchPlayers'])
    },
    computed: {
        ...mapState(usePlayerStore, ['players'])
    },
    created() {
        this.fetchPlayers()
    }
}
</script>

<template>
    <div class="site-section" id="classes-section">
        <div class="container">
            <div class="row justify-content-center text-center mb-5">
                <div class="col-md-8  section-heading">
                    <span class="subheading">NBA</span>
                    <h2 class="heading mb-3">Player list</h2>
                    <p>Looking for a player you like? You can click on the player's name to see the profile of the player with details. Click the favorite button to add players to your favorite player list</p>
                </div>
            </div>
            <!-- Card -->
            <div class="justify-content-center row" style="margin-left: 150px;">
                <PlayerCard 
                v-for="player in players"
                :key="player.id"
                :player="player"
            />
            </div>
            
        </div>
    </div>
</template>
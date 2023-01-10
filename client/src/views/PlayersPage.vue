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
                    <span class="subheading">Fitness Class</span>
                    <h2 class="heading mb-3">Classes</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the
                        blind texts.
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                        ocean.</p>
                </div>
            </div>
            <!-- Card -->
            <PlayerCard 
                v-for="player in players"
                :key="player.id"
                :player="player"
            />
        </div>
    </div>
</template>
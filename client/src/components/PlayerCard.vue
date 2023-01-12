<script>
import { mapActions, mapState } from 'pinia';
import { usePlayerStore } from '../stores/player'

export default {
    name: 'PlayerCard',
    props: ['player'],
    methods: {
        ...mapActions(usePlayerStore, ['fetchOnePlayer'])
    },
    computed: {
        ...mapState(usePlayerStore, ['onePlayer'])
    },
    // created() {
    //     this.fetchOnePlayer()
    // }
}
</script>

<template>
    <div class="col-4 mt-5" @click="this.fetchOnePlayer(player.id)" style="cursor: pointer;">
        <div class="class-item d-flex align-items-center">
            <a @click="this.fetchOnePlayer(player.id)" class="class-item-thumbnail" style="cursor: pointer;">
                <img :src="player.imgUrl" alt="Free website template by Free-Template.co">
            </a>
            <div class="class-item-text">

                <!-- $router.push('/players/' + player.id) -->
                <h2><a @click="this.fetchOnePlayer(player.id)">{{ player.name }} | {{ player.teamShort }}</a>
                </h2>
                <span>{{ player.teamName }}</span>,
                <span>{{ player.country }}</span>
            </div>
        </div>
    </div>
</template>
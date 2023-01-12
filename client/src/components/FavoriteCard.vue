<script>
import { mapActions } from 'pinia';
import { usePlayerStore } from '../stores/player';

export default {
    name: 'FavoriteCard',
    props: ['follow'],
    methods: {
        ...mapActions(usePlayerStore, ['fetchOnePlayer'])
    },

}
</script>

<template>
    <!-- <pre>{{ follow }}</pre> -->
     <div class="col-6 mt-5" @click="this.fetchOnePlayer(follow.Player.id)" style="cursor: pointer;">
        <div class="class-item d-flex align-items-center">
            <a @click="this.fetchOnePlayer(follow.Player.id)" class="class-item-thumbnail" style="cursor: pointer;">
                <img :src="follow.Player.imgUrl" alt="Free website template by Free-Template.co">
            </a>
            <div class="class-item-text">

                <!-- $router.push('/players/' + player.id) -->
                <h2><a @click="this.fetchOnePlayer(follow.Player.id)">{{ follow.Player.name }} | {{ follow.Player.teamShort }}</a>
                </h2>
                <span>{{ follow.Player.teamName }}</span>,
                <span>{{ follow.Player.country }}</span>
            </div>
        </div>
    </div>
    
</template>

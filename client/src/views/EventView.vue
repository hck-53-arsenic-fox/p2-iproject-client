<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'EventView',
    methods: {
        ...mapActions(useUserStore, ['subscribe', 'profile', 'fetchAllEvents', 'fetchLogs']),
        searchEvents(index, search) {
            this.fetchAllEvents(index, search)
            this.search = ''
        }
    },
    computed: {
        ...mapState(useUserStore, ['oneProfile', 'allEvents', 'allLogs', 'totalPage'])
    },
    created() {
        this.profile()
        this.fetchAllEvents(1)
        this.fetchLogs()
    },
    data() {
        return {
            search: ''
        }
    }
}
</script>

<template>
    <div class="col container1">
        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_sm/s3/2022-12/011423-ufc-fight-night-imavov-vs-gastelum-SG-hero.jpg?h=d1cb525d&itok=Gw8bAKs2"
            style="width: 100%;height:688px;filter:brightness(40%);" class="img-fluid" alt="...">
        <div class="centered">
            <h3 style="margin-bottom:20px;text-align: center;font-family: Georgia, serif;font-weight: bold;">UFC FIGHT
                NIGHT</h3>
            <h1 style="font-family:Georgia, serif;font-weight: bolder;font-size: 50px;">IMAMOV VS GASTELUM</h1>
            <p style="margin-bottom:20px;text-align: center;font-family: Georgia, serif;font-weight: bold;">Elite
                Middleweight Meet at The UFC APEX to Kick Off 2023</p>
        </div>
    </div>
    
    <!-- -Search Option--->
    <div class="input-group mb-3" style="width:50%;margin-top: 20px;">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1"
            @click.prevent="searchEvents(1, search)">Search</button>
        <input type="text" v-model="search" class="form-control" placeholder=""
            aria-label="Example text with button addon" aria-describedby="button-addon1">
    </div>
    <!---End Search Option- -->

    <!---All Event--->
    <div style="margin-top: 50px;">
        <div class="d-flex justify-content-between" style="text-align: center;padding-top:30px;width: 50%;margin: auto;"
            v-for="event in allEvents" :key="event.id">
            <div class="p-2">
                <h5>{{ event.name }}</h5>
            </div>
            <!-- <div class="p-2" v-if="allEvents.find((el) => el.capacity === 0)">
                <p>Full Capacity</p>
            </div> -->
            <!-- <div v-else> -->
            <div class="p-2" v-if="allLogs.find((el) => el.CompetitionId === event.id)">
                <p>Already Booked</p>
            </div>
            <div class="p-2" v-else>
                <button v-if="event.capacity > 0" type="button" class="btn btn-primary" @click.prevent="subscribe(event.id)">Buy to
                    watch</button>
                <p v-else>Sold Out</p>
            </div>
            <!-- </div> -->
        </div>
    </div>
    <!---End All Event--->

    <!---Pagiantion--->
    <nav aria-label="Page navigation example" style="position: absolute;margin-top: 20px;">
        <ul class="pagination">
            <li class="page-item" v-for="index in totalPage"><a class="page-link" href="#"
                    @click.prevent="fetchAllEvents(index)">{{ index }}</a></li>
        </ul>
    </nav>
    <!---End Pagiantion--->
</template>
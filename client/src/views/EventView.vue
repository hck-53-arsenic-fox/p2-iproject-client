<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'EventView',
    methods: {
        ...mapActions(useUserStore, ['subscribe', 'profile', 'fetchAllEvents', 'fetchLogs'])
    },
    computed: {
        ...mapState(useUserStore, ['oneProfile', 'allEvents', 'allLogs', 'totalPage'])
    },
    created() {
        this.profile()
        this.fetchAllEvents(1)
        this.fetchLogs()
    },
}
</script>

<template>
    <!-- -Event Option--->
    <!-- <div class="d-flex justify-content-center" style="margin-top: 50px">
        <div class="p-2">
            <a href="#" style="text-decoration: none;color: grey;font-size: 30px;font-weight: bolder;">UPCOMING</a>
        </div>
        <div class="p-2">
            <a href="#" style="text-decoration: none;color: black;font-size:30px;font-weight: bolder;">PAST</a>
        </div>
    </div> -->
    <!---End Event Option- -->

    <!---Past Event--->
    <div style="margin-top: 50px;">
        <div class="d-flex justify-content-between" style="text-align: center;padding-top:30px;width: 50%;margin: auto;"
            v-for="event in allEvents" :key="event.id">
            <div class="p-2">
                <h5>{{ event.name }}</h5>
            </div>
            <div class="p-2" v-if="allEvents.find((el) => el.capacity === 0)">
                <p>Full Capacity</p>
            </div>
            <div v-else>
                <div class="p-2" v-if="allLogs.find((el) => el.CompetitionId === event.id)">
                    <p>Already Booked</p>
                </div>
                <div class="p-2" v-else>
                    <button type="button" class="btn btn-primary" @click.prevent="subscribe(event.id)">Buy to
                        watch</button>
                </div>
            </div>
        </div>
    </div>
    <!---End Past Event--->

    <!---Pagiantion--->
    <nav aria-label="Page navigation example" style="position: absolute;right: 100px;">
        <ul class="pagination">
            <li class="page-item" v-for="index in totalPage"><a class="page-link" href="#"
                    @click.prevent="fetchAllEvents(index)">{{ index }}</a></li>
        </ul>
    </nav>
    <!---End Pagiantion--->
</template>
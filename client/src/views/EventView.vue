<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'EventView',
    methods: {
        ...mapActions(useUserStore, ['subscribe', 'profile', 'fetchAllEvents', 'fetchLogs']),
        searchEvents(index, search) {
            this.fetchAllEvents(index, search)
        },
        changePage(index, search) {
            this.currentPage = index
            this.fetchAllEvents(index, search)
        }
    },
    computed: {
        ...mapState(useUserStore, ['oneProfile', 'allEvents', 'allLogs', 'totalPage']),
        pageShown() {
            const { currentPage } = this
            if (currentPage < 6) {
                return [1, 2, 3, 4, 5, 6]
            } else {
                return [currentPage - 4, currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1]
            }
        }
    },
    created() {
        this.profile()
        this.fetchAllEvents(1)
        this.fetchLogs()
    },
    data() {
        return {
            search: '',
            currentPage: 1
        }
    }
}
</script>

<template>

    <h1 style="text-align: center;margin-top: 20px;">Events</h1>
    <!-- -Search Option--->
    <div class="input-group mb-3" style="width:50%;margin: auto;margin-top: 50px;">
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
                <button v-if="event.capacity > 0" type="button" class="btn btn-primary"
                    @click.prevent="subscribe(event.id)">Buy to
                    watch</button>
                <p v-else>Sold Out</p>
            </div>
            <!-- </div> -->
        </div>
    </div>
    <!---End All Event--->

    <!---Pagiantion--->
    <div style="width: 100%;display:flex;justify-content: center;">
        <nav aria-label="Page navigation example" style="position: absolute;margin-top: 20px;">
            <ul class="pagination">
                <li class="page-item" v-for="index in pageShown"><a class="page-link" href="#"
                        @click.prevent="changePage(index, search)">{{ index }}</a></li>
            </ul>
        </nav>
    </div>
    <!---End Pagiantion--->
</template>
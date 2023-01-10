<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'EventView',
    methods: {
        ...mapActions(useUserStore, ['subscribe', 'profile'])
    },
    computed: {
        ...mapState(useUserStore, ['isSubs', 'oneProfile'])
    },
    created() {
        this.profile()
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
        <div class="d-flex justify-content-between"
            style="text-align: center;padding-top:30px;width: 50%;margin: auto;">
            <div class="p-2">
                <h5>UFC Fight Night: Kattar vs. Chikadze</h5>
                <p>2022-01-15T17:00:00</p>
            </div>
            <div class="p-2" v-if="!oneProfile.isSubscribed">
                <button type="button" class="btn btn-primary" @click.prevent="subscribe">Subscribe to watch</button>
            </div>
            <div class="p-2" v-if="oneProfile.isSubscribed">
                <button type="button" class="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
    <!---End Past Event--->
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app'

import Navbar from '../components/Navbar.vue';
import ChatList from '../components/ChatList.vue'
import ChatBox from '../components/ChatBox.vue';

export default {
    components: {
        Navbar,
        ChatList,
        ChatBox
    },
    computed: {
        ...mapState(useAppStore, ['userInfo'])
    },
    methods: {
        ...mapActions(useAppStore, ['setUserInfo'])
    },
    created() {
        this.setUserInfo()
        console.log(this.userInfo);
    }
}
</script>

<template>
    <div class="page-container">
        <Navbar />

        <ChatList />

        <ChatBox />
    </div>
</template>

<style scoped>
.page-container {
    background-color: var(--primaryBlue);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
</style>
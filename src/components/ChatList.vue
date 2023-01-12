<script>
import { mapActions, mapState } from 'pinia';
import ChatListBox from './ChatListBox.vue';

import { useAppStore } from '../stores/app'
export default {
    components: {
        ChatListBox
    },
    computed: {
        ...mapState(useAppStore, ['chatList'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchChatList'])
    },
    created() {
        this.fetchChatList()
    }
}
</script>

<template>
    <section>
        <h3>My Chat</h3>
        <div>
            <ChatListBox v-for="chat in chatList" :key="chat._id" :chat="chat" />
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: rgb(179, 199, 219);
    margin-top: 5rem;
    height: 80%;
    width: 30%;
}
</style>
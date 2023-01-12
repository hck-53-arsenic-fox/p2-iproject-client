<script>
import { mapActions, mapState } from 'pinia';
import ChatListBox from './ListBox/ChatListBox.vue';

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
        <header>
            <h3>My Chat</h3>
            <button>New Group Chat<span class="material-symbols-outlined">
                    add
                </span></button>
        </header>

        <div v-if="chatList.length">
            <ChatListBox v-for="chat in chatList" :key="chat._id" :item="chat" />
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: rgb(179, 199, 219);
    margin-top: 5rem;
    height: 80%;
    width: 30%;
    padding: 1rem;
    border-radius: 1rem;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

header button {
    display: flex;
    align-items: center;
    border: none;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0.4rem 0.3rem;
    border-radius: 0.5rem;
    background-color: rgb(157, 167, 245);
    color: var(--primaryBlue);
    transition: all 0.2s;
}

header button:hover {
    background-color: var(--primaryBlue);
    color: rgb(157, 167, 245);
}
</style>
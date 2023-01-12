<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    props: ['item'],
    computed: {
        ...mapWritableState(useAppStore, ['selectedChatId']),
        ...mapState(useAppStore, ['userInfo']),
    },
    methods: {
        ...mapActions(useAppStore, ['getSenderName']),

        select() {
            this.selectedChatId = this.item._id
        }
    }
}
</script>

<template>
    <div @click="select()" tabindex="0" class="myContainer" :class="selectedChatId === item._id ? 'activated' : ''">
        <p class="chatName">{{ getSenderName(item) }}</p>
        <p v-if="!item.latestMessage">No Chat yet</p>
        <p v-if="item.latestMessage"><b>{{ item.latestMessage.sender.name }}:</b> {{ item.latestMessage.content }}</p>
    </div>
</template>

<style scoped>
.myContainer {
    border: 1px solid black;
    background-color: rgb(216, 216, 216);
    margin: 1rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    transition: 0.2s;
    cursor: pointer;
}

.myContainer:hover {
    background-color: rgb(198, 198, 198);
}

.myContainer:focus,
.activated {
    background-color: rgb(170, 177, 208);
}

p {
    margin: 0;
}
</style>
<script>
import { mapState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    props: ['item'],
    computed: {
        ...mapState(useAppStore, ['userInfo']),

        properName() {
            if (this.item.chatName !== 'sender') {
                return this.item.chatName
            }
            let users = this.item.users
            console.log(users);
            for (let user of users) {
                if (user.name !== this.userInfo.name) {
                    return user.name
                }
            }
        }
    }
}
</script>

<template>
    <div class="myContainer">
        <p class="chatName">{{ properName }}</p>
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

p {
    margin: 0;
}
</style>
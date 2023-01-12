<script>
export default {
    props: ['chat']
}
</script>

<template>
    <div class="myContainer">
        <p class="chatName">{{ chat.chatName }}</p>
        <p v-if="!chat.latestMessage">No Chat yet</p>
        <p v-if="chat.latestMessage"><b>{{ chat.latestMessage.sender.name }}:</b> {{ chat.latestMessage.content }}</p>
    </div>
</template>

<style scoped>
.myContainer {
    border: 1px solid black;
    background-color: rgb(178, 178, 178);
    margin: 1rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

p {
    margin: 0;
}
</style>
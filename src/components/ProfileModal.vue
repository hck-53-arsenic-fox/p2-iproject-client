<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    computed: {
        ...mapWritableState(useAppStore, ['profileModal']),
        ...mapState(useAppStore, ['userInfo'])
    },
    methods: {
        ...mapActions(useAppStore, ['toggleProfileModal'])
    }
}

</script>


<template>
    <section>

        <div v-if="profileModal.openModal" class="custom-modal">
            <div class="title">
                <p class="text-center">{{ userInfo.name }}</p>
                <a @click.prevent="toggleProfileModal()"><span class="material-symbols-outlined">
                        close
                    </span></a>
            </div>
            <div>
                <div class="image-container">
                    <img :src="userInfo.pic" />
                </div>
            </div>
            <p>Email: {{ userInfo.email }}</p>
        </div>
    </section>
</template>

<style scoped>
.custom-modal {
    position: sticky;
    z-index: 999;
    height: 22rem;
    width: 20rem;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    background-color: white;
    border-radius: 1rem;
}

.title {
    position: relative;
    width: 100%;
}

.title a {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1rem;
    cursor: pointer;
}

.image-container {
    height: 10rem;
    width: 10rem;
}

img {
    height: 100%;
    width: 100%;
}

section::before {
    display: v-bind('profileModal.display');
    position: fixed;
    z-index: 99;
    content: '';
    background-color: rgb(213, 213, 213);
    opacity: 0.7;
    height: 100vh;
    width: 100vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.open {
    display: block;
}
</style>
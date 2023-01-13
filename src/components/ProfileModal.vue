<script>
import axios from 'axios';
import { Loading, Report } from 'notiflix';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    computed: {
        ...mapWritableState(useAppStore, ['profileModal']),
        ...mapState(useAppStore, ['userInfo'])
    },
    methods: {
        ...mapActions(useAppStore, ['toggleProfileModal', 'UpdateProfilePic']),

        async uploadpic(event) {
            try {
                Loading.circle()
                console.log(event.target.files[0]);
                const form = new FormData()
                form.append('image', event.target.files[0])
                form.append('directories', "[\"Kuncung\"]")

                const { data } = await axios({
                    method: 'POST',
                    url: 'https://cdn.khanz1.dev/images',
                    data: form
                })
                const pic = data.data.path
                await this.UpdateProfilePic(pic)
                Loading.remove()
                Report.success('Update Success', 'Your image has been successfully updated', 'OK')
            } catch (error) {
                console.log(error);
                this.errorHandler(error);
            }
        },
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
            <form style="position:relative;">
                <label class="image-container " for="pic">
                    <input type="file" id="pic" hidden @change="uploadpic" />
                    <img :src="userInfo.pic" />
                    <span class="material-symbols-outlined" style="position:absolute; bottom: 0; right: 0; margin:10px">
                        edit
                    </span>
                </label>
            </form>
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
    cursor: pointer;
    position: relative;
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
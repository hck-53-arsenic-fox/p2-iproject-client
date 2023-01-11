<script>
import Button from '../components/Button.vue';
import { mapActions } from 'pinia';
import { useHawaStore } from '../stores/hariistimewa';

export default {
    name: 'Login',
    components: {
        Button
    },
    data() {
        return {
            login: {
                email: '',
                password: ''
            },
            button: 'Sign In'
        }
    },

    methods: {
        ...mapActions(useHawaStore, ['navigatePage', 'handleLogin']),

    }
};
</script>

<template>
    <div class="relative flex h-full w-full">
        <div class="h-screen md:w-1/2 bg-pink-600 hidden md:block">
            <img src="https://cdn.dribbble.com/users/2443329/screenshots/15446232/media/775ea3cb3f300012b475a954a5b9144f.jpg"
                class="h-full w-full object-cover object-center " />
        </div>
        <div class="h-screen bg-gradient-to-tr from-pink-100 to-pink-300 obje w-full md:w-1/2">
            <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
                <img class="absolute  z-10 top-0 left-0 md:left-1/2 w-60 sm:w-80 md:w-96"
                    src="https://api.paleo.id/uploads/themes/single/floral-14/0.png" alt="">
                <img class="absolute z-10 bottom-0 right-0 w-72 md:w-96"
                    src="https://api.paleo.id/uploads/themes/single/floral-14/1.png" alt="">
                    <div class="max-w-sm ml-2 sm:ml-10 rounded overflow-hidden p-10 shadow-xl md:shadow-none bg-white text-zinc-900">

                    <div>
                        <p class="font-bold text-2xl">Login</p>
                        <p>please login to continue</p>
                    </div>
                    <div class="mt-10">
                        <form @submit.prevent="handleLogin(login)">
                            <div>
                                <label class="mb-2.5 block font-extrabold" for="email">Email</label>
                                <input type="email" id="email" v-model="login.email"
                                    class="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-stone-500 shadow focus:outline-none focus:ring focus:ring-pink-300"
                                    placeholder="user@mail.com" />
                            </div>
                            <div class="mt-4">
                                <label class="mb-2.5 block font-extrabold" for="email">Password</label>
                                <input type="password" id="password" v-model="login.password"
                                    class="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-stone-500 shadow focus:outline-none focus:ring focus:ring-pink-300"
                                    placeholder="*******" autocomplete="on" />
                            </div>
                            <div class="my-10">
                                <Button
                                    class="w-full text-black rounded-xl bg-pink-300 p-3 hover:bg-pink-400 hover:text-white"
                                    :button="button" />
                            </div>
                        </form>
                        <p class="mx-auto px-2 text-center text-sm">Don't have an account? <span
                                class="mx-auto px-1 text-center text-sm text-red-800"
                                @click.prevent="navigatePage('/register')">Sign
                                Up</span></p>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>


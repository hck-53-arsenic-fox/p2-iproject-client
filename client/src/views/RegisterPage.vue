<script>
import { usePlayerStore } from '../stores/player'
import { mapActions } from 'pinia'

export default {
    name: 'RegisterPage',
    data() {
        return {
            formRegister: {
                username: "",
                email: "",
                password: "",
                imgProfile: "",
            },
        };
    },
    methods: {
        ...mapActions(usePlayerStore, ['register']),
        changeFile() {
            this.formRegister.imgProfile = this.$refs.file.files[0];
        },
    },
}
</script>

<template>
    <!-- Login -->
    <div class="container-fluid d-flex justify-content-center align-items-center"
        style="background-color: #f59e0b; height: 100vh">
        <div class="border w-75 p-5 my-5 bg-white rounded-3 shadow">
            <div class="row">
                <div class="col-6">
                    <img src="../assets/undraw_Online_learning_re_qw08.png" alt="login-img" width="100%" />
                </div>
                <div class="col-6 align-self-center">
                    <form @submit.prevent="register(formRegister)">
                        <div class="mb-3">
                            <img src="https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f68150db527de25e82c86f1_Hacktiv8%20logo%20horizontal%2001%20black.png"
                                alt="logo-h8" class="mb-4" width="200px" />
                            <h5 class="mb-4">Sign in to your account</h5>
                            <label for="password" class="form-label">Username</label>
                            <input type="text" class="form-control" v-model="formRegister.username" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" autocomplete="off"
                                v-model="formRegister.email" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="formRegister.password" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">Profile Picture</label>
                            <input
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help" id="file_input" ref="file" type="file"
                                @change="changeFile" />
                            <!-- <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </p> -->
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-100 mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
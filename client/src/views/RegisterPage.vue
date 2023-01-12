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
    <div class="container-fluid d-flex justify-content-center align-items-center"
        style="background-image: url(./images/bg_4.jpg); height: 100vh">

        <a id="bgndVideo" class="player"
            data-property="{videoURL:'https://www.youtube.com/watch?v=EOQTo3GsJeY',showYTLogo:false, showAnnotations: false, showControls: false, cc_load_policy: false, containment:'#home-section',autoPlay:true, mute:true, startAt:22, stopAt: 40, opacity:1}">
        </a>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                    <h1 style="color: white; font-family: fantasy;">THE JOURNEY BEGINS HERE!</h1>
                    <div class="card p-3 py-4 shadow-lg" style="background-color: black;">

                        <form class="signin-form" @submit.prevent="register(formRegister)">
                            <div class="form-group mb-3">
                                <label class="label" for="name">Username</label>
                                <input type="text" class="form-control" placeholder="Username" required
                                    v-model="formRegister.username" />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="name">Email</label>
                                <input type="text" class="form-control" placeholder="Email" required
                                    v-model="formRegister.email" />
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="password">Password</label>
                                <input type="password" class="form-control" placeholder="Password" required
                                    v-model="formRegister.password" />
                            </div>

                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="file_input">Profile Picture</label>
                                <input class="customfile" aria-describedby="file_input_help" id="file_input" ref="file"
                                    type="file" @change="changeFile" />
                                <!-- <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                                </p> -->
                            </div>

                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Join
                                    Us</button>
                            </div>


                        </form>


                        <p>You already join the gang? <RouterLink to="/login">Come in</RouterLink>
                        </p>

                    </div>
                    <p  class="d-flex justify-content-center" style="margin-top: 20px;">by kujo#0333</p>
                </div>
            </div>
        </div>
    </div>
    <!-- block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -->
    <!-- <div class="container-fluid d-flex justify-content-center align-items-center"
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
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                        </div>

                        <button type="submit" class="btn btn-primary w-100 mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped>
.customfile {
    border: 5px solid #000;
    border-radius: 50px;
    padding: 2px;
    font-size: 15px;
}

.customfile::-webkit-file-upload-button {
    background-color: rgb(255, 255, 255);
    color: #000;
    padding: 4px 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
}


body {
    background: #eee;
}

.card {
    border: none;

    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.card:before {

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #000000;
    transform: scaleY(1);
    transition: all 0.5s;
    transform-origin: bottom
}

.card:after {

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 13px;
    height: 100%;
    background-color: #aa2438;
    transform: scaleY(0);
    transition: all 0.5s;
    transform-origin: bottom
}

.card:hover::after {
    transform: scaleY(1);
}


.fonts {
    font-size: 11px;
}

.social-list {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
}

.social-list li {
    padding: 10px;
    color: #8E24AA;
    font-size: 19px;
}


.buttons button:nth-child(1) {
    border: 1px solid #8E24AA !important;
    color: #8E24AA;
    height: 40px;
}

.buttons button:nth-child(1):hover {
    border: 1px solid #8E24AA !important;
    color: #fff;
    height: 40px;
    background-color: #8E24AA;
}

.buttons button:nth-child(2) {
    border: 1px solid #8E24AA !important;
    background-color: #8E24AA;
    color: #fff;
    height: 40px;
}
</style>

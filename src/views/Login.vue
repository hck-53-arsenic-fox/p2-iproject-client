<script>
import axios from 'axios'
import { Notify } from 'notiflix'
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    data() {
        return {
            page: 'login',
            show: false,
            checked: false,
            loginData: {
                email: '',
                password: ''
            },
            registerData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                pic: '',

            }
        }
    },
    methods: {
        toLogin() {
            this.page = 'login'
        },
        toRegister() {
            this.page = 'register'
        },
        showPassword() {
            this.show = !this.show
        },
        async uploadpic(event) {
            try {
                console.log(event.target.files[0]);
                const form = new FormData()
                form.append('image', event.target.files[0])
                form.append('directories', "[\"Kuncung\"]")

                const { data } = await axios({
                    method: 'POST',
                    url: 'https://cdn.khanz1.dev/images',
                    data: form
                })
                this.registerData.pic = data.data.path
            } catch (error) {
                console.log(error);
                this.errorHandler(error);
            }
        },

        ...mapActions(useAppStore, ['handleLogin', 'handleRegister', 'errorHandler']),

        handleLoginComponent() {
            this.handleLogin(this.loginData)
        },
        handleRegisterComponent() {
            if (this.registerData.password !== this.registerData.confirmPassword) {
                return Notify.failure("Passwords do not match")
            }

            const { name, email, password, pic, } = this.registerData
            this.handleRegister(name, email, password, pic)

        }
    }
}
</script>

<template>
    <section>

        <div class="wrapper shadow">
            <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a :class="['nav-link', page === 'login' ? 'active' : '']" id="tab-login" data-mdb-toggle="pill"
                        href="#" role="tab" aria-controls="pills-login" aria-selected="true"
                        @click.prevent="toLogin">Login</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a :class="['nav-link', page === 'register' ? 'active' : '']" id="tab-register"
                        data-mdb-toggle="pill" href="#" role="tab" aria-controls="pills-register" aria-selected="false"
                        @click.prevent="toRegister">Register</a>
                </li>
            </ul>
            <!-- Pills navs -->

            <!-- Pills content -->
            <div class="tab-content">
                <div v-if="page === 'login'" id="pills-login" aria-labelledby="tab-login">
                    <form @submit.prevent="handleLoginComponent">
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="loginName">Email</label>
                            <input type="email" id="loginName" class="form-control" v-model="loginData.email" />
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="loginPassword">Password</label>
                            <div class="password-container">
                                <input :type="show ? 'text' : 'password'" id="loginPassword" class="form-control"
                                    v-model="loginData.password" />
                                <i v-if="!show" class="mdi mdi-eye" aria-hidden="true" @click="showPassword"></i>
                                <i v-if="show" class="mdi mdi-eye-off" aria-hidden="true" @click="showPassword"></i>
                            </div>
                        </div>

                        <!-- 2 column grid layout -->
                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">
                                <!-- Checkbox -->
                                <div class="form-check mb-3 mb-md-0">
                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" />
                                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">
                                <!-- Simple link -->
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                    </form>
                </div>

                <div v-if="page === 'register'" id="pills-register" aria-labelledby="tab-register">
                    <form @submit.prevent="handleRegisterComponent">
                        <!-- Name input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="registerName">Name</label>
                            <input type="text" id="registerName" class="form-control" v-model="registerData.name" />
                        </div>

                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="registerEmail">Email</label>
                            <input type="email" id="registerEmail" class="form-control" v-model="registerData.email" />
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="registerPassword">Password</label>

                            <div class="password-container">
                                <input :type="show ? 'text' : 'password'" id="registerPassword" class="form-control"
                                    v-model="registerData.password" />
                                <i v-if="!show" class="mdi mdi-eye" aria-hidden="true" @click="showPassword"></i>
                                <i v-if="show" class="mdi mdi-eye-off" aria-hidden="true" @click="showPassword"></i>
                            </div>
                        </div>

                        <!-- Repeat Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                            <input :type="show ? 'text' : 'password'" id="registerRepeatPassword" class="form-control"
                                v-model="registerData.confirmPassword" />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="pic">Profile picture (optional)</label>
                            <input type="file" id="pic" class="form-control" @change="uploadpic" />
                        </div>

                        <!-- Checkbox -->
                        <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                                v-model="checked" aria-describedby="registerCheckHelpText" />
                            <label class="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

ul,
form {
    width: 25rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

i {
    position: absolute;
    right: 1rem;
    transform: scale(1.5);
    cursor: pointer;
}

button[type='password'] {
    width: 100%;
}

button[type='submit'] {
    width: 100%;
}
</style>
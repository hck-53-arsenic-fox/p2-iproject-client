<script>
import { usePlayerStore } from '../stores/player'
import { mapActions } from 'pinia'

export default {
    name: 'LoginPage',
    methods: {
        ...mapActions(usePlayerStore, ['login', 'loginGoogle']),
        callback(response) {
            const credential = response.credential;
            this.loginGoogle(credential);
            // this.$emit("loginGoogle", credential);
            // console.log(response.credential)
        },
    },
    data() {
        return {
            formLogin: {
                email: '',
                password: ''
            }
        }
    }
}
</script>

<template>
    <!-- Login -->
    <div class="container-fluid d-flex justify-content-center align-items-center"
        style="background-image: url(./images/bg_4.jpg); height: 100vh">

        <!-- <a id="bgndVideo" class="player"
            data-property="{videoURL:'https://www.youtube.com/watch?v=EOQTo3GsJeY',showYTLogo:false, showAnnotations: false, showControls: false, cc_load_policy: false, containment:'#home-section',autoPlay:true, mute:true, startAt:22, stopAt: 40, opacity:1}">
        </a> -->
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                    <h1 style="color: white; font-family: fantasy;">WELCOME BACK BRUH!</h1>
                    <div class="card p-3 py-4 shadow-lg" style="background-color: black;">

                        <form class="signin-form" @submit.prevent="login(formLogin)">
                            <div class="form-group mb-3">
                                <label class="label" for="name">Email</label>
                                <input type="text" class="form-control" placeholder="Email" required
                                    v-model="formLogin.email">
                            </div>
                            <div class="form-group mb-3">
                                <label class="label" for="password">Password</label>
                                <input type="password" class="form-control" placeholder="Password" required
                                    v-model="formLogin.password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign
                                    In</button>
                            </div>

                        </form>

                        <div class="d-flex justify-content-center">
                            <p>Wannna join the gang? <RouterLink to="/register">Come here</RouterLink>
                            </p>
                        </div>
                        <p class="d-flex justify-content-center" style="margin: 2 !important;">Or Login with</p>
                        <div class="text-center mb-3">
                            <GoogleLogin :callback="callback" />
                        </div>
                    </div>
                    <p  class="d-flex justify-content-center" style="margin-top: 20px;">by kujo#0333</p>
                </div>
            </div>
        </div>
    </div>


</template>


<style scoped>
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
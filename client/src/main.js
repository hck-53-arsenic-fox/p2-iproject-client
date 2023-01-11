import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from "vue3-google-login";
import "toastify-js/src/toastify.css"


const app = createApp(App)
const pinia = createPinia();

app.use(vue3GoogleLogin, {
    clientId: '690066087393-jnq3g73u7nn39mlnevtm1kr3i2ji3tno.apps.googleusercontent.com'
  })
pinia.use(({store})=>{
    store.router = markRaw(router)
})

app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
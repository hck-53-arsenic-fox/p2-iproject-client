import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.use(vue3GoogleLogin, {
    clientId:
        '144173469621-geokgmii8jf5hbrkgt672ug7sp5lvfog.apps.googleusercontent.com',
}).mount('#app')

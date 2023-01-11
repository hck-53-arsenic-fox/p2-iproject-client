import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login';






const app = createApp(App)
const pinia = createPinia()
app.use(vue3GoogleLogin, {
  clientId:
    '262669373279-bnn3gsd1k7kmmbl2pj4s2llh4sm8l4r6.apps.googleusercontent.com',
});
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)
app.mount('#app')
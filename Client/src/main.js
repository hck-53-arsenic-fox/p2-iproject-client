import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

import "./assets/style.css"

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId: '1075900266570-v7681ttv9f1s7ro435f69etjcn9u067u.apps.googleusercontent.com'
  })

app.use(router)
app.use(pinia)

app.mount('#app')
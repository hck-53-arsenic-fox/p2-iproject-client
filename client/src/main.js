import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'



import './assets/style.css'


const app = createApp(App)
const pinia = createPinia()


pinia.use(({ store }) => {
store.router = markRaw(router)
})

app.use(router)

app.use(vue3GoogleLogin, {
    clientId: '433430770978-3pff7bk6ff4qmcc8qnvpckqil6q17bg2.apps.googleusercontent.com'
})

app.use(pinia)

app.mount('#app')

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();


pinia.use(({store})=>{
    store.router = markRaw(router)
})

app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
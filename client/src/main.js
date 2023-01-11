import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import VueDisqus from 'vue-disqus'
import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.use(VueDisqus, { shortname: 'http-localhost-3000-2iho2bia9v' })
app.mount('#app')

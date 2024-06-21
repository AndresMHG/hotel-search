import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/sass/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')

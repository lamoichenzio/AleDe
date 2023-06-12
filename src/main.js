import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import Home from "@/views/Home.vue"

const app = createApp(Home)

app.use(router)

app.mount('#page-top')
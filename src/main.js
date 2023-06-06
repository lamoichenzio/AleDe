import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/styles.css"
import "./assets/js/scripts"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"


import Home from "@/views/Home.vue";

const app = createApp(Home)

app.use(router)

app.mount('#page-top')
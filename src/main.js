import './assets/main.css'
import './assets/scripts.js'

import { createApp } from 'vue'

import Home from "@/views/Home.vue"

const app = createApp(Home)

app.mount('#page-top')
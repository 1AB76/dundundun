import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import './styles/index.css'
import './styles/css-vars.css'
import 'remixicon/fonts/remixicon.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
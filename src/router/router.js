import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        name: "about",
        path: "/about",
        component: About,
    },
    {
        name: "home",
        path: "/",
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
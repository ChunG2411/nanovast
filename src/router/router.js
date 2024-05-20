import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Home from '../views/Home.vue'


const routes = [
    {
        name: "about",
        path: "/about",
        component: About,
    },
    {
        name: "contact",
        path: "/contact",
        component: Contact,
    },
    // {
    //     name: "infor",
    //     path: "/information",
    //     component: slider1,
    // },
    {
        name: "blog",
        path: "/blog",
        component: Blog,
    },
    {
        name: "blog-detail",
        path: "/blog/:id",
        component: BlogDetail,
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
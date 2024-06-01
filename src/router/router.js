import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Product from '../views/Product.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Information from '../views/Information.vue'
import Home from '../views/Home.vue'


const routes = [
    {
        name: "about",
        path: "/about",
        component: About,
    },
    {
        name: "information",
        path: "/information",
        component: Information,
    },
    {
        name: "contact",
        path: "/contact",
        component: Contact,
    },
    {
        name: "product",
        path: "/product/:id",
        component: Product,
    },
    {
        name: "product-detail",
        path: "/product/:id_1/:id_2",
        component: ProductDetail,
    },
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
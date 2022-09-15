import {createRouter, createWebHistory} from "vue-router";
import HomeLayout from '../layout/HomeLayout.vue'


const constantRoutes = [
    {
        path: '/',
        component: HomeLayout
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router
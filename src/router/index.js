import {createRouter, createWebHistory} from "vue-router";
import HomeLayout from '../layout/HomeLayout.vue'
import FastAddRecords from '../views/fastAddRecords/FastAddRecords.vue'


const constantRoutes = [
    {
        path: '/',
        component: HomeLayout,
        children: [
            {
                name: 'fastAddRecords',
                path: 'fastAddRecords',
                component: FastAddRecords
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router
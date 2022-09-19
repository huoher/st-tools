import {createRouter, createWebHistory} from "vue-router";
import HomeLayout from '../layout/HomeLayout.vue'
import FastAddRecords from '@/views/fastAddRecords/FastAddRecords.vue'
import RecordsCalendar from '@/views/recordsCalendar/RecordsCalendar.vue'


const constantRoutes = [
    {
        path: '/',
        component: HomeLayout,
        children: [
            {
                name: 'fastAddRecords',
                path: 'fastAddRecords',
                component: FastAddRecords
            },
            {
                name: 'recordsCalendar',
                path: 'recordsCalendar',
                component: RecordsCalendar
            },
            {
                name: 'addRecords',
                path: 'addRecords',
                component: () => import('@/views/addRecords/AddRecords.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router
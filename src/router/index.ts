import { createRouter,createWebHashHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Login from '@/pages/Login.vue'
import NotFound from '@/pages/404.vue'

const routes:any[] = [
    {
        path:"/",
        component:Index
    },
    {
        path:'/login',
        component:Login
    },
    { 
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

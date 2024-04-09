import { createRouter,createWebHashHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/404.vue'

const routes:any[] = [
    {
        path:"/",
        component:Index
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/about',
        component:About
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

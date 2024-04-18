import { createRouter,createWebHashHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Login from '@/pages/Login.vue'
import NotFound from '@/pages/404.vue'
import Admin from '@/layouts/Admin.vue'

const routes:any[] = [
    {
        path:"/",
        component:Admin,
        children:[{
            path:'/',
            component:Index,
            meta:{
                title:'后台首页'
            }
        }]
    },
    {
        path:'/login',
        component:Login,
        meta:{
            title:"登录页"
        }
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

import router from '@/router'
import { getToken } from '@/composables/auth.ts'
import { toast,showFullLoading,hideFullLoading } from '@/composables/util.ts'
import useUserStore from "@/store/index.ts"

//全局前置守卫操作
let hasGetInfo:boolean = false
router.beforeEach((to:any,from:any,next:Function) => {
    showFullLoading();
    const token = getToken()
    const userStore = useUserStore();
    if(!token && to.path !== '/login') {
        toast('请先登录！','error')
        return next({ path:'/login' })
    }

    if(token && to.path == '/login'){
        toast('请勿重复登录！','error')
        return next({ path:from.path ? from.path : "/login"})
    }

    //用户登录了
    if(token && !hasGetInfo){
        userStore.getUserInfo()
        hasGetInfo = true
    }
    
    //设置页面标题
    let title = "洋果子Rose系统" + (to.meta.title ?? "")
    document.title = title

    next()
})

router.afterEach(()=>{
    hideFullLoading()
})
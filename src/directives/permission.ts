import useUserStore from "@/store/index.ts";

function hasPermission(value:any,el:any = false){
    if(!Array.isArray(value)){
        throw new Error(`需要配置权限，例如v-permission="['getStatistics3,get']"`)
    }

    const userStore = useUserStore()
    const hasAuth = value.findIndex(v=> userStore.ruleName.includes(v)) == -1;
    
    if(!hasAuth && el){
        el.parentNode && el.parentNode.removeChild(el)
    }
    return hasAuth
}

export default {
    install(app:any){
        app.directive("permission",{
            mounted(el:any, binding:any) {
                hasPermission(binding.value,el)
            }
        })
    }
}
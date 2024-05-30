import { defineStore } from "pinia";
import { getInfo,login } from "@/api/manager.ts"
import { setToken,removeToken } from '@/composables/auth.ts'
interface Type { 
    user: object | null,
    
}

const useUserStore = defineStore('userInfo', {
    state: ():Type => {
        return {
            user:null
        }
    },
    actions: {
      userLogin( username:string , password:string ){
        return new Promise((resolve:any,reject:any)=>{
          login(username,password).then((res:any)=>{
            setToken(res.token)
            this.getUserInfo()
            resolve(res)
          }).catch((err:any)=>reject(err))
        })
      },
      setUserInfo(user:object) {
        this.user = user
      },
      getUserInfo(){
        getInfo().then((res:any)=>{
          this.setUserInfo(res)
        })
      },
      //退出登录
      logout(){
          //移除token
          removeToken()
          //清除当前用户状态
          this.user = {}
      }
    }
})

export default useUserStore
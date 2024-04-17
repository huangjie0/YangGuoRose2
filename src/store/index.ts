import { defineStore } from "pinia";
import { getInfo,login } from "@/api/manager.ts"
import { setToken } from '@/composables/auth.ts'
interface Type { 
    user: object | null
}

const useUserStore = defineStore('userInfo', {
    state: ():Type => {
        return {
            user:null
        }
    },
    actions: {
      userLogin(username:string,password:string){
        return new Promise((resolve,reject)=>{
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
      }
    }
})

export default useUserStore
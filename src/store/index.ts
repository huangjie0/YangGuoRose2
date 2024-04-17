import { defineStore } from "pinia";
import { getInfo } from "@/api/manager.ts"

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
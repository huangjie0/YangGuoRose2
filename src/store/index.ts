import { defineStore } from "pinia";

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
      getInfo(){

      }
    }
})

export default useUserStore
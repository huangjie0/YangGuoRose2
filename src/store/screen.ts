import { defineStore } from "pinia";
interface Type { 
    asideWidth: string,
}

const useScreenStore = defineStore('userScreen', {
    state: ():Type => {
        return {
            asideWidth:'200px'
        }
    },
    actions: {
        //展开或者收起侧边按钮的宽度
      handleAsideWidth() {
        this.asideWidth = this.asideWidth == "200px" ? "64px" : "200px"
      }
    }
})

export default useScreenStore
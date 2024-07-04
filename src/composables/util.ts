import { ElNotification , ElMessageBox } from 'element-plus'
import  nprogress from "nprogress"

export function toast ( message:string='请求失败', type:any='success', duration:number=4000, dangerouslyUseHTMLString:boolean=true){
    ElNotification({
        message,
        type,
        duration,
        dangerouslyUseHTMLString
    })
}

export function showModal(content:string = '提示内容',type:any = "warning",title:string='标题'){
    return ElMessageBox.confirm(
        content,
        title,
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type
        }
      )
}

//显示全屏loading
export function showFullLoading(){
  nprogress.start()
}

//隐藏全屏loading
export function hideFullLoading(){
  nprogress.done()
}
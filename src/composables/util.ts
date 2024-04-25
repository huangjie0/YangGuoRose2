import { ElNotification , ElMessageBox } from 'element-plus'

export function toast (message:string='请求失败',type:any='success',duration:number=3000,dangerouslyUseHTMLString:boolean=false){
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
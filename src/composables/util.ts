import { ElNotification } from 'element-plus'

// ElNotification({
//     message: error.response.data.msg || "请求失败",
//     type:'error',
//     duration:3000
// })

export function toast (message:string='请求失败',type:any='success',duration:number=3000,dangerouslyUseHTMLString:boolean=false){
    ElNotification({
        message,
        type,
        duration,
        dangerouslyUseHTMLString
    })
}
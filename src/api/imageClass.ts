import axios from '@/axios.ts'

export function getImageClassList(page:number){
    return axios.get("/admin/image_class/" + page)
}

// 增加图库分类
export function createImageClass(data:object){
    return axios.post("/admin/image_class",data)
}

export function updateImageClass(id:number,data:object){
    return axios.post(`/admin/image_class/${id}`,data)
}

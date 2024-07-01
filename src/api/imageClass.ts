import axios from '@/axios.ts'

export function getImageClassList(page:number){
    return axios.get("/admin/image_class/" + page)
}

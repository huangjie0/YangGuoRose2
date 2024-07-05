import axios from '@/axios.ts';


export function getImageList(id:number,page:number=1){
    return axios.get(`/admin/image_class/${id}/image/${page}`)
}
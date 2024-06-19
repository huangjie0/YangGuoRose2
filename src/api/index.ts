import axios from '@/axios.ts'

export function getStatistics1(){
    return axios.get("/admin/statistics1")
}

export function getStatistics3(type:string){
    return axios.get(`/admin/statistics3?type=${type}`)
}


import axios from '@/axios.ts'

export function getStatistics1(){
    return axios.get("/admin/statistics1")
}
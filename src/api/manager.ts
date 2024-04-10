import axios from '@/axios.ts'

export function login (username:string,password:string){
    return axios.post("/admin/login",{
        username,
        password
    })
}


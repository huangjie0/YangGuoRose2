import axios from '@/axios.ts'

export function login (username:string,password:string){
    return axios.post("/admin/login",{
        username,
        password
    })
}

export function logout(){
    return axios.post("/admin/logout")
}

export function getInfo(){
    return axios.post("/admin/getinfo")
}


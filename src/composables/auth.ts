import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey:string = 'admin-token'
const cookie = useCookies()

export const getToken = ()=>{
    return cookie.get(TokenKey)
}

export const setToken = (token:string)=>{
    return cookie.set(TokenKey,token)
}

export const removeToken = ()=>{
    return cookie.remove(TokenKey)
}
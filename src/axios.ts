import axios from 'axios'
import { toast } from '@/composables/util.ts'
import { getToken } from '@/composables/auth.ts'

const service:any = axios.create({
    baseURL:"/api"
})

// 添加请求拦截器
service.interceptors.request.use(function (config:any) {
    //放token
    const token = getToken()
    if(token){
        config.headers["token"] = token
    }

    // 在发送请求之前做些什么
    return config;
  }, function (error:any) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response:any) {
    // 对响应数据做点什么
    return response.data.data;
  }, function (error:any) {
    // 对响应错误做点什么
    
    toast(error.response.data.msg,'error')

    return Promise.reject(error);
});

export default service
import axios from 'axios'

const service:any = axios.create({
    baseURL:"/api"
})

export default service
import axios from 'axios'

const service:any = axios.create({
    baseURl:"/api"
})

export default service
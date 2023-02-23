import axios from "axios";
import { getToken } from "./auth";
//创建一个实例
const service = axios.create({
  baseURL: "http://localhost:5000/",
});
//请求拦截器
service.interceptors.request.use(config=>{
    config.headers['token'] = getToken()
    return config
})
//响应拦截器
service.interceptors.response.use(res=>{
    return res
},err=>{
    return Promise.reject(err)
})
export default service
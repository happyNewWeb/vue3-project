import axios  from "../utils/request";
//login
export function login(data){
     return axios({
        method:'post',
        url:'/perinfo',
        data
     })
}
//删除list
export function deleteList(cid,userId){
   return axios({
      method:'delete',
      url:'/detList',
      params:{
         cid,
         userId
      }
   })
}
//获取表数据和导航
export function getNavData(){
   return axios({
      method:'get',
      url:'/getResources',
   })
}
//添加商品
export function addShop(data){
   return axios({
      method:'post',
      url:'/addShop',
      data
   })
}
//地图数据
export function getMapData(data){
   return axios({
      method:'GET',
      url:`/getMapData`,
      params: {
         userId:data
      },
   })
}
//表单提交
export function postForm(data){
   return axios({
      method:'post',
      url:`/postForm`,
      data
   })
}
//存
export function setToken(token){
    return localStorage.setItem('token',token)
}
//取
export function getToken(){
    return localStorage.getItem('token')
}
//删
export function removeToken(){
    return localStorage.removeItem('token')
}
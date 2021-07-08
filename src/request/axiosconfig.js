/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
 import axios from 'axios';
import { message} from 'antd';
 if (process.env.NODE_ENV === 'development') {
     //http://localhost:8081 http://www.cenbohao.com:8080 http://www.cenbohao.com/
     axios.defaults.baseURL = 'http://www.cenbohao.com:5001';
 } else if (process.env.NODE_ENV === 'debug') {
     axios.defaults.baseURL = 'http://www.cenbohao.com:5001';
 } else if (process.env.NODE_ENV === 'production') {
     axios.defaults.baseURL = 'http://www.cenbohao.com:5001';
 }
 
 // 请求超时时间
 axios.defaults.timeout = 10000;
 
 // post请求头
 //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 axios.defaults.headers.post['Content-Type'] = 'application/json;';
 // 请求拦截器
 axios.interceptors.request.use(
     config => {
         // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token
         //Bearer Token认证  请求头中带上token 前 必须加 Beare+空格   
         //c88888888888888888888onsole.log(store.state.token);
         const token = "";
        
         // console.log(store.state.token);
         config.url = decodeURI(encodeURI(config.url).replace(/%E2%80%8B/g, ""))
         token && (config.headers.Authorization = "Bearer " + token);
         return config;
     },
     error => {
         return Promise.error(error);
     })
 
     
 // 响应拦截器
 axios.interceptors.response.use(
    
     response => {
         if (response.status === 200) {

             // this.$store.commit('$_setLoding', false);
             return Promise.resolve(response);
         } else {
             return Promise.reject(response);
         }
     },
     // 服务器状态码不是200的情况    
     error => {
         if (error.response.status) {
             switch (error.response.status) {
                 // 401: 未登录                
                 // 未登录则跳转登录页面，并携带当前页面的路径                
                 // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                 case 401:
                     message.error("当前登录状态失效 请重新登录")
 
                     setTimeout(() => {
                         localStorage.removeItem('token');
                        window.location.href = "/Login"
                     }, 1000)
 
                     break;
                 // 403 token过期                
                 // 登录过期对用户进行提示                
                 // 清除本地token和清空vuex中token对象                
                 // 跳转登录页面                
                 case 403:
                      message.error("登录过期")
                     // 清除token                    
                     localStorage.removeItem('token');
                     //store.commit('loginSuccess', null);
                     // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                     setTimeout(() => {
                         window.location.href = "/login"
                     }, 1000);
                     break;
                 // 404请求不存在                
                 case 404:
                      message.error("404未找到该请求")
                     break;
                 case 400:
 
                     break;
                 // 其他错误，直接抛出错误提示                
                 default:
                   message.error("服务器内部错误 Error Soory 请刷新")
 
                 //}
 
             }
            
             return Promise.reject(error.response);
         } else {
             console.log(123);
         }
 
     }
 );
 /** 
  * get方法，对应get请求 
  * @param {String} url [请求的url地址] 
  * @param {Object} params [请求时携带的参数] 
  */
 export function get(url, params) {
     return new Promise((resolve, reject) => {
         axios.get(url, {
             params: params
         })
             .then(res => {
                 resolve(res.data);
             })
             .catch(err => {
                 reject(err.data)
             })
     });
 }
 /** 
  * post方法，对应post请求 
  * @param {String} url [请求的url地址] 
  * @param {Object} params [请求时携带的参数] 
  */
 export function post(url, params) {
     return new Promise((resolve, reject) => {
         axios.post(url, params)
             .then(res => {
                 resolve(res.data);
             })
             .catch(err => {
                 reject(err.data)
             })
     });
 }
 
 
 /** 
  * delete方法，对应post请求 
  * @param {String} url [请求的url地址] 
  * @param {Object} params [请求时携带的参数] 
  */
 export function Delete(url, params) {
     console.log(params);
     return new Promise((resolve, reject) => {
         console.log(params);
         axios.delete(url, params)
             .then(res => {
                 resolve(res.data);
             })
             .catch(err => {
                 reject(err.data)
             })
     });
 }
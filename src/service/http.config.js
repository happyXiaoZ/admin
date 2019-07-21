import axios from 'axios';
import QS from 'qs';
// import {Messages} from '@/common/util.js'
let that = this;
// 请求超时时间
axios.defaults.timeout = 5000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use( config => {
	// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    let Token = localStorage.getItem('token');
    if(Token)
    Token && (config.headers.Token = Token);
    return config;
},error => {
	return Promise.error(error);
})

// 响应拦截器
axios.interceptors.response.use( response => {
	if(response.status === 200){
		return Promise.resolve(response);
	}else{
		return Promise.reject(response);
	}
},
// 服务器状态码不是200的情况
error => {
	if(error.response.status){
		switch (error.response.status) {
            // 401: 未登录
            // 未登录则跳转登录页面，并携带当前页面的路径
            // 在登录成功后返回当前页面，这一步需要在登录页操作。
            case 401:
                router.replace({
                    path: '/login',
                    query: { redirect: router.currentRoute.fullPath }
                });
                break;
            // 403 token过期
            // 登录过期对用户进行提示
            // 清除本地token和清空vuex中token对象
            // 跳转登录页面
            case 403:
                this.$Messages.errMessage('登录过期，请重新登录');
                // 清除token
                localStorage.removeItem('token');
                // store.commit('loginSuccess', null);
                // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                setTimeout(() => {
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000);
                break;
            // 404请求不存在
            case 404:
                this.$Messages.errMessage('网络请求不存在');
            	break;
            // 其他错误，直接抛出错误提示
            default:
            	this.$Messages.otherMessage(error);
        }
	}
	return Promise.reject(error.response);
})

//post请求
let post = (url,param) => {
	return new Promise((resolve,reject) => {
		axios.post(url, QS.stringify(param)).then(result => {
			resolve(result);
		},error =>{
			reject(error);
		})
	})
};

//get请求
let get = (url,param) => {
	return new Promise((resolve,reject) => {
		axios.get(url, {param:param}).then(result => {
			resolve(result);
		},error =>{
			reject(error);
		})
	})
}

export {post,get}


















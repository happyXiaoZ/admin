// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from '@/router/router.config'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {api} from '@/service/api.js'
import {Messages} from '@/common/util.js'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$api= api
Vue.prototype.$Messages = Messages

Vue.config.productionTip = false

//全局守卫  监听登录状态
// router.beforeEach((to, from, next) => {
// 	let _self = this;
// 	let path = to.path;
// 	if(path === '/login' || path === '/register'){
// 		next();
// 	}else if(path === '/main/modulePreview'){
// 		next();
// 	}else{
// 		alert('还没有登录,请先登录');
// 		next('/login');
// 	}
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

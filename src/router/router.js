import Vue from 'vue'
import vueRouter from 'vue-router'
import {route} from '@/router/routes'
Vue.use(vueRouter)

const routes = route;

const router = new vueRouter({
    routes,
    mode:"history"
})

export {router}
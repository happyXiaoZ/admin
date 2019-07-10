
import login from '@/views/login/Login'


import main from '@/views/Main'  //中间主体
import modulePreview from '@/views/modulePreview/moduleMain' //一级菜单
import defaultMain from '@/views/defaultModule/defaultMain' //二级菜单-子菜单1
import defaultMain2 from '@/views/defaultModule/defaultMain2' //二级菜单-子菜单2
import rightsMain from '@/views/rightsManage/rightsMain' //三级菜单
import userMain from '@/views/userManage/userMain' //四级菜单
const route = [
	{path:'/',redirect:'/login'},
    {path:"/login",component:login,name:'login'},
    {path:"/main",redirect:'/main/modulePreview',component:main,name:'main',children:[
        {path:'/main/modulePreview',component:modulePreview,name:'modulePreview'},
        {path:'/main/defaultMain',component:defaultMain,name:'defaultMain'},
        {path:'/main/defaultMain2',component:defaultMain2,name:'defaultMain2'},
        {path:'/main/rightsMain',component:rightsMain,name:'rightsMain'},
        {path:'/main/userMain',component:userMain,name:'userMain'},
    ]},
    {path:'*',redirect:'/'}
];

export {route}
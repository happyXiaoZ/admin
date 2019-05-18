
import login from '@/views/login/Login'


import main from '@/views/Main'  //中间主体
import modulePreview from '@/views/modulePreview/moduleMain' //模块预览
import defaultMain from '@/views/defaultModule/defaultMain' //预设模块
import rightsMain from '@/views/rightsManage/rightsMain' //权限管理
import userMain from '@/views/userManage/userMain' //角色管理


const route = [
    {path:"/",component:login,name:'login'},
    {path:"/main",component:main,name:'main',children:[
        {path:'/main/modulePreview',component:modulePreview,name:'modulePreview'},
        {path:'/main/defaultMain',component:defaultMain,name:'defaultMain'},
        {path:'/main/rightsMain',component:rightsMain,name:'rightsMain'},
        {path:'/main/userMain',component:userMain,name:'userMain'},
    ]},
];

export {route}
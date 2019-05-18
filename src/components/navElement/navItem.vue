<template>
    <div id="navItem">
        <el-menu class="nav-mnu" style="width:100%;height:100%;" 
            unique-opened
            default-active="activeIndex" 
            
            background-color="#2a384a"
            text-color="silver"
            active-text-color="#fff">
            <!-- <NavItem v-if="showRoot" :model="menus"></NavItem> -->
           <el-menu-item v-for="(item,index) in data.children" :key="index" class="itm" :index="item.index" @click.native="toItemNav($event,index)">
                <i class="el-icon-news"/>
                <!-- <i style="width:3ex"></i> -->
                <span class="nav_span" slot="title" :id="item.index">{{item.label}}</span>
            </el-menu-item>
        </el-menu>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            data:{"label":"导航菜单","index":"0","children":[
                    {"label":"模块预览","index":"01"}, 
                    { "label": "预设模块","index":"02"},
                    { "label": "角色管理","index":"03"},
                    { "label": "权限管理","index":"04"},
                ]
            }
        } 
    },
    methods:{
            toItemNav(event,i){
                switch(i){
                    case 0:
                    console.log(i);
                    this.$router.push({name:'modulePreview'})
                    break;
                    case 1:
                    console.log(i);
                    this.$router.push({name:'defaultMain'})
                    break;
                    case 2:
                    console.log(i);
                    this.$router.push({name:'rightsMain'})
                    break;
                    case 3:
                    console.log(i);
                    this.$router.push({name:'userMain'})
                    break;
                }
            },
        }
}
</script>

<style lang="scss" scoped>
.nav-mnu{
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    background: #112a44;
    background: #057cf3;
}
.itm{
  height:48px!important;
  display:-webkit-flex; /**Safari*/
  display:flex;
  flex-direction:row;
  align-items:center;
}

.nav_span{
    font-size: 16px;
}
</style>



<template>
    <div id="navItem">
        <el-menu class="nav-mnu" style="width:100%;height:100%;" 
            unique-opened
            :default-active="activeIndex" 
            background-color="#2a384a"
            text-color="silver"
            active-text-color="#409EFF">
            <el-menu-item class="itm" v-for="(item,index) in data.children" :index="item.index" :key="index" v-if="!item.children" @click.native="toItemNav($event,index,item)">
                <i :class="item.icon"></i>
                <span>{{item.label}}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.index">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item @click.native="toItemNav($event,index)" :key="index" v-for="(cItem,index) in item.children" :index="cItem.index">
                    <span>{{cItem.label}}</span>
                </el-menu-item>
            </el-submenu>
          <!--  <el-menu-item v-for="(item,index) in data.children" :key="index" class="itm" :index="item.index" @click.native="toItemNav($event,index)">
                <i class="el-icon-news"/>
                <span class="nav_span" slot="title" :id="item.index">{{item.label}}</span>
            </el-menu-item> -->
        </el-menu>

    </div>
    
    
</template>

<script>
export default {
    data(){
        return {
            data:{"label":"导航菜单","index":"0","children":[
                    {"label":"一级菜单1","index":"01","path":"modulePreview","icon":"el-icon-news"}, 
                    { "label": "一级菜单2","index":"02","icon":"el-icon-menu","path":"defaultMain"
                        ,"children":[
                        {"label":"子菜单1","index":"02-01"},
                        {"label":"子菜单2","index":"02-02"}
                    ]},
                    { "label": "一级菜单3","index":"03","icon":"el-icon-setting","path":"rightsMain"},
                    { "label": "一级菜单4","index":"04","icon":"el-icon-edit-outline","path":"userMain"},
                ]
            },
            activeIndex:'01'
        } 
    },
    methods:{
            toItemNav(event,i,item){
                this.$router.push({name:item.path});
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

.nav-sty{
    text-decoration: none;
    color: silver;
}

.nav_span{
    font-size: 16px;
}
</style>



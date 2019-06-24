<template>
    <div id="bodys">
        <div class="nav-head">
            {{slogan}}  
        </div>
        
        <!-- <el-container class="bdr">
            <el-aside class="bdr-lft" style="height:100%;width:auto;min-width:222px;overflow:hidden;"> -->
            <!-- <el-scrollbar style="height:100%;"> -->
                <navItem/>
            <!-- </el-scrollbar> -->
            <!-- </el-aside> -->
           <!--  <el-main class="bdr-rht" style="height:100%;">
                <router-view></router-view>
            </el-main> -->
        <!-- </el-container> -->
    </div>
</template>

<script>
import navItem from '@/components/navElement/navItem'
export default {
    components:{
        navItem
    },
    data(){
        return{
            slogan:'',
            
        }
    },
    mounted(){
        this.slogan = '后台管理系统';
    }
}
</script>

<style lang="scss" scoped>
#bodys{
    width:100%;height:100%;
    background-color: rgb(42, 56, 74);
}
.nav-head{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: silver;
    font-size: 26px;
}
// .bdr{
//     width:100%;height:100%;
//   }
//   .bdr-lft{
//     /* background-color:#545c64; */
//     background-color:#2a384a;
//   }
//   .bdr-rht{
//     border:0px red solid;padding:0 20px;
//   }
</style>



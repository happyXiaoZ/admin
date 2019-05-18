<template>
    <div id="bodys">
        <el-container class="bdr">
            <el-aside class="bdr-lft" style="height:100%;width:auto;min-width:222px;overflow:hidden;">
            <el-scrollbar style="height:100%;margin-top:17px;">
                <navItem/><br/>
            </el-scrollbar>
            </el-aside>
            <el-main class="bdr-rht" style="height:100%;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import navItem from '@/components/navElement/navItem'
export default {
    components:{
        navItem
    }
}
</script>

<style lang="scss" scoped>
#bodys{
    width:100%;height:100%;
}
.bdr{
    width:100%;height:100%;
  }
  .bdr-lft{
    /* background-color:#545c64; */
    background-color:#2a384a;
  }
  .bdr-rht{
    border:0px red solid;padding:0 20px;
  }
</style>



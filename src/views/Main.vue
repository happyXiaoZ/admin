<template>
    <div id="main">
        <el-container style="height:100%;">
          <el-aside width="220px" style="height:100%;width:auto;min-width:222px;overflow:hidden;">
              <Bodys></Bodys>
          </el-aside>
          <el-container>
            <el-header style="padding: 0px;">
                <Header></Header>
            </el-header>
            <el-main style="height:100%;">
                <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
        <!-- <div class="main-hdr" style="width:100%;height:8%;">
            <Header></Header>
        </div>
        <div class="main-hdr" style="width:100%;height:92%;">
            <Bodys></Bodys>
        </div> -->
    </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Bodys from '@/components/layout/Bodys'
// import navItem from '@/components/navElement/navItem'
export default {
    components:{
        Header,Bodys
    }
}
</script>

<style lang="scss" scoped>
html,body{width:100%;height:100%;margin:0;font-family:verdana,helvetica,arial,sans-serif;}
#main{
    width: 100%;
    height: 100%;
    display:-webkit-flex; /**Safari*/
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    overflow:hidden;
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



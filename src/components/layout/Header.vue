<template>
  <div class="header">
      <div class="cus">
      <!-- <el-row :gutter="30"> -->
        <!-- <el-col :span="6"> -->
          <img class="user-img" src="@/assets/image/login-bg.jpeg">
          <!-- </el-col> -->
        <!-- <el-col :span="18"> -->
          <el-dropdown trigger="click">
            <span class="el-dropdown-link user-name">
              世界你好
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        <!-- </el-col> -->
      <!-- </el-row> -->
        <!--   <img src="@/assets/image/login-bg.jpeg">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              世界你好
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
      </div> 
    
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      
    }
  },
  mounted(){
    
    // console.log(this.slogan);
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width:100%;height:100%;
    background-color:#2a384a;
    font-size:25px;color: silver;
  }
  .cus{
    width:auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 45px;
    font-size: 16px;
  }
  .user-img{
    width:40px;
    height: 40px;
    border-radius: 50%;
    
  }
  .user-name{
    color: silver !important;
    // height: 60px;
    // line-height: 60px;
    border:0;
    outline: none;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
      color: rgb(64, 158, 255) !important;
    }
  }
</style>
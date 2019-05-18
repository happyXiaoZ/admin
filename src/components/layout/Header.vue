<template>
  <div class="header">
      {{slogan}}
    
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      slogan:'',
    }
  },
  mounted(){
    this.slogan = '景观云 个人CRM';
    // console.log(this.slogan);
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width:100%;height:100%;
    display:-webkit-flex; /* Safari */
    display:flex;
    flex-direction:row;
    // justify-content:space-around;
    align-items:center;/*flex-end;*/
    overflow:hidden;
    background-color:#2a384a;
    font-size:25px;color: silver;
  }
</style>
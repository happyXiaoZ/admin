<template>
    <div id="login">
        <el-button type="success" @click="toMian">登录</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        toMian(){
            this.$router.push({name:'main', params:{flag:'登录成功!'}})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>



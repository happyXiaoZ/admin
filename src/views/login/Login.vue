<template>
    <div id="login">

		<div class="login-div">
			<p class="login-div-title">欢迎登录</p>
			<el-form :rules="rules" status-icon label-width="1em" :model="loginForm" ref="loginForm" class="demo-dynamic">
			  	<el-form-item class="lgn-fr" label=" " prop="acount">
			  		<el-input
			  			class="lgn-in"
					    placeholder="账号"
					    v-model="loginForm.acount">
					    <!-- <i slot="prefix" class="lgn-fa"></i> -->
					 </el-input>
			 	</el-form-item>
			 	<el-form-item class="lgn-fr" label=" " prop="pass">
				    <el-input 
						class="lgn-in"
				    	type="password"
				    	placeholder="密码"
				    	v-model="loginForm.pass"
				    	auto-complete="off">
				    	<!-- <i slot="prefix" class="lgn-fa"></i> -->
				    </el-input>
				 </el-form-item>
				 <el-form-item size="large" >
				    <el-button :loading="loading" :plain="plain" class="login-btn" type="success" 
				    @click="onSubmit">登录</el-button>
				 </el-form-item>
			</el-form>
		</div>

    </div>
</template>

<script>
export default {
	data(){
		return{
			rules:{
				acount:[
					{required:true,message:'请输入账号',trigger:'blur'}
				],
				pass:[
					{required:true,message:'请输入密码'},
					{min:6,max:15,message: '长度在 6 到 15 个字符'}
				]
			},
			loginForm:{
				acount:'',
				pass:''
			},
			loading:false,
			plain:false
		}
	},
    methods:{
        onSubmit(){
        	let that = this;
        	this.loading = true;
        	setTimeout(()=>{
        		that.loading = false;
        		this.$message({
		          message: '登录成功!',
		          type: 'success'
		        });
        		this.$router.push({name:'main', params:{flag:'登录成功!'}});
        	},1000)

        }
    }
}
</script>

<style lang="scss" scoped>
#login{
	width: 100%;
	height: 100%;
	background-image: url(../../assets/image/login-bg2.jpg);
	// background-color: #2a384a;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: relative;
}

.login-div{
	width: 350px;
	min-width: 250px;
	max-height: 330px;
	min-height: 250px;
	background-color: rgba(255,255,255,.4);
	position: absolute;
	margin:auto;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	border-radius: 10px;
}

.login-div-title{
	width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 19px;
    color: #fff;
    letter-spacing: 0.3em;
}
.demo-dynamic{
	width: 90%;
	margin: 0 auto;
	z-index: 5;
}
.login-btn{
	margin-top: 5%;
	width:100%;
	font-size:15px;
}
</style>



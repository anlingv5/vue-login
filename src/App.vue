<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
     return userInfo;
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      this.userInfo = {
        nick:'doterlin',
        ulevel:20,
        uid:'10000',
        portrait:'assets/logo.png'
      }
      axios.get(url,{"params":this.userInfo}).then((res)=>{
         if (res.data.code == 0) {
           this.$store.commit('updataUserInfo',this.userInfo);
         }
      }, (req)=>{
        console.log("用户登录接口出现问题！")
      })
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

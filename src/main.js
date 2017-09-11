// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(axios)
Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch:{
  	"$route":'checkLogin'
  },
  created(){
  	this.checkLogin();
  },
  methods:{
  	checkLogin(){
  		// 检查是否存在session
  		if (!this.getCookie('session')) {
  			// 如果没有登录状态则跳转到登录页
  			this.$router.push('/login');
  		}else{
  			// 否则跳转到登录后的页面
  			this.$router.push('/user_info');
  		}
  	}
  }
})

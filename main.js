import App from './App'
import TestData from './testData.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

const msg = null
const prePage = null

const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(TestData[type]);
		}, 500)
	})
}
// Vue.prototype.$fire = new Vue();
// Vue.prototype.$store = store;
Vue.prototype.$api = {msg, json, prePage};
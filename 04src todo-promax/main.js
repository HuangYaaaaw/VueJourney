import Vue  from 'vue'
import App from './App.vue'
Vue.config.devtools = true

Vue.prototype.$bus=new Vue()
// 给每个办公室安装对讲机
new Vue({
    el:'#app',
    
    render:h=>h(App)
})
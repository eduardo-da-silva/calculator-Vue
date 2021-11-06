import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import VueResizeText from 'vue-resize-text';

Vue.use(VueResizeText)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

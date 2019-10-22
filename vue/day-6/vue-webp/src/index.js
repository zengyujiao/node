import 'weui'
import Vue from 'vue/dist/vue'
import './style/style.css'
// 共有模块
import Tabber from "./comp/tabber/tabber.vue";

// 页面模块
import Main from './page/min/min.vue'

new Vue({
    el: '#app',
    render(h) {
        return h('div', null, [
            h(Main),
            h(Tabber)
        ])
    },
    component: {
        Main,
        Tabber
    }
})
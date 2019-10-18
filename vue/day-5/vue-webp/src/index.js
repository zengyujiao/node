import 'weui'
import Vue from 'vue/dist/vue'
import './style/style.css'
// 共有模块
import './comp/header/header'
import './comp/search/search'
import './comp/panel/panel'
import './comp/tabber/tabber'

// 页面模块
import './page/wechat/wechat'
import './page/contact/contact'
import './page/rerover/rerover'
import './page/win/win'
import './page/min/min'

new Vue({
    el: '#app',
    template: `
        <div>
            <eno-min></eno-min>
            <eno-tabber></eno-tabber>
        </div>
    `
})
import Vue from 'vue/dist/vue'
import template from './tabber.html'
export default new Vue({
    el: "#tabber",
    data: {
        taber: [
            { title: '微信', url: "./wechat", badge: 8, dot: false },
            { title: '通讯录', url: "./contact", badge: 0, dot: false },
            { title: '发现', url: "./recover", badge: 0, dot: true },
            { title: '我', url: "./min", badge: 0, dot: false }
        ],
        offset:0
    },
    template,
    methods: {
        heightLheight(index) {
            this.offset = index
        }
    }
})
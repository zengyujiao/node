import Vue from 'vue/dist/vue'
import template from './tabber.html'
import observer from '../../tool/observer'
export default Vue.component("eno-tabber",{
    // 数据层
    data() {
        return {
            taber: [
                { title: '微信', url: "./wechat", badge: 8, dot: false },
                { title: '通讯录', url: "./contact", badge: 0, dot: false },
                { title: '发现', url: "./recover", badge: 0, dot: true },
                { title: '我', url: "./min", badge: 0, dot: false }
            ],
            offset:0
        }
    },
    // 视图层
    template,
    // 方法
    methods: {
        heightLheight(index) {
            this.offset = index
            // 传递值选项卡的索引值给min.js
            observer.emit("setTabber", index)
            
        }
    }
})
import Vue from 'vue/dist/vue'
import template from './search.html'
import observer from '../../tool/observer'
export default new Vue({
    el: "#search",
    // 数据层
    data: {
        // fool在前端用v-bind(简写 ：)使用
        fool:false,
        title: "取消",
        // searchText用v-model()使用
        searchText:""
    },
    // 视图层 
    template,
    // 逻辑和方法
    methods: {
        // 点击取消，改变布尔值，true，显示，false隐藏
        toggle() {
            this.fool = !this.fool
        },
        clone() {
            this.fool = false
        },
        // 点击x,清空输入框
        remove() {
            this.searchText = ""
        }
    },
    watch: {
         // 监听搜索框
         searchText() {
            // 使用观察者模式
            observer.emit('setSeatchText', this.searchText)
        }
    }
})

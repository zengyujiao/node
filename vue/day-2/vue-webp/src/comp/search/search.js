import Vue from 'vue/dist/vue'
import template from './search.html'
import txt from './search.txt'
// 封装成一个函数
const search = new Vue({
    // 拿到这个标签
    el: '#search',
    data: {
        isFocus: false,
        // 输入框的值
        searchText:'',
        cenon:"取消",
        title: txt,
        
    },
    template,
    methods: {
        clone() {
            this.isFocus = !this.isFocus
        },
        iclear() {
            this.searchText = ''
        }
    }
})
export default search
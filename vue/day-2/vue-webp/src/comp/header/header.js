// 连接vue完整版本
import Vue from 'vue/dist/vue';
export default new Vue({
    el: '#header',
    data: {
        title: '今日头条'
    },
    template: `
        <header>{{title}}</header>
    `
})
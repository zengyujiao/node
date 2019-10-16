import Vue from 'vue/dist/vue'
import template from './panel.html'
import axios from 'axios'
const rm = new Vue({
    el: "#panel",
    data: {
        add:[],
        page:1
    },
    template,
    methods: {
        getNews() {
            let _self = this;
            // 发一个ajax网络请求
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.page++,  //Number 页数
                    tab: 'ask',         // String 主题分类。目前有 ask share job good
                    limit: 10,          // Number 每一页的主题数量
                    mdrender: false     // String 当为 false 时
                }
            }).then((data) => {
                // 注意：如果这里为箭头函数，this指向的是toggle,
                //     ：如果为function,this指向的是当前then,想指向toggle，需要在外面把this保存到一个变量中，比如：_self=this
                // 把数据赋值给数据层里面的空数组

                // 如果直接用this,那么当我点击更多的时候，它只会更新上面的数据，而不是显示在已经存在的数据后面
                // this.add = data.data.data

                // 如果用保存好的this，那么点击更多的时候，会显示在已经存在的数据后面
                _self.add = [..._self.add, ...data.data.data]
            })
        }
    }
})
rm.getNews()
export default rm
<template>
    <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
        <a v-for="(item,index) in addComputed" :key="index" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg"
        :to="{name:'det',params:{id:index}}">
            <div @click="showGallery(item.author.avatar_url)" class="weui-media-box__hd">
                <img class="weui-media-box__thumb"
                    v-bind:src="item.author.avatar_url"
                    alt="">
            </div>
            <div @click="navData(index)"  class="weui-media-box__bd">
                <h4 class="weui-media-box__title" v-text="item.title"></h4>
                <p class="weui-media-box__desc" v-text="item.author.loginname"></p>
            </div>
        </a>
    </div>
    <div @click="getNews" class="weui-panel__ft">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd">查看更多</div>
            <span class="weui-cell__ft"></span>
        </a>
    </div>
</div>
</template>

<script>
// 用辅助函数
import {mapActions} from 'vuex'
import axios from 'axios'
import observer from "../../tool/observer"
export default {
    props:{
        tab:String
    },
    data() {
        return {
            add:[],
            page: 1,
            searchText:""
        }
    },
    methods: {
        getNews() {
            let _self = this;
            // 发一个ajax网络请求
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.page++,  //Number 页数
                    tab: this.tab,         // String 主题分类。目前有 ask share job good
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
        },
        // 编程式导航
        navData(index){
            this.$router.push({
                name:'det',
                params:{id:index}
                })
        },
        // 取出仓库
        ...mapActions(["setGalleryState"]),
        // 显示图片，把图片传到仓库
        showGallery(imgUrl){
            this.setGalleryState({
                imgUrl,
                isShow:true
            })
            console.log(imgUrl)
        },
        
    },
    computed: {
        addComputed() {
            // 当输入框有值时，就执行过滤逻辑，当输入框没有值时，就返回原来的数组
            if (this.searchText) {
                return this.add.filter((item) => {
                    if (item.title.indexOf(this.searchText) != -1) {
                        return item
                    }
                })
            }
            // 当输入框没有值时，返回原来的数组
            else {
                return this.add
            }
        }
    },
    mounted() {
        console.log(observer)
        observer.on('setSeatchText', (searchText) => {
            this.searchText = searchText
        })
        console.log(this)
        this.getNews()
    }
}
</script>
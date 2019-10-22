<template>
    <div v-bind:class="['weui-search-bar',{'weui-search-bar_focusing':fool}]" id="searchBar">
    <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input ref="input" v-model="searchText" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
            <a @click="remove" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label @click="toggle" class="weui-search-bar__label" id="searchText"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
    </form>
    <a @click="clone" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">{{title}}</a>
</div>

<!-- v-bind(简写 ：):布尔值，false，true -->
<!-- v-model()：输入框，清空输入框 -->
<!-- v-on(简写 @ ):clcik:点击 -->
</template>

<script>
import observer from '../../tool/observer'
export default {
    // 数据层
    data() {
        return {
            // fool在前端用v-bind(简写 ：)使用
            fool:false,
            title: "取消",
            // searchText用v-model()使用,输入框的值
            searchText:""
        }
    },
    // 逻辑和方法
    methods: {
        // 点击取消，改变布尔值，true，显示，false隐藏
        toggle() {
            this.fool = !this.fool
            // 聚焦，点击输入框时，直接获取到输入框，就不需要在点击一次了
            this.$refs.input.focus();
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
}
</script>
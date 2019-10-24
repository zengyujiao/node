<template>
    <div class="weui-tabbar">
    <router-link v-for="(item,index) in taber" :key="index" @click="heightLheight(index)" href="javascript:;" v-bind:class="['weui-tabbar__item',
     {'weui-bar__item_on':offset === index}]" :to="{name:item.url}">
        <span style="display: inline-block;position: relative;">
            <img src="https://weui.io/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <span v-if="item.badge>0" class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            <span v-if="item.dot" class="weui-badge weui-badge_dot"
                style="position: absolute;top: 0;right: -6px;"></span>
        </span>
        <p v-text="item.title" class="weui-tabbar__label"></p>
    </router-link>
</div>
<!-- v-for="(item,index) in 数组"：遍历数组（each） -->
<!-- v-if():有或者没有：增加（addend）或者删除（remove） -->
<!-- v-text():拿到数组里的某一个值 -->
<!-- v-on(简写 @ )：点击，事件绑定 -->
<!-- v-bind(简写 ：)：布尔值，更改属性值 -->
</template>

<script>
import observer from '../../tool/observer'
export default {
    // 从外面传递数字进来
    props:{
        offset:Number
    },
     // 数据层
    data() {
        return {
            taber: [
                { title: '微信', url: "wechat", badge: 8, dot: false },
                { title: '通讯录', url: "contact", badge: 0, dot: false },
                { title: '发现', url: "rerover", badge: 0, dot: true },
                { title: '我', url: "mine", badge: 0, dot: false }
            ],
            // offset:this.offset
        }
    },
    // 方法
    methods: {
        heightLheight(index) {
            this.offset = index
            // 传递值选项卡的索引值给min.js
            observer.emit("setTabber", index)
            
        }
    }
}
</script>
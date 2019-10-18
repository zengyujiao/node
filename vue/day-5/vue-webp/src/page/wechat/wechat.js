import Vue from 'vue/dist/vue'
export default Vue.component("eno-wechat", {
    // 当点击切换时，它们要总体一起动，所有单独放到一个模块中，方便使用
    template: `
        <div>
            <eno-header>微信</eno-header>
            <eno-search></eno-search>
            <eno-panel></eno-panel>
        </div>
    `
})
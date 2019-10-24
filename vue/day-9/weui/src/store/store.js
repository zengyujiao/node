// 导入vue和Vuex
import Vue from 'vue'
// 这是规范
import Vuex from 'vuex'
Vue.use(Vuex)

// 用四大核心属性来存储
export default new Vuex.Store({
    // 状态
    state: {
        author: "yao",
        galleryState: {
            imgUrl: "",
            isShow:false
        }
    },
    // 拿
    getters: {},
    // 异步
    actions: {
        setGalleryState(context,data) {
            context.commit("setGalleryState",data)
        }
    },
    // 同步
    mutations: {
        setGalleryState(state, data) {
            state.galleryState = data
        }
    }
})
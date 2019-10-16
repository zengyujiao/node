import Vue from 'vue/dist/vue'
import template from './search.html'
export default new Vue({
    el: "#search",
    data: {
        fool:false,
        title:"Android ActionSheet"
    },
    template,
    methods: {
        clone() {
            this.fool = !this.fool
        }
    }
})
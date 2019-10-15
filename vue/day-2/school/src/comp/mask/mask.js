import Vue from 'vue/dist/vue'
import template from './mask.html'
export default new Vue({
    el: '#mask',
    data: {
        fool:!false,
        title: 'ActionSheet'
    },
    template,
    methods: {
        clone() {
            this.fool = !this.fool
        }
    }
})
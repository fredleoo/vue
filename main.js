Vue.config.devtools = true

window.Event = new Vue()

Vue.component('progress-view', {
    data() {
        return { completionRate: 10}
    },
    methods: {

    }
})

Vue.component('message', {
    template:`<h1>message</h1>`
})

new Vue({
    el: '#root',
    mounted() {
        console.log('vue coupon mounted')
    },
    methods: {
        
    },
    created() {
        
    }
})
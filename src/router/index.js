import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// import Cat from "../pages/Cat.vue"
import Dog from "../pages/Dog.vue"

const routes = [
    {
        path: '/Cat',
        component: resolve => require(['../pages/Cat.vue'], resolve),
    },
    {
        path: '/Dog',
        component: Dog
    }
]

export default new Router({
    routes
});


